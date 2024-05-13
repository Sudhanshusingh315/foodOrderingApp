import axios from "axios";
// adding new menu item
export const  addMenuItem =async(dataCredentials)=>{
    const response = await axios.post("api/menu/addItem");
    return response;
}

