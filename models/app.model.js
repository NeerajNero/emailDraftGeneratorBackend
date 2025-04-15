import mongoose from "mongoose";

const appSchema = new mongoose.Schema({
    appName: {
        type: String,
        required: true
    },
    appLink: {
        type: String,
        required: true
    },
    appMailId: {
        type: String,
        required: true
    },
    platform: {
        type: String,
        enum: ['IOS','ANDROID'],
        required: true
    }
})

export const AppsInfo = mongoose.model('AppsInfo', appSchema, "AppsInfoDB")
