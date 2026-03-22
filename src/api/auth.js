import { User } from '../entities/User'

export async function loginUser(response){
    const payload = response.credential;

    const resp = await fetch('http://localhost:80/api/auth/google', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({ token: payload })
    });

    if(!resp.ok){
        console.error("какая-то хуета");
        return null;
    }

    const userData = await resp.json();

    const user = User.fromJson(userData);

    console.log(user);

}