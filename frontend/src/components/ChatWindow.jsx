import React, { useEffect, useRef } from "react";

export default function ChatWindow({ messages = [] }) {
  const containerRef = useRef(null);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div
      ref={containerRef}
      className="
        w-full
        max-w-xl
        h-64
        overflow-y-auto
        bg-gray-800
        p-4
        rounded-lg
        space-y-2
      "
    >
      {messages.map((msg, idx) => (
        <div
          key={idx}
          className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
        >
          <div
            className={`
              px-3 py-1
              rounded-lg
              max-w-[80%]
              ${msg.role === "user" ? "bg-blue-600 text-white" : "bg-gray-700 text-gray-100"}
            `}
          >
            {msg.content}
          </div>
        </div>
      ))}
    </div>
  );
}
