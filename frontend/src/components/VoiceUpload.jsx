import { useState } from 'react'

export default function VoiceUpload() {
  const [file, setFile] = useState(null)

  const uploadVoice = async () => {
    const formData = new FormData()
    formData.append("file", file)
    await fetch("http://localhost:8000/upload-voice", {
      method: "POST",
      body: formData
    })
    alert("Voice sample uploaded!")
  }

  return (
    <div className="mt-4">
      <input type="file" accept="audio/*" onChange={(e) => setFile(e.target.files[0])} />
      <button className="bg-green-600 px-4 py-2 rounded ml-2" onClick={uploadVoice}>Upload Voice</button>
    </div>
  )
}