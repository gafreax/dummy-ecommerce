import { API_BASE_URL } from "../config.js";
/*
    username: 'kminchelle',
    password: '0lelplR'
*/
const fetchAuth = async ({username, password}) => {
    console.log("call auth for ", username)
    const url = `${API_BASE_URL}auth/login`;
    const body =  JSON.stringify({
        username: username,
        password: password
      });
    const dataFetched = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: body
      })
    const dataJSON = await dataFetched.json();
    return dataJSON;
};

export default fetchAuth;
