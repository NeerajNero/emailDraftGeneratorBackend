import express from 'express'
import { addEmailDraft,fetchEmailDrafts,getEmailDraftWithName, modifyMails } from '../controllers/emailDraftController.js'
const router = express.Router()

router.post('/addEmailDraft', addEmailDraft)
router.get('/fetchEmailDrafts', fetchEmailDrafts)
router.post('/getEmailDraftWithName', getEmailDraftWithName)
router.post('/modifyMails', modifyMails)

export default router
