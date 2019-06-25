import { FETCH_DATA } from './types';

export const updateTable = (query, raw) => dispatch => {
  if(query == null) {
    dispatch( {
      type: FETCH_DATA,
      payload: { 
        one: raw,
        two: query
      } 
    })
  }
  else {
    var filtered = raw.filter(obj => 
      ((Object.values(obj)).join("$")).includes(query))
      console.log(filtered)
      
      dispatch( {
        type: FETCH_DATA,
        payload: {
          one: filtered,
          two: query
        }
      })
    
  }
}
