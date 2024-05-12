const mongoose= require('mongoose')
const mockupSchema = mongoose.Schema(
    {
        Packaging_name:{
            type:String,
            required:[true,"please enter a name"]
        },
        reference:{
            type: "String",
            required: true ,

        },
        tag:{
            type: "String",
            required: true ,
        },
        Description:{
            type: "String",
            required: true ,
        },
        texture:{
            type: "String",
            required: true,
        },
        quantity:{
            type: Number ,
            required:true, 
            default:0
            
        },
        price: {
            type: Number ,
            required:true, 
            default:0
        },
        color:{
            type: "String",
            required: false,
        },
        size:{
            type: Number ,
            required:true, 
            default:1
        }
       
        
    },
    {
        timestamps: true
    }
)

const Mockup = mongoose.model('Mockup',mockupSchema);
module.exports= Mockup;