import React, { useImperativeHandle, useRef } from "react";

export default function MyInput({ ref }) {
  const realInputRef = useRef(null);

  useImperativeHandle(ref, () => ({
    focus: () => realInputRef.current.focus(),
    bgColorChange: () =>
      (realInputRef.current.style.backgroundColor = "orange"),
  }));

  return (
    <input
      ref={realInputRef}
      className=" border-1 h-9 outline-0 "
      type="text"
    />
  );
}
