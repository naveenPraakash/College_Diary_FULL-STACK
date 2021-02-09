import mongoose from 'mongoose';
const PostSchema = mongoose.Schema({
    description : String,
    message : String,
    occasion: String,
    tags: [String],
    selectedFile: String,
    LikeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    }

});
const PostMessage= mongoose.model('PostMessage', PostSchema);

export default PostMessage;