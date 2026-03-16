"use client"
import React from "react";
export default function EventObject() {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    alert(`Event type: ${e.type}\nTarget: ${(e.target as HTMLButtonElement).id}`);
  };
  return (
    <div id="wd-event-object">
      <h2>Event Object</h2>
      <button onClick={handleClick} className="btn btn-primary"
              id="wd-event-object-click">
        Event Object
      </button>
      <hr />
    </div>
  );
}
