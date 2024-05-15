const mongoose= require('mongoose') 
const Schema=mongoose.Schema
const mockupSchema = new Schema(
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

        color:{
            type:String,
            default:'gray',
            required:true,
        } ,
        size:{
           x: {
            type: Number,
            required:true,

            } ,
           y: {
                type: Number,
                required:true,
    
                },
              z:  {
                    type: Number,
                    required:true,
        
                    }
                } ,

                price:{
                    type: Number,
                      required:true,
                },
                material:{
                    type:String,
                    required:false,
                } ,
               

       
        
    },
    {
        timestamps: true
    }
)

const Mockup = mongoose.model('Mockup',mockupSchema);
module.exports= Mockup;