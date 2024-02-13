import { SET_TRAVEL } from "./actionTravelType"
const setTravel = (data)=>{
    return{
        type:SET_TRAVEL,
        payload:data
    }
}

const setData=async(dispatch, data)=>{
    try {
        
        await dispatch(setTravel(data))
        return {isDo:true, message:null}
    } catch (error) {
        return {isDo:false, message:error.message}
    }


}

export {setData, setTravel}