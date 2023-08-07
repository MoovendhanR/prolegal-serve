import * as types from"./actionTypes";
import axios from "axios";

const fetchDataRequest =() => {
       return{
           type: types.FETCH_DATA_REQUEST,
       }
}

const fetchDataSuccess =(data) => {
    return{
        type: types.FETCH_DATA_SUCCESS,
        payload:data,
    }
}

const fetchDataFailure =(error) => {
    return{
        type: types.FETCH_DATA_FAILURE,
        payload:error
    }
}


export const FetchData=() => {
    return async(dispatch)=>{
          dispatch(fetchDataRequest());
          const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJmaXJzdE5hbWUiOiJHcmVnZyIsImxhc3ROYW1lIjoiQWxwZXIiLCJlbWFpbCI6ImdyZWdnQGFkbWluLmNvbSIsInBhc3N3b3JkIjoiJDJiJDEwJEUwQ1FzSEhRQVdqTC9VRWZGVjAuQi5QSlVVVy9IWndTY09mTHI1MnoxWGE2ZzlLelhBUHpPIiwicGhvbmVOdW1iZXIiOiIxMjM0NTY3ODkwIiwibm90aWZpY2F0aW9uUGhvbmVOdW1iZXIiOiIxMjM0NTY3ODkwIiwiY3JlYXRlZEF0IjoiMjAyMy0wNi0wOSAxMTowNzo1MCIsInVwZGF0ZWRBdCI6IjIwMjMtMDYtMDkgMTE6Mzk6NDkiLCJjb21wYW5pZXMiOlt7ImlkIjoxLCJjb21wYW55SWQiOjEsInVzZXJSb2xlcyI6W3siaWQiOjIsInJvbGUiOnsiaWQiOjQsIm5hbWUiOiJBZG1pbiJ9fV0sImNvbXBhbnkiOnsiaWQiOjEsIm5hbWUiOiJQcm8gTGVnYWwgU2VydmUiLCJ0eXBlIjoiT3BlcmF0aW5nIENvbXBhbnkifX1dfSwiaWF0IjoxNjg4NTYzNDU0fQ.cePhwdvCq2BZ3hXI-Lb75DUawbTW__WqxZ5HwgQH7z8';
          const headers = {
            Authorization: `Bearer ${authToken}`,
          };


    //       await axios.get("https://core-api-staging.processserver.ai/api/zendesk",{
    //           headers
    //       })
    //       .then(r=>dispatch(fetchDataSuccess(r.data.data.tickets)))
    //       .catch(e=>dispatch(fetchDataFailure(e.data)))

    try {
        const response = await axios.get(
          'https://core-api-staging.processserver.ai/api/zendesk',
          { headers }
        );
        dispatch(fetchDataSuccess(response.data.data.tickets));
      } catch (error) {
        dispatch(fetchDataFailure(error));
      }
    
     }
}



//get single products
const getSinglePersonRequest =(payload) => {
    return{
        type: types.GET_SINGLE_PERSON_REQUEST,
        payload
    }
}

const getSinglePersonSuccess =(payload) => {
 return{
     type: types.GET_SINGLE_PERSON_SUCCESS,
     payload
 }
}

const getSinglePersonFailure =(payload) => {
 return{
     type: types.GET_SINGLE_PERSON_FAILURE,
     payload
 }
}


