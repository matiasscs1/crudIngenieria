
import React, { useEffect } from "react";
import { getUsers, createUser } from "../CONTROLLER/user.ts";

export default function User() {
    const [users, setUsers] = React.useState([]);
    const [userUpdate, setUserUpdate] = React.useState(true);
    const [userCreate, setUserCreate] = React.useState({
        username: "",
        email: "",
        nacimiento: "",
        genero: "",
        telefono: "",
        nombre: "",
        direccion: "",
        ciudad: "",
        password: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name in userCreate) {
            setUserCreate({
                ...userCreate,
                [name]: value
            });
        }
    }

    useEffect(() => {
        getUsers().then((res) => {
            setUsers(res);
        });
    }
        , [userUpdate]);

    async function post() {
        await createUser(userCreate)
        setUserUpdate(!userUpdate);
    }

    return (
        <div style={{ width: "100%" }}>
            <h1>User</h1>

            <div className="Create">


                <div className="flex justify-between separate">
                    <input
                        label="Name"
                        variant="bordered"
                        placeholder="Enter your name"
                        type="text"
                        className="max-w-xs"
                        name="username"
                        value={userCreate.username}
                        onChange={handleChange}
                    />
                    <input
                        label="Name"
                        variant="bordered"
                        placeholder="Enter your name"
                        type="text"
                        className="max-w-xs"
                        name="email"
                        value={userCreate.email}
                        onChange={handleChange}
                    />

                    <input
                        label="Name"
                        variant="bordered"
                        placeholder="Enter your name"
                        type="text"
                        className="max-w-xs"
                        name="password"
                        value={userCreate.password}
                        onChange={handleChange}
                    />
                    <input
                        label="Name"
                        variant="bordered"
                        placeholder="Enter your name"
                        type="text"
                        className="max-w-xs"
                        name="nacimiento"
                        value={userCreate.nacimiento}
                        onChange={handleChange}
                    />
                    <input
                        label="Name"
                        variant="bordered"
                        placeholder="Enter your name"
                        type="text"
                        className="max-w-xs"
                        name="genero"
                        value={userCreate.genero}
                        onChange={handleChange}
                    />
                </div>
                <div className="flex justify-between">
                    <input
                        label="Name"
                        variant="bordered"
                        placeholder="Enter your name"
                        type="text"
                        className="max-w-xs"
                        name="telefono"
                        value={userCreate.telefono}
                        onChange={handleChange}
                    />
                    <input
                        label="Name"
                        variant="bordered"
                        placeholder="Enter your name"
                        type="text"
                        className="max-w-xs"
                        name="nombre"
                        value={userCreate.nombre}
                        onChange={handleChange}
                    />
                    <input
                        label="Name"
                        variant="bordered"
                        placeholder="Enter your name"
                        type="text"
                        className="max-w-xs"
                        name="direccion"
                        value={userCreate.direccion}
                        onChange={handleChange}
                    />
                    <input
                        label="Name"
                        variant="bordered"
                        placeholder="Enter your name"
                        type="text"
                        className="max-w-xs"
                        name="ciudad"
                        value={userCreate.ciudad}
                        onChange={handleChange}
                    />
                </div>

                <button onClick={() => post()}>
                    Create
                </button>
            </div>




            <div style={{ position: "relative", width: "80%" }}>

                <table className=" divide-y divide-gray-200 shadow-lg bg-white rounded-lg">
                    <thead className="bg-gray-50">
                        <tr>
                            {['ID', 'Username', 'Email', 'Password', 'Birthdate', 'Gender', 'Phone', 'Name', 'Address', 'City', 'Action'].map((header) => (
                                <th key={header} scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    {header}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {users.map((user) => (
                            <tr key={user._id}>
                                <td className="px-6 py-4 whitespace-nowrap">{user._id}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{user.username}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{user.password}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{user.nacimiento}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{user.genero}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{user.telefono}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{user.nombre}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{user.direccion}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{user.ciudad}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded">Action</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>

        </div>
    );
}
