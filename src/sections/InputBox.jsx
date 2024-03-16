import { useState } from "react";

const InputBox = ({addFunc}) => {
  const [input,newInput] = useState('')
  const func = () => {
    addFunc(input);
    newInput('');
  }
  return (
    <form onSubmit={(e) => e.preventDefault()} className="flex gap-[10px]">
      <input
        type="text"
        value={input}
        onChange={(event)=>newInput(event.target.value)}
        className="h-[25px] rounded-[5px] outline-none border-none pl-[5px]"
      />
      <input
        type="submit"
        value="submit"
        onClick={func}
        className="h-[25px] rounded-[5px] outline-none border-none px-[10px] bg-white active:px-[8px] active:text-[rgba(0,0,0,0.7)] font-[500]"
      />
    </form>
  );
}

export default InputBox;