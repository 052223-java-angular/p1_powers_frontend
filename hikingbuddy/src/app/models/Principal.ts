export class Principal
{
    id:String;
    username:String;
    token:String;
    role:String;

    constructor(id:String, username:String, token:String, role:String) 
    {
        this.id = id;
        this.username = username;
        this.token = token;
        this.role = role;
    }


}