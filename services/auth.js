
let auth = {};

auth.checkForTeacherAuth = (req,res,next) => {
    try {
        if(true){
            console.log("Authorized!");
            next();
        }
        else {
            throw new Error("Unauthorised!");
        }
    } catch (error) {
        console.log("Error occur while auth");
        res.send("Unauthorised");
    }
}
auth.checkForTeacherAuth2 = (req,res,next) => {
    try {
        if(true){
            console.log("Authorized!2");
            next();
        }
        else {
            throw new Error("Unauthorised!");
        }
    } catch (error) {
        console.log("Error occur while auth");
        res.send("Unauthorised");
    }
}

module.exports = auth;