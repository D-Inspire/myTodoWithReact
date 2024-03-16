
import Li from './Li';

const TodoList = ({arr,delFunc}) => {
  console.log(arr);
  return (
    <ul className="w-full">
      {arr.map((data, index)=> <Li data={data} index={index} delFunc={delFunc}/> )}
    </ul>
  );
}

export default TodoList