const initialState = { 
  sum: 0,
  counters: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "GENERATE_COUNTER":
      return {
              ...state,
              counters: new Array(payload).fill(0).map(() => ({id: new Date().getTime() + Math.random(), count: 0}))
             };
    case "UPDATE_SUM":
      return {
              ...state,
              sum: state.sum + payload 
             };
    case "UPDATE_COUNT":
      return {
              ...state,
              counters: state.counters.map(counter => {
                          if (payload.id === counter.id) {
                            return {id: new Date().getTime() + Math.random(), count: payload.count};
                          } else {
                            return counter;
                          }
                        })
             };
    default:
      return state;
  }
};