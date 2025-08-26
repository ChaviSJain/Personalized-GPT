import { useState } from 'react'

export default function ChatWindow() {
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState("")

  const sendMessage = async () => {
    const res = await fetch("http://localhost:8000/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: input })
    })
    const data = await res.json()
    setMessages([...messages, { role: "user", content: input }, { role: "assistant", content: data.response }])
    const audio = new Audio("http://localhost:8000/audio")
    audio.play()
    setInput("")
  }

  return (
    <div className="w-full max-w-xl p-4">
      <div className="bg-gray-800 p-4 rounded h-64 overflow-y-scroll mb-4">
        {messages.map((msg, i) => (
          <div key={i} className={`mb-2 ${msg.role === "user" ? "text-blue-400" : "text-green-400"}`}>
            <strong>{msg.role}:</strong> {msg.content}
          </div>
        ))}
      </div>
      <input
        className="w-full p-2 rounded bg-gray-700 text-white"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type your message..."
      />
      <button className="mt-2 bg-blue-600 px-4 py-2 rounded" onClick={sendMessage}>Send</button>
    </div>
  )
}
