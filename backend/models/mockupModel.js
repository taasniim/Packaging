const mongoose= require('mongoose')  
const Schema=mongoose.Schema
const mockupSchema = new Schema(
    {
      
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
            required: false,
        },
        quantity:{
            type: Number ,
            required:false, 
            default:0
            
        },  
       

        color:{
            type:String,
            default:'gray',
            required:false,
        } ,
        size:{
           x: {
            type: Number,
            required:false,

            } ,
           y: {
                type: Number,
                required:false,
    
                },
              z:  {
                    type: Number,
                    required:false,
        
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
                //el id hedha no9sod bih el id ta3 el model de base 
               id:{
                type:Number,
                required:true,
               },
               //el image elli tormoz lel model 
               src:{
                type:String, 
                required:true,
               } ,
               //el model 3D ta3 el maquette 
               model:{
                type:String,
                required:true
               }

               
        
    },
    {
        timestamps: true // el variable hedha pour ajoouter les deux champs createdAt updatedAt
    }
)

const Mockup = mongoose.model('Mockup',mockupSchema);
module.exports= Mockup;