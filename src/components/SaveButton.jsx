import React from "react";
import useOnlineStatus from "../hooks/useOnlineStatus";

export default function SaveButton() {
  const isOnline = useOnlineStatus();

  function handleSave() {
    console.log("Your data was saved");
  }

  return (
    <button
      onClick={handleSave}
      disabled={!isOnline}
      className={`px-6 py-2 rounded-lg font-medium transition-all duration-200 ${
        isOnline
          ? "bg-blue-600 text-white hover:bg-blue-700"
          : "bg-gray-300 text-gray-500 cursor-not-allowed"
      }`}
    >
      {isOnline ? "💾 Save Progress" : "🔄 Reconnecting..."}
    </button>
  );
}
