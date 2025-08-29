import React from "react";

export default function AvatarDisplay({ src = "/avatar.png", alt = "Avatar" }) {
  return (
    <div className="mb-4">
      <img
        src={src}
        alt={alt}
        className="w-24 h-24 rounded-full border-4 border-gray-600"
      />
    </div>
  );
}
