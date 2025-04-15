import { Router } from "express";
import { addAppsInfo, getAllAppsInfo } from "../controllers/appsInfo.controller.js";

const router = Router()

router.post('/addAppsInfo', addAppsInfo)
router.get('/getAppData/:platform/app/:appName')
router.get('/getAppsData', getAllAppsInfo)

export default router