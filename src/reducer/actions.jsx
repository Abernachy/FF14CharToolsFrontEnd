import * as types from './action-types';

export function getCharData(data){
  return {
    type: types.GET_CHAR_DATA,
    payload:data
  };
}