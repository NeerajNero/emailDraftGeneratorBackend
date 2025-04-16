import { Router } from "express";
import { addAppsInfo, getAllAppsInfo, getAppDataByPlatform } from "../controllers/appsInfo.controller.js";

const router = Router()

router.post('/addAppsInfo', addAppsInfo)
router.get('/getAppData/:platform', getAppDataByPlatform)
router.get('/getAppsData', getAllAppsInfo)

export default router