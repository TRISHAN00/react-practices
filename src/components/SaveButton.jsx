import React, { useEffect, useState } from "react";

export default function SaveButton() {
  const [isOnline, setIsOnline] = useState(true);

  function handleOnline() {
    setIsOnline(true);
  }

  function handleOffline() {
    setIsOnline(false);
  }

  function handleSave() {
    console.log('Your data was saved');
  }

  useEffect(() => {
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
        window.removeEventListener("online", handleOnline);
        window.removeEventListener("offline", handleOffline);
    }
  }, []);
  return <button onClick={handleSave} disabled={!isOnline} >{isOnline ? "Save Progress" : "Reconnecting...."}</button>;
}
