import axios from 'axios';

export const createClient = (client) => {
    console.log(process.env.REACT_APP_SERVER_URL);
    return axios.post(process.env.REACT_APP_SERVER_URL+'/signup', client,
    {
        headers:{
            'Content-Type': 'application/json'
        }
    }).then((response)=> {
        return response.data.result;
    }).catch(err =>{
        if(err.response.status === 500){
            throw new Error('Account not created try again after sometime...');
        }
        throw new Error(err.response.data.errors);
    })
}

export const login = (loginDetails) => {
    return axios.post(process.env.REACT_APP_SERVER_URL+'/login', loginDetails,
    {
        headers:{
            'Content-Type': 'application/json'
        }
    }).then((response)=> {
        return response.data.result;
    }).catch(err =>{
        if(err.response.status === 500){
            throw new Error('Login failed Due to some internal error. Try again..');
        }
        throw new Error(err.response.data.errors);
    })
}

export const getUser = (email) => {
    console.log(email);
    console.log(process.env.REACT_APP_SERVER_URL);
    return axios.get(process.env.REACT_APP_SERVER_URL+'/client',{
        params:{
            'email': email
        }
    })
    .then(response => response.data.result)
    .catch(error=> {
        if(error.response.status === 500){
            throw new Error('Unable to fetch logged in user data due to some internal error. Try again..');
        }
        throw new Error(error.response.data.errors);
    })

}

export const update = (client) => {
    return axios.put(process.env.REACT_APP_SERVER_URL+'/client', client,{
        headers:{
            'Content-Type': 'application/json'
        }
    })
    .then(response=> response.data.result)
    .catch(error=> {
        if(error.response.status === 500){
            throw new Error('Unable update the user due to some internal error. Try again..');
        }
        throw new Error(error.response.data.errors);
    })
}