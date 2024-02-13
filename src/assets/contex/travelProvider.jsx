import { useReducer } from "react"
import TravelContext from "./travelContext"
import { intialState, reducer } from "./ReducerTravel"


const TravelProvider = (prop) => {
    const[state, dispatch]= useReducer(reducer, intialState)
    const {children} = prop
  return (
    <TravelContext.Provider  value={{state:state, dispatch:dispatch}}>
        {children}
    </TravelContext.Provider>
  )
}

export default TravelProvider