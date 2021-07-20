import React, { useState, useEffect } from "react";
import defaultAxios from "axios";

const useAxios = (opts, axiosintance = defaultAxios) => {
  const [state, setState] = useState({
    loading: false,
    error: null,
    data: null,
  });
  const [trigger, setTrigger] = useState(0);
  // if(!opts.url) {
  //   return;
  // }
  const refresh = () => {
    setState({
      ...state,
      loading: true,
    });
    setTrigger(new Date());
  };
  useEffect(() => {
    axiosintance(opts)
      .then((data) => {
        setState({
          ...state,
          loading: false,
          data,
        });
      })
      .catch((err) => {
        setState({
          ...state,
          loading: false,
          err,
        });
      });
  }, [trigger]);
  return { ...state, refresh };
};

const App = () => {
  const { loading, data, refresh } = useAxios({
    url: "https://yts.mx/api/v2/list_movies.json",
  });
  return (
    <div>
      <h1>{data && data.status}</h1>
      <h2>{loading && "Loading"}</h2>
      <button onClick={refresh}>Refresh</button>
    </div>
  );
};

export default App;