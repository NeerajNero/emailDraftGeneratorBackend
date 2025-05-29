import { Email } from "../models/email.draft.model.js"
export const addEmailDraft = async(req,res) => {
    try{
        const {emailSectionName, emailSubSectionName, emailBody, suggestedNotes} = req.body
        if(!emailSectionName || !emailSubSectionName || !emailBody){
            return res.status(400).json("all fields are required")
        }
        const createEmailDraft = new Email({emailSectionName, emailSubSectionName, emailBody, suggestedNotes})
        const saveEmail = await createEmailDraft.save()
        if(!saveEmail){
            return res.status(400).json("error while saving email")
        }
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

export const getEmailDraftWithName = async(req,res) => {
    try{
        const {emailSectionName, emailSubSectionName, customerName, appName} = req.body
        if(!emailSectionName && !emailSubSectionName && !customerName){
            return res.status(400).json("all fields are required")
        }
        const emailDraft = await Email.findOne({
            "emailSectionName": emailSectionName,
            "emailSubSectionName": emailSubSectionName
        })
        if(!emailDraft){
            return res.status(404).json("email not found")
        }
        const formattedEmailBody = emailDraft.emailBody.replace(/{customerName}/g, customerName).replace(/{appName}/g, appName);
        res.status(200).json({ emailBody: formattedEmailBody, suggestedNotes: emailDraft.suggestedNotes });
    }catch(error){
        console.log("error occured while adding email",error)
        res.status(500).json({error: "unable to add email", message: error.message})
    }
}

export const modifyMails = async(req,res) => {
    try{
        const oldNumber = "8792912390"
        const newNumber = "9845339809"
        const regex = new RegExp(oldNumber, "g");
        const mails = await Email.find({ emailBody: { $regex: oldNumber } })

        let count = 0;
        for (const mail of mails) {
            const updatedMail = mail.emailBody.replace(regex, newNumber)
            if(updatedMail !== mail.emailbody) {
                mail.emailBody = updatedMail
                await mail.save()
                console.log(`Updated: ${updatedMail}`);
                count++
            } 
        } 
        res.status(200).json({message: "all mails updated successfully!", totalMails: count})
    }catch(error){
        console.log("error occured while Modifying emails",error)
        res.status(500).json({error: "unable to add email", message: error.message})
    }
}