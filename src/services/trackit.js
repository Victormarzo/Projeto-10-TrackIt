import axios from 'axios';

const BASE_URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit';

function postSignUp(body){
    const promise = axios.post(`${BASE_URL}/auth/sign-up`, body);
    return promise;
}

function postLogin(body){
    const promise = axios.post(`${BASE_URL}/auth/login`, body);
    return promise;
}
function createHabit(body){
  const config=createHeaders();
  const promise = axios.post(`${BASE_URL}/habits`, body,config);
  return promise;
}
function listHabit(){
  const config=createHeaders();
  const promise = axios.get(`${BASE_URL}/habits`,config);
  return promise;


}
function createHeaders() {
    const auth = JSON.parse(localStorage.getItem("trackit"));
    const config = {
      headers: {
        Authorization: `Bearer ${auth.token}`
      }
    };
  
    return config;
  }

  export {postSignUp, postLogin,listHabit,createHabit}