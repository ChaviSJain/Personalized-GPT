import React from "react";

export default function VoiceUpload({ onFileSelect }) {
  const handleChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      onFileSelect(e.target.files[0]);
    }
  };

  return (
    <div className="mt-4 w-full max-w-xl">
      <label className="block text-sm font-medium mb-1">Upload Voice Sample</label>
      <input
        type="file"
        accept="audio/*"
        onChange={handleChange}
        className="
          block
          w-full
          text-sm
          text-gray-200
          file:mr-4
          file:px-4
          file:py-2
          file:bg-gray-700
          file:text-white
          file:rounded
          hover:file:bg-gray-600
        "
      />
    </div>
  );
}
