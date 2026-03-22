import { User } from '../entities/User'

export async function loginUser(response){
    const payload = response.credential;

    const resp = await fetch(`${import.meta.env.VITE_BACKEND_URL}/auth/google`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({ token: payload })
    });

    if(!resp.ok){
        console.error("ошибка вышла");
        return null;
    }

    const userData = await resp.json();

    const user = User.fromJson(userData);

    localStorage.setItem('apiToken', user.token);
    localStorage.setItem('userName', user.name);
    localStorage.setItem('userEmail', user.email);

}