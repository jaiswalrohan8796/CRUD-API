import mongoose from 'mongoose';
const UserSchema = mongoose.Schema({
    name:String,
    role:String,
    age: Number,
    subjects:[String],
    city: String,
    date: {
        type:Date,
        default: new Date()
    }
})

export const User = mongoose.model('User', UserSchema)