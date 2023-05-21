import axios from 'axios';
import config from './config';

const BASE_API = config.BASE_API;

export const login = async requestBody => {
    const requestUrl = `${BASE_API}/login`;
    try {
      const API_RESPONSE = await axios.post(requestUrl, requestBody, {

        headers: {
          'Content-Type': 'application/json',
        },
      });
      return API_RESPONSE;
    } catch (error) {
      return error.response;
    }
  };

  export const signup = async requestBody => {
    const requestUrl = `${BASE_API}/signup`;
    console.log("signupCalleddd---->",requestBody)
    try {
      const API_RESPONSE = await axios.post(requestUrl, requestBody, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return API_RESPONSE;
    } catch (error) {
      return error.response;
    }
  };