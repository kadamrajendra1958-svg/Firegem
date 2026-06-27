"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function PipelineAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 8;
    camera.position.y = 1;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    
    // Clear any existing canvas
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
    container.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    // Colors from Obsidian Revenue System
    const colors = {
      primary: 0x25D366,
      secondary: 0x128C7E,
      accent: 0x34D399,
      surface: 0x0F1A12
    };

    const nodes: THREE.Mesh[] = [];
    const connections: THREE.Line[] = [];
    const nodeCount = 4;
    const spacing = 2.5;

    // Node Geometries
    const geometries = [
      new THREE.IcosahedronGeometry(0.5, 0), // Meeting
      new THREE.OctahedronGeometry(0.5, 0),   // Summary
      new THREE.BoxGeometry(0.8, 0.8, 0.8),   // Proposal
      new THREE.TorusKnotGeometry(0.4, 0.15, 64, 8) // Closed Deal
    ];

    for (let i = 0; i < nodeCount; i++) {
      const material = new THREE.MeshPhongMaterial({
        color: colors.primary,
        emissive: colors.secondary,
        shininess: 100,
        transparent: true,
        opacity: 0.8 + (i * 0.05),
        flatShading: true
      });

      const node = new THREE.Mesh(geometries[i], material);
      node.position.y = (nodeCount / 2 - i) * spacing;
      node.position.x = Math.sin(i * 0.5) * 0.5;
      group.add(node);
      nodes.push(node);

      // Connection Line
      if (i > 0) {
        const curve = new THREE.LineCurve3(
          nodes[i-1].position.clone(),
          nodes[i].position.clone()
        );
        const points = curve.getPoints(50);
        const lineGeo = new THREE.BufferGeometry().setFromPoints(points);
        const lineMat = new THREE.LineBasicMaterial({ 
          color: colors.primary, 
          transparent: true, 
          opacity: 0.2 
        });
        const line = new THREE.Line(lineGeo, lineMat);
        group.add(line);
        connections.push(line);
      }
    }

    // Floating Particles
    const particlesGeo = new THREE.BufferGeometry();
    const particlesCount = 50;
    const posArray = new Float32Array(particlesCount * 3);
    for(let i=0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 15;
    }
    particlesGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particlesMat = new THREE.PointsMaterial({
      size: 0.05,
      color: colors.primary,
      transparent: true,
      opacity: 0.5
    });
    const particlesMesh = new THREE.Points(particlesGeo, particlesMat);
    scene.add(particlesMesh);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(colors.primary, 2, 20);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    const blueLight = new THREE.PointLight(0x00ffff, 1, 20);
    blueLight.position.set(-5, -5, 5);
    scene.add(blueLight);

    let animationFrameId: number;
    let time = 0;
    
    function animate() {
      animationFrameId = requestAnimationFrame(animate);
      time += 0.01;

      nodes.forEach((node, i) => {
        node.rotation.y += 0.01;
        node.rotation.x += 0.005;
        node.position.x = Math.sin(time + i) * 0.3;
        // Pulse scale
        const scale = 1 + Math.sin(time * 2 + i) * 0.05;
        node.scale.setScalar(scale);
      });

      particlesMesh.rotation.y += 0.001;
      particlesMesh.position.y = Math.sin(time * 0.5) * 0.5;

      renderer.render(scene, camera);
    }

    const handleResize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      
      // Proper cleanup of Three.js resources
      geometries.forEach(g => g.dispose());
      nodes.forEach(n => (n.material as THREE.Material).dispose());
      connections.forEach(c => {
        c.geometry.dispose();
        (c.material as THREE.Material).dispose();
      });
      particlesGeo.dispose();
      particlesMat.dispose();
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={containerRef} className="w-full h-full" />;
}
