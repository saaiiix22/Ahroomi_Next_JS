const mongoose = require('mongoose')

const menuSchema = new mongoose.Schema({
    menuName:String,
    menuIcon:String,
    menuOrder:Number,
    isParent:Boolean,
    menuPath:String,
    parentId:String,
    acive:Boolean
})
const menuModel = mongoose.model('menus',menuSchema)
module.exports = menuModel