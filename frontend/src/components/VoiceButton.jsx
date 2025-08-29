import React from "react";

export default function VoiceButton({ onClick, isRecording }) {
  return (
    <button
      onClick={onClick}
      className={`
        mt-4
        px-4 py-2
        rounded
        font-medium
        focus:outline-none
        ${
          isRecording
            ? "bg-red-600 hover:bg-red-700"
            : "bg-green-600 hover:bg-green-700"
        }
        text-white
      `}
    >
      {isRecording ? "⏹ Stop Recording" : "🎤 Start Recording"}
    </button>
  );
}
