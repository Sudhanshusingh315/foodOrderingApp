import axios from "axios";
import { baseConfig } from "../../const/constant";
export const loginUser = async (userCredentials) => {
    console.log("Base Url",baseConfig);
    const response = await axios.post(
        `${baseConfig.url}/api/user/login`,
        userCredentials
    );
    return response;
};

export const registerUser = async (userCredentials) => {
    const response = await axios.post(
        `${baseConfig.url}/api/user/register`,
        userCredentials
    );
    console.log("respones from api", response);
    return response;
};
