const { addNewLaunch, getAllLaunches } = require('../models/launches.models');


function httpGetAllLaunches(req, res){
    return res.status(200).json(getAllLaunches());
}

function httpAddNewLaunch(req, res){
    const launch = req.body;

    //validation for post route
    if(!launch.mission || !launch.launchDate || !launch.destination || !launch.rocket){
        return res.status(400).json({
            error: "Required parameters are missing!"
        })
    }

    launch.launchDate = new Date(launch.launchDate);
    if(isNaN(launch.launchDate)){
        return res.status(400).json({
            error: "Date parameter is incorrect"
        })
    }
    addNewLaunch(launch);
    console.log(launch);
    return res.status(201).json(launch);
}

module.exports = {
    httpGetAllLaunches,
    httpAddNewLaunch
}