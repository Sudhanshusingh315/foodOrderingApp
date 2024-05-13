import axios from "axios";
export const loginUser = async(userCredentials)=>{
    const response  = await axios.post('/api/user/login',userCredentials);
    return response;
}

export const registerUser = async(userCredentials)=>{
   const response = await axios.post('/api/user/register',userCredentials);
   console.log("respones from api",response);
   return response; 
}