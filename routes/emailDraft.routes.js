import express from 'express'
import { addEmailDraft,fetchEmailDrafts,getEmailDraftWithName } from '../controllers/emailDraftController.js'
const router = express.Router()

router.post('/addEmailDraft', addEmailDraft)
router.get('/fetchEmailDrafts', fetchEmailDrafts)
router.post('/getEmailDraftWithName', getEmailDraftWithName)

export default router
