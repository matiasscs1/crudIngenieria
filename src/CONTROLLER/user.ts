import { User } from "../MODEL/user";


export async function getUsers(): Promise<User[]> {
    try {
        const response = await fetch("http://localhost:3004/user");
        console.log(response);
        const result = await response.json();
        //transformar el resultado a un array de objetos con map y retornar el resultado
        return result.map((user: User) => {
            return {
                _id: user._id,
                username: user.username,
                email: user.email,
                password: user.password,
                nacimiento: user.nacimiento,
                genero: user.genero,
                telefono: user.telefono,
                nombre: user.nombre,
                direccion: user.direccion,
                ciudad: user.ciudad
            };
        });
    } catch (error) {
        console.error(error);
        return [];
    }


}


export async function createUser(user: User): Promise<boolean> {
    user.nacimiento = "1990-01-01";
    try {
        const response = await fetch("http://localhost:3004/user", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        });
        console.log(response);
        return response.ok;
    } catch (error) {
        console.error(error);
        return false;
    }
}
