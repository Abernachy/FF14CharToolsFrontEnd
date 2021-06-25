import * as actionTypes from './action-types';

function charReducer(state, action){
  switch (action.type){
    case actionTypes.GET_CHAR_DATA:{
      return {
        ...state,
        
      }
    }
    default: 
      return state
    
  }
}

export default charReducer
