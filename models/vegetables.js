// const vegetables = [
//     {
//         name: "carrot",
//         color:"orange",
//         readyToEat:true
//     },
//     {
//         name:"onion",
//         color:"white",
//         readyToEat: false,
//     },
//     {
//         name:"corn",
//         color:"yellow",
//         readyToEat:false
//     },
//     {
//         name: "pepper",
//         color:"green",
//         readyToEat:true
//     },
//     {
//         name:"lettuce",
//         color:"green",
//         readyToEat:true
//     }
// ]

// module.exports = vegetables

const mongoose = require("mongoose")

const vegetableSchema = new mongoose.Schema ({
    name: {type: String, required:true},
    color: {type:String, required:true},
    readyToEat:Boolean
})

const Vegetable = mongoose.model("Vegetable", vegetableSchema)

module.exports = Vegetable