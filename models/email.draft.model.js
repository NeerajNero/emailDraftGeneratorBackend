import mongoose from "mongoose";

const emailDraftSchema = new mongoose.Schema({
        emailSectionName: {
            type: String,
            required: true
        },
        emailSubSectionName: {
            type: String,
            required: true
        },
        emailBody: {
            type: String,
            required: true
        },
        suggestedNotes: {
            type: String,
        }
})

export const Email = mongoose.model('Email', emailDraftSchema, 'emailDrafts')