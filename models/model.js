import mongoose from 'mongoose';
const UserSchema = mongoose.Schema({
    name:String,
    subject:String,
    age: Number,
})

export const User = mongoose.model('User', UserSchema)