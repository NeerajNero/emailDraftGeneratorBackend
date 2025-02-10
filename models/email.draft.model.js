import mongoose from "mongoose";

const emailDraftSchema = new mongoose.Schema({
        emailSectionName: {
            type: String,
            require: true
        },
        emailSubSectionName: {
            type: String,
            require: true
        },
        emailBody: {
            type: String,
            require: true
        }
})

export const Email = mongoose.model('Email', emailDraftSchema, 'emailDrafts')