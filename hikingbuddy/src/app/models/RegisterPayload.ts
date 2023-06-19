export class RegisterPayload{

    username:String;
    password:String;
    confirmPassword:String;

    constructor(username:String, password:String, confirmPassword:String)
    {
      this.username = username;
      this.password = password;
      this.confirmPassword = confirmPassword;
    }

    public getUsername() : String
    {
       return this.username;
    }

    public getPassword() : String
    {
      return this.password;
    }

    public getConfirmPassword() : String
    {
      return this.confirmPassword;
    }



}