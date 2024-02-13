import TravelContext from "../contex/travelContext";
import { useContext, useEffect } from "react";
import { setData } from "../contex/actionCreatorTravel";
import DeleteItem from "./DeleteItem";
import SortList from "./sortList";
const PackingList = () => {
  console.log('PackingList');
  const { state, dispatch } = useContext(TravelContext);
  useEffect(() => {
    const loc = JSON.parse(localStorage.getItem("travel"));

    if (loc) {
      setData(dispatch, loc.travel);
    }
  }, []);




  const isDo = (id) => {
    const data = state.travel.map((item) => {
      if (item.id == id) {
        item.packed = !item.packed;
      }
      return item;
    });
    setData(dispatch, data);
  };

  
  
  
  
 

  return (
    <>
    <div className="h-[55vh] px-4 md:px-8 lg:px-16 py-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 items-start gap-4 grid-rows-6 mx-auto">
      {state.travel.map((item) => (
        <div
        className="p-2 bg-gray-200 shadow-lg flex justify-between "
        key={item.id}
        >
          <div className="">
            <input
              onChange={() => isDo(item.id)}
              className="mr-2"
              type="checkbox"
              checked={item.packed}
              />
            <span className={item.packed ? "line-through" : ""}>
              {item.quantity} {item.description}
            </span>
          </div>

          <DeleteItem id={item.id} />
        </div>
      ))}
    </div>
     <SortList/>
      </>
  );
};

export default PackingList;
