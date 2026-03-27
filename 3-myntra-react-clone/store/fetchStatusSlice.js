import {createSlice} from "@reduxjs/toolkit"


const fetchStatusSlice = createSlice({
  name: 'fetchStatus',
  initialState : {
    fetchDone: false,  //PENDING(false) and DONE(true)
    currentlyFetching:false
  },
  reducers: {
    MarkFetchDone: (state) => {
      return state.fetchDone = true;
    },
    markFetchingStarted: (state) => {
      return state.currentlyFetching = true ;
    },
    markFetchingFinished: (state) => {
      return state.currentlyFetching = false;
    }
  },
  
});

export const fetchStatuseActions = fetchStatusSlice.actions;

export default fetchStatusSlice;

