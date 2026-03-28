import {createSlice} from "@reduxjs/toolkit"


const fetchStatusSlice = createSlice({
  name: 'fetchStatus',
  initialState : {
    fetchDone: false,  //PENDING(false) and DONE(true)
    currentlyFetching:false
  },
  reducers: {
    MarkFetchDone: (state) => {
      state.fetchDone = true;
    },
    markFetchingStarted: (state) => {
      state.currentlyFetching = true ;
    },
    markFetchingFinished: (state) => {
      state.currentlyFetching = false;
    }
  },
  
});

export const fetchStatuseActions = fetchStatusSlice.actions;

export default fetchStatusSlice;

