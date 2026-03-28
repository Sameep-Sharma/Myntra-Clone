import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemsActions } from "../../store/itemSlice";
import { fetchStatuseActions } from "../../store/fetchStatusSlice";

const FetchItems = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();
  

  useEffect(() => {
    if (fetchStatus.fetchDone) {
      return;
    }
    const controller = new AbortController();
    const signal = controller.signal;
     dispatch(fetchStatuseActions.markFetchingStarted());

    fetch("http://localhost:8080/items", { signal })
      .then((res) => res.json())
      .then(({ items }) => {
        dispatch(fetchStatuseActions.MarkFetchDone());
        dispatch(fetchStatuseActions.markFetchingFinished());
        dispatch(itemsActions.addInitialItems(items));
      })
      .catch((err) => {
        if(err.name === "AbortError") return;
        console.log(err);
        
      });


    return () => {
    
      controller.abort();
    };
  }, [fetchStatus.fetchDone]);

  return (
    <>
     
    </>
  );
};

export default FetchItems;
