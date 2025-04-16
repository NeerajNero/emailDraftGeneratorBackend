import mongoose from "mongoose";

const appSchema = new mongoose.Schema({
    appName: {
        type: String,
        required: true,
        trim: true
    },
    appLink: {
        type: String,
        required: true,
        trim: true
    },
    appMailId: {
        type: String,
        required: true,
        trim: true
    },
    platform: {
        type: String,
        enum: ['IOS','ANDROID'],
        required: true
    }
},{timestamps: true})

export const AppsInfo = mongoose.model('AppsInfo', appSchema, "AppsInfoDB")
