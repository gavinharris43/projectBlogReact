var loggedIn ="true";
var username;
var uID;



class Session extends Comment {

  login(){
  username="Gharris";
  uID="1";
  loggedIn="true";

  }
  logout(){
    username="";
    uID="";
    loggedIn="false";

  }
  getLoggedIn(){
    return loggedIn
  }
}
export default Session;

