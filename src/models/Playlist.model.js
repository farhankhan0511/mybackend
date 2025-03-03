import mongoose from "mongoose";

const PlaylistSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        
    },
    description:{
        type:String,
        required:true,
        maxlength:8000
    },
    Owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    Videos:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Video"
        }
    ]
},
    {timestamps:true})

export const Playlist=mongoose.model("Playlist",PlaylistSchema)