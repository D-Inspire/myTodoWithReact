import { useState,useEffect } from "react";
import InputBox from "./sections/inputBox";
import TodoList from "./sections/TodoList";

function App() {
  const [arr,newArr] = useState([]);
  const [edit,newEdit] = useState('');
  const [indexNum,setIndexNum] = useState();
  const addFunc = (event) => newArr([...arr, event]);
  const delFunc = (index)=> {
    arr.splice(index, 1);
    newArr([...arr]); 
  }
  const editFunc = (data,index)=> {
    newEdit(data)
    setIndexNum(index)
  }
  const update = ()=> {
    console.log(arr[indexNum])
    arr[indexNum] = edit
    console.log(arr[indexNum])
    // newArr([...arr])
    // newEdit('')
  }
  return (
    <div className="flex justify-center items-center flex-col w-full h-screen">
      <div className="flex justify-center items-center flex-col w-full h-screen">
        <div className="bg-[rgb(32,157,179)] w-[300px] min-h-[150px] flex items-center py-[10px] rounded-[15px] flex-col gap-[10]">
          <InputBox addFunc={addFunc} />
          <TodoList arr={arr} delFunc={delFunc} editFunc={editFunc}/>
        </div>
      </div>
      
{/* for the edit pop-up box message and the effects afer it */}

      <div className="w-fit h-fit absolute top-[100px] right-[50px] flex flex-col gap-[5px] border-[1px] border-[rgba(0,0,0,0.7)] py-[10px] px-[30px] rounded-[15px] bg-[rgb(237,150,150)] duration-1000 transition-all transform translate-x-[170px]">
        <input type="text" Value={edit} className="w-[300px] h-[40px] border-[1px] border-[rgb(0,0,0,0.7)] outline-none pl-[10px] rounded-[10px] " />
        <button onClick={()=>update()} className="w-[35px] h-[35px] bg-[blue] text-white border-[2px] border-white outline-[blue] outline-2 rounded-[50%] ">Ok</button>
      </div>

{/* style for the cover-up background the pop-up */}
    </div>
  );
}

export default App;
