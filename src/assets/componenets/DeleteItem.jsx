import TravelContext from "../contex/travelContext";
import { useContext } from "react";
import { setData } from "../contex/actionCreatorTravel";

const DeleteItem = (prop) => {
  const { state, dispatch } = useContext(TravelContext);
  const { id } = prop;
  const removeItem = async () => {
    const response = confirm("ایا از حذف این مورد هطمینان دارید؟");
    if (response) {
      const data = state.travel.filter((item) => item.id != id);
      setData(dispatch, data);
    }
  };
  return (
    <button onClick={removeItem} className=" text-[0.9rem]">
      ❌
    </button>
  );
};

export default DeleteItem;
