import TravelContext from "../contex/travelContext";
import { useContext, useRef } from "react";
import { setData } from "../contex/actionCreatorTravel";
const Form = () => {
  const { state, dispatch } = useContext(TravelContext);
  const input = useRef(null);
  const select = useRef(null);

  const addItemListTravel = async (event) => {
    event.preventDefault();
    const id = state.travel.length > 0 ? state.travel.at(-1)?.id + 1 : 1;
    const description = input.current.value;
    const quantity = select.current.value;
    const newItem = {
      id: id,
      description: description,
      quantity: quantity,
      packed: false,
    };
    const data = [...state.travel, newItem];
    if (input.current.value) {
      const check = await setData(dispatch, data);

      if (check.isDo) {
        input.current.value = "";
        select.current.value = 1;
      }
    } else {
      alert("لطفا انتخاب کنید");
    }
  };
  return (
    <div className="h-[10vh] p-4 bg-orange-400 flex justify-evenly items-center ">
      <span>what do you need for your 😍 trip?</span>
      <form action="" className="w-1/2 flex gap-2 justify-center items-center">
        <select ref={select} className="w-1/3 rounded-full p-1 text-center">
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>
        <input
          ref={input}
          className="w-1/2  rounded-full p-1 px-4"
          type="text"
          placeholder="item..."
        />
        <input
          onClick={(e) => addItemListTravel(e)}
          className="w-1/3  rounded-full p-1 bg-sky-400"
          type="submit"
          value="Add"
        />
      </form>
    </div>
  );
};

export default Form;
