const mongoose= require('mongoose')
const projectSchema = mongoose.Schema(
    {
        project_name:{
            type:String,
            required:[true,"please enter a name"]
        }, 
        Date:{
            type: "Date",
            default: Date.now 
        }, 
        owner:{type: mongoose.Schema.Types.ObjectId,ref:'User'},
        members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
        mockup: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Mockup' }]
       
    },
    {
        timestamps: true
    }
)

const Project = mongoose.model('Project',projectSchema);
module.exports= Project;