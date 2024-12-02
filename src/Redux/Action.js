// actions/index.js
export const increment = () => ({
    type: 'INCREMENT',
  });
  
  export const decrement = () => ({
    type: 'DECREMENT',
  });
  
  export  const fetchdata = (payload)=>({
        type:'Fetchdata',
        payload
    
  })

  export const AddTask = (payload)=>({
    type :'Add task',
    payload
  })