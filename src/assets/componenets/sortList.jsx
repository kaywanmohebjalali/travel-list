import { useRef } from "react";
import TravelContext from "../contex/travelContext";
import { useContext } from "react";

import { setData } from "../contex/actionCreatorTravel";

const SortList = () => {
  const { state, dispatch } = useContext(TravelContext);
  const refSelect = useRef();
  const sort = () => {
    let data = state.travel;
    const value = refSelect.current.value;
    if (value == "packed") {
      data.sort((a, b) => (a.packed <= b.packed ? 1 : -1));
    } else if (value == "description") {
      data.sort((a, b) => (a.description > b.description ? 1 : -1));
    } else {
      data.sort((a, b) => (a.id > b.id ? 1 : -1));
    }
    setData(dispatch, data);
  };
  return (
    <div className="h-[10vh] text-center flex items-center justify-center">
      <select
        ref={refSelect}
        onChange={sort}
        name=""
        id=""
        className="w-[16rem] p-1 px-3 bg-gray-300 rounded-md"
      >
        <option value="input">SORT BU INPUT ORDER</option>
        <option value="description">SORT BY DESCRIPTION</option>
        <option value="packed">SORT BY PACKED STATUS</option>
      </select>
      <button onClick={()=>setData(dispatch,[])} className="w-[6rem] ms-2 py-1 bg-[red] rounded-md text-white">
        Clear List
      </button>
    </div>
  );
};

export default SortList;
