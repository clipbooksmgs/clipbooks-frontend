import axios from 'axios';

export const createClient = (client) => {
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