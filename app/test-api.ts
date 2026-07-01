async function test() {
  const formData = new FormData();
  formData.append("filename", "test.mp3");
  formData.append("fileType", "audio/mp3");
  
  // 20MB blob
  const buffer = Buffer.alloc(20 * 1024 * 1024, "a");
  const blob = new Blob([buffer], { type: "audio/mp3" });
  formData.append("file", blob, "test.mp3");

  const res = await fetch("http://localhost:3000/api/transcribe", {
    method: "POST",
    body: formData
  });

  console.log("Status:", res.status);
  console.log("Headers:", Object.fromEntries(res.headers.entries()));
  const text = await res.text();
  console.log("Body length:", text.length);
  console.log("Body snippet:", text.substring(0, 200));
}

test().catch(console.error);
