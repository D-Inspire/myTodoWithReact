
import Li from './Li';

const TodoList = ({arr,delFunc, editFunc}) => {
  return (
    <ul className="w-full">
      {arr.map((data, index)=> <Li data={data} index={index} delFunc={delFunc} editFunc={editFunc} key={index}/> )}
    </ul>
  );
}

export default TodoList