import React from "react";
import useOnlineStatus from "../hooks/useOnlineStatus";

export default function StatusBar() {
  const isOnline = useOnlineStatus();

  return (
    <div
      className={`max-w-sm mx-auto mt-6 p-4 rounded-xl shadow-md text-white font-semibold text-center ${
        isOnline ? "bg-green-500" : "bg-red-500"
      }`}
    >
      <h1>{isOnline ? "🟢 You are Online" : "🔴 Disconnected"}</h1>
    </div>
  );
}
