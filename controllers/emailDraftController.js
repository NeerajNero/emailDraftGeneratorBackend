import { Email } from "../models/email.draft.model.js"
export const addEmailDraft = async(req,res) => {
    try{
        const {emailSectionName, emailSubSectionName, emailBody} = req.body
        if(!emailSectionName && !emailSubSectionName && !emailBody){
            return res.status(400).json("all fields are required")
        }
        const createEmailDraft = new Email({emailSectionName, emailSubSectionName, emailBody})
        await createEmailDraft.save()
        res.status(201).json({message: "email added successfully"})
    }catch(error){
        console.log("error occured while adding email",error)
        res.status(500).json({error: "unable to add email", message: error.message})
    }
}

export const fetchEmailDrafts = async(req,res) => {
    try{
        const emailDrafts = await Email.find()
        if(emailDrafts.length === 0){
            res.status(404).json("emails not found")
        }
        res.status(200).json(emailDrafts)
    }catch(error){
        console.log("error occured while adding email",error)
        res.status(500).json({error: "unable to add email", message: error.message})
    }
}