const initialState = [];

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TO_CART": {
      if (state.length > 0) {
        // return state.map(obj => {
        //   if (obj.id === action.payload.id) {
        //     console.log("id equal", obj);
        //     return { ...obj, qty: obj.qty + 1 };
        //   } else {
        //     return obj;
        //   }
        // });
        const x = state.find(obj => obj.id === action.payload.id);
        if (x) {
          const y = state.filter(obj => obj !== x);
          return [...y, { ...x, qty: x.qty + 1 }];
        } else {
          return [...state, action.payload];
        }
      }
      return [...state, action.payload];
    }
    default:
      return state;
  }
}
