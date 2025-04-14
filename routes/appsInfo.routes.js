import { Router } from "express";
import { addAppsInfo } from "../controllers/appsInfo.controller.js";

const router = Router()

router.post('/addAppsInfo', addAppsInfo)

export default router