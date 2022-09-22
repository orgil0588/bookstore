import mongoose from "mongoose"


const BookSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        min: 10,
        max: 250,
        required: true
    },
    author: {
        type : String,
        required: true,
    },
    image: {
        type: String,
        default: ""
    },
    price: {
        type: Number,
        required: true
    },
    stars : {
        type: Number,
        default: 0,
        min: 0,
        max: 10
    }
})


export default mongoose.model("Book", BookSchema)