"use client";

import { useEffect, useRef } from "react";

export default function FunnelShader() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    function syncSize() {
      const w = canvas?.clientWidth || 1280;
      const h = canvas?.clientHeight || 720;
      if (canvas && (canvas.width !== w || canvas.height !== h)) {
        canvas.width = w;
        canvas.height = h;
      }
    }
    
    const resizeObserver = new ResizeObserver(syncSize);
    resizeObserver.observe(canvas);
    syncSize();

    const gl = (canvas.getContext("webgl") || canvas.getContext("experimental-webgl")) as WebGLRenderingContext | null;
    if (!gl) return;

    const vs = `attribute vec2 a_position;
varying vec2 v_texCoord;
void main() {
  v_texCoord = a_position * 0.5 + 0.5;
  gl_Position = vec4(a_position, 0.0, 1.0);
}`;
    const fs = `precision highp float;
varying vec2 v_texCoord;
uniform float u_time;
uniform vec2 u_resolution;

float funnel_shape(vec2 uv, float top_w, float bot_w, float height, float center_y) {
    float half_h = height * 0.5;
    float d_y = uv.y - center_y;
    if (abs(d_y) > half_h) return 0.0;
    
    float t = (uv.y - (center_y - half_h)) / height;
    float current_w = mix(bot_w, top_w, t);
    return step(abs(uv.x - 0.5), current_w * 0.5);
}

void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution.xy;
    vec3 bg = vec3(0.04, 0.04, 0.04); // #0A0A0A
    vec3 accent = vec3(1.0, 1.0, 1.0); // #FFFFFF
    
    // Funnel Stages
    float s1 = funnel_shape(uv, 0.8, 0.6, 0.15, 0.8);
    float s2 = funnel_shape(uv, 0.55, 0.4, 0.15, 0.6);
    float s3 = funnel_shape(uv, 0.35, 0.25, 0.15, 0.4);
    float s4 = funnel_shape(uv, 0.2, 0.15, 0.15, 0.2);
    
    float pulse = 0.9 + 0.1 * sin(u_time * 2.0);
    
    vec3 color = bg;
    
    if (s1 > 0.5) color = mix(bg, accent, 0.1 * pulse);
    if (s2 > 0.5) color = mix(bg, accent, 0.25 * pulse);
    if (s3 > 0.5) color = mix(bg, accent, 0.5 * pulse);
    if (s4 > 0.5) color = accent * pulse;
    
    // Add subtle scanline/grid effect
    float grid = sin(uv.y * 100.0) * 0.01;
    color += grid;

    gl_FragColor = vec4(color, 1.0);
}`;

    function cs(type: number, src: string) {
      const s = gl!.createShader(type);
      if (!s) return null;
      gl!.shaderSource(s, src);
      gl!.compileShader(s);
      return s;
    }

    const prog = gl.createProgram();
    if (!prog) return;
    
    const vertexShader = cs(gl.VERTEX_SHADER, vs);
    const fragmentShader = cs(gl.FRAGMENT_SHADER, fs);
    if (vertexShader) gl.attachShader(prog, vertexShader);
    if (fragmentShader) gl.attachShader(prog, fragmentShader);
    
    gl.linkProgram(prog);
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);

    const pos = gl.getAttribLocation(prog, "a_position");
    gl.enableVertexAttribArray(pos);
    gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);

    const uTime = gl.getUniformLocation(prog, "u_time");
    const uRes = gl.getUniformLocation(prog, "u_resolution");
    
    let animationFrameId: number;
    function render(t: number) {
      if (typeof ResizeObserver === "undefined") syncSize();
      gl!.viewport(0, 0, canvas!.width, canvas!.height);
      if (uTime) gl!.uniform1f(uTime, t * 0.001);
      if (uRes) gl!.uniform2f(uRes, canvas!.width, canvas!.height);
      gl!.drawArrays(gl!.TRIANGLE_STRIP, 0, 4);
      animationFrameId = requestAnimationFrame(render);
    }
    animationFrameId = requestAnimationFrame(render);

    return () => {
      resizeObserver.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="w-full h-full block rounded-xl" 
      style={{ display: "block", width: "100%", height: "100%" }}
    />
  );
}
