import TravelContext from "../contex/travelContext";
import { useContext } from "react";

const Footer = () => {
  const { state } = useContext(TravelContext);
  const countItems = state.travel.length;
  const countIsDo = state.travel.reduce(
    (pre, after) => (after.packed ? pre + 1 : pre),
    0
  );
  const percentIsDo = Math.round((countIsDo / countItems) * 100);

  if (!state.travel.length)
    return (
      <h1 className="h-[10vh] flex justify-center items-center bg-sky-300">
        Start adding some items to your packing list ✈️
      </h1>
    );
  return (

      <h1 className="h-[10vh] flex justify-center items-center bg-sky-300">
        {
          percentIsDo==100? 'you got everything! Ready to go 🚢':
          `You have ${countItems} items on your list, and you already packed
          ${countIsDo} (${(percentIsDo && percentIsDo) || 0}%)`
        }
      </h1>
 
  );
};

export default Footer;
