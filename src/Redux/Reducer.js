// reducers/index.js
const initialState = {
    count: 0,
    data:{
        id:1,
        name:'mohit',
        las:"bisen"
    },
    table:['Task done','Formate Task']
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return { ...state, count: state.count + 1 };
      case 'DECREMENT':
        return { ...state, count: state.count - 1 };

        case 'Fetchdata':
           return { ...state, data: { ...state.data, ...action.payload } };
           case 'Add task':
            return {
              ...state,
              table: [...state.table, action.payload], // Corrected logic
            };
      default:
        return state;
    }
}
   

  
  export default rootReducer;
  