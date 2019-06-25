import { CHANGE_CITY } from './types';
import axios from 'axios';

export const changeCity = (drCity) => dispatch => {
  axios.get('https://vast-shore-74260.herokuapp.com/banks?city=' + drCity)
  .then( (response) =>
      dispatch( {
          type: CHANGE_CITY,
          payload: response.data
        })
  )
  .catch( (error) => {
    console.log(error);
  }) 
  }
   