import { useState,useEffect } from "react";
import InputBox from "./sections/inputBox";
import TodoList from "./sections/TodoList";

function App() {
  const [arr,newArr] = useState([]);
  const addFunc = (event) => newArr([...arr, event]);
  const delFunc = (index)=> {
    arr.splice(index, 1);
    newArr([...arr]);
  }
  return (
    <div className="flex justify-center items-center flex-col w-full h-screen">
      <div className="bg-[rgb(32,157,179)] w-[300px] min-h-[150px] flex items-center py-[10px] rounded-[15px] flex-col gap-[10]">
        <InputBox addFunc={addFunc} />
        <TodoList arr={arr} delFunc={delFunc} />
      </div>
    </div>
  );
}

export default App;
