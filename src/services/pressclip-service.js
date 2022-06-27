import axios from "axios"



// export const savePressclips(){

// }

export const getInterestedPersons = (customerId) => {
    return axios.get(`${process.env.REACT_APP_SERVER_URL}/client/${customerId}/interestedpersons`)
    .then(response => response.data.result)
    .catch(err=> {
        if(err.response.status === 500){
            throw new Error('Unable to fetch presons info try again after sometime...');
        }
        throw new Error(err.response.data.errors);
    })
}


export const getTermsOfInterest = (customerId) => {
    return axios.get(`${process.env.REACT_APP_SERVER_URL}/client/${customerId}/terms`)
    .then(response => response.data.result)
    .catch(err=> {
        if(err.response.status === 500){
            throw new Error('Unable to fetch presons info try again after sometime...');
        }
        throw new Error(err.response.data.errors);
    })
}

