// Global variables for database calls
let req = {} // Indicates empty object
let query = ""
let results = []
let pw = "ac@T!.........."  // put your database password here
let netID = "chc72331"
let database = "375groupa1"
let allUserData = []

btnUserInfo.onclick=function(){
  ChangeForm(UserInfo)
}

btnLogin.onclick=function(){
  ChangeForm(UserPage)
}

// This is Chin-Hwa 2:54pm