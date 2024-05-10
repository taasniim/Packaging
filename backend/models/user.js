const mongoose= require('mongoose')
const userSchema = mongoose.Schema(
    {
        full_name:{
            type:String,
            required:[true,"please enter a name"]
        },
        company_name :{
            type: "String",
            required: false,

        },
        mail:{
            type: "String",
            required: true ,
        },
      
        Phone_Number:{
            type: Number,
            required:true,
        }, 
        password:{
            type:"string",
            required:true,

        },
        pic:{
            type:"string",
            required:false,
            default:"https://static.vecteezy.com/system/resources/previews/018/765/757/original/user-profile-icon-in-flat-style-member-avatar-illustration-on-isolated-background-human-permission-sign-business-concept-vector.jpg",
        }
       
        
    },
    {
        timestamps: true
    }
)

const User = mongoose.model('User',userSchema);
module.exports= User;