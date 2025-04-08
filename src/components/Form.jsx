import { useRef } from "react";
import MyInput from "./MyInput";

function Form() {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
    inputRef.current.bgColorChange();
  }

  return (
    <>
      <div className="flex justify-center mt-[200px]" >
        <MyInput ref={inputRef}  />

        <button
          onClick={handleClick}
          className="bg-black h-9 text-white p-2 cursor-pointer"
        >
          Focus the input
        </button>
      </div>
    </>
  );
}

export default Form;
