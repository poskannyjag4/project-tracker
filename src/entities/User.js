export class User{
    name;
    email;
    token;
    
    
    /**
     *
     */
    constructor(name, email, token) {
        this.name = name;
        this.email = email;
        this.token = token;
    }

    static fromJson(data){
        return new User(
            data.name,
            data.email,
            data.token
        );
    }
}