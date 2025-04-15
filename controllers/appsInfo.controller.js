import { AppsInfo } from "../models/app.model.js";

export const addAppsInfo = async(req,res) => {
    try{
        const {appName, appLink, appMailId, platform} = req.body
        if(!appName || !appLink || !appMailId || platform){
            return res.status(400).json("All fields are required!")
        }
        const appData = new AppsInfo({appName, appLink, appMailId, platform})
        const saveAppData = await appData.save()
        if(!saveAppData){
            return res.status(400).json("error occured while saving appData!")
        }
        res.status(201).json({message: "app Data stored successfully."})
    }catch(error){
        console.log("error occured while adding appsData", error.message)
        res.satus(500).json({message: "Internal server error", error: error.message})
    }
}

export const getAllAppsInfo = async(req,res) => {
    try{
        const getAllAppsData = await AppsInfo.find()
        if(!getAllAppsData || getAllAppsData.length === 0){
            return res.status(404).json({message: "No apps data found"})
        }
        res.status(200).json({message: "all apps data fetched successfully.", appsData: getAllAppsData})
    }catch(error){
        console.log("error occured while fetching appsData", error.message)
        res.satus(500).json({message: "Internal server error", error: error.message})
    }
}