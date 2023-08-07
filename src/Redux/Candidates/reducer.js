import * as types from "./actionTypes"
const initialState ={
    data: [],
    currentPerson:[],
    serverRates:[],
    error:"",
    loading:false
}

const PersonsReducer = (state=initialState,action)=>{
    const {type,payload}=action;
switch(type){
case types.FETCH_DATA_REQUEST:
return{
...state,
error:"",
loading:true
}
case types.FETCH_DATA_SUCCESS:
return{
...state,
data:payload,
error:"",
loading:false
}
case types.FETCH_DATA_FAILURE:
return{
...state,
error:payload,
loading:false
}
// get single person
case types.GET_SINGLE_PERSON_REQUEST:
return{
...state,
error:"",
loading:true
}
case types.GET_SINGLE_PERSON_SUCCESS:
return{
...state,
currentPerson:payload,
error:"",
loading:false
}
case types.GET_SINGLE_PERSON_FAILURE:
return{
...state,
error:payload,
loading:false
}

// get serverrates
case types.FETCH_SERVERRATES_REQUEST:
return{
...state,
error:"",
loading:true
}
case types.FETCH_SERVERRATES_SUCCESS:
return{
...state,
serverRates:payload,
error:"",
loading:false
}
case types.FETCH_SERVERRATES_FAILURE:
return{
...state,
error:payload,
loading:false
}



default:
return state;
}

}


export default PersonsReducer;