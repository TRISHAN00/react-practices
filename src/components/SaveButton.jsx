import React from "react";
import useOnlineStatus from "../hooks/useOnlineStatus";

export default function SaveButton() {
  const isOnline = useOnlineStatus();

  function handleSave() {
    console.log("Your data was saved");
  }

  return (
    <button onClick={handleSave} disabled={!isOnline}>
      {isOnline ? "Save Progress" : "Reconnecting...."}
    </button>
  );
}