export const FetchSinglePerson=(id) =>{
     return async(dispatch)=>{
          dispatch(getSinglePersonRequest());
          const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJmaXJzdE5hbWUiOiJHcmVnZyIsImxhc3ROYW1lIjoiQWxwZXIiLCJlbWFpbCI6ImdyZWdnQGFkbWluLmNvbSIsInBhc3N3b3JkIjoiJDJiJDEwJEUwQ1FzSEhRQVdqTC9VRWZGVjAuQi5QSlVVVy9IWndTY09mTHI1MnoxWGE2ZzlLelhBUHpPIiwicGhvbmVOdW1iZXIiOiIxMjM0NTY3ODkwIiwibm90aWZpY2F0aW9uUGhvbmVOdW1iZXIiOiIxMjM0NTY3ODkwIiwiY3JlYXRlZEF0IjoiMjAyMy0wNi0wOSAxMTowNzo1MCIsInVwZGF0ZWRBdCI6IjIwMjMtMDYtMDkgMTE6Mzk6NDkiLCJjb21wYW5pZXMiOlt7ImlkIjoxLCJjb21wYW55SWQiOjEsInVzZXJSb2xlcyI6W3siaWQiOjIsInJvbGUiOnsiaWQiOjQsIm5hbWUiOiJBZG1pbiJ9fV0sImNvbXBhbnkiOnsiaWQiOjEsIm5hbWUiOiJQcm8gTGVnYWwgU2VydmUiLCJ0eXBlIjoiT3BlcmF0aW5nIENvbXBhbnkifX1dfSwiaWF0IjoxNjg4NTYzNDU0fQ.cePhwdvCq2BZ3hXI-Lb75DUawbTW__WqxZ5HwgQH7z8';
          const headers = {
            Authorization: `Bearer ${authToken}`,
          };

         
    try {
        const response = await axios.get(
          `https://core-api-staging.processserver.ai/api/zendesk/${id}`,
          { headers }
        );
        dispatch(getSinglePersonSuccess(response.data.data));
      } catch (error) {
        dispatch(getSinglePersonFailure(error));
      }
    
     
    }
}




// fetch serverrates

const getServerRatesRequest =(payload) => {
    return{
        type: types.FETCH_SERVERRATES_REQUEST,
        payload
    }
}

const getServerRatesSuccess =(payload) => {
 return{
     type: types.FETCH_SERVERRATES_SUCCESS,
     payload
 }
}

const getServerRatesFailure =(payload) => {
 return{
     type: types.FETCH_SERVERRATES_FAILURE,
     payload
 }
}


export const FetchServerRates=(value) =>{
     return async(dispatch)=>{
          dispatch(getServerRatesRequest());
          const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJmaXJzdE5hbWUiOiJHcmVnZyIsImxhc3ROYW1lIjoiQWxwZXIiLCJlbWFpbCI6ImdyZWdnQGFkbWluLmNvbSIsInBhc3N3b3JkIjoiJDJiJDEwJEUwQ1FzSEhRQVdqTC9VRWZGVjAuQi5QSlVVVy9IWndTY09mTHI1MnoxWGE2ZzlLelhBUHpPIiwicGhvbmVOdW1iZXIiOiIxMjM0NTY3ODkwIiwibm90aWZpY2F0aW9uUGhvbmVOdW1iZXIiOiIxMjM0NTY3ODkwIiwiY3JlYXRlZEF0IjoiMjAyMy0wNi0wOSAxMTowNzo1MCIsInVwZGF0ZWRBdCI6IjIwMjMtMDYtMDkgMTE6Mzk6NDkiLCJjb21wYW5pZXMiOlt7ImlkIjoxLCJjb21wYW55SWQiOjEsInVzZXJSb2xlcyI6W3siaWQiOjIsInJvbGUiOnsiaWQiOjQsIm5hbWUiOiJBZG1pbiJ9fV0sImNvbXBhbnkiOnsiaWQiOjEsIm5hbWUiOiJQcm8gTGVnYWwgU2VydmUiLCJ0eXBlIjoiT3BlcmF0aW5nIENvbXBhbnkifX1dfSwiaWF0IjoxNjg4NTYzNDU0fQ.cePhwdvCq2BZ3hXI-Lb75DUawbTW__WqxZ5HwgQH7z8';
          const headers = {
            Authorization: `Bearer ${authToken}`,
          };       
    try {
        const response = await axios.get(
          `https://core-api-staging.processserver.ai/api/server-rates/zipcodes/00501/speeds?speed=${value}`,
          { headers }
        );
        dispatch(getServerRatesSuccess(response.data.data.serverRates.serverRates));
      } catch (error) {
        dispatch(getServerRatesFailure(error));
      } 
    }
}


