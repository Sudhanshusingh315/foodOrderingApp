const mongoose = require("mongoose");
const {Schema} = mongoose;

const menuSchema = new Schema({
    category :{type:String,required:true},
    image:{type:String,require:true,unique:true}

})

const Menu = mongoose.model("Menu",menuSchema);
module.exports = Menu;