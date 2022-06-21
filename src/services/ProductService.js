import axios from "axios"

export const getProducts = async () => {
    try{
        const response = await axios.get(process.env.REACT_APP_SERVER_URL+'/products');
        return response.data.result;
    }catch(err) {
        return err.error;
    }
}

