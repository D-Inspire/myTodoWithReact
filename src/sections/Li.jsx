import Del from "../pics/Del";
import Edit from "../pics/Edit";

const Li = ({ data, index,delFunc,editFunc }) => {
  return (
    <li className="flex justify-between py-[5px] px-[10px] border-b-[2px] border-[rgb(241,232,232)] text-[rgb(241,232,232)] text-[18px] tracking-[1px]">
      {data}
      <div className="flex gap-[5px]">
        <Edit editFunc={editFunc} data={data} index={index}/>
        <Del index={index} delFunc={delFunc} />
      </div>
    </li>
  );
};

export default Li;
