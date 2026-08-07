import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../style/LoginAdministrador.css";


function LoginAdministrador() {

    const navigate = useNavigate();


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);



    const handleSubmit = async (event) => {

        event.preventDefault();

        setError("");
        setLoading(true);


        try {


            const response = await fetch(
                `${import.meta.env.VITE_API_URL}/api/auth/login`,
                {

                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },


                    body: JSON.stringify({

                        email,
                        password

                    })

                }
            );



            const data =
                await response.json();



            if (!response.ok) {

                throw new Error(
                    data.message ||
                    "Error iniciando sesión."
                );

            }



            localStorage.setItem(
                "ssm_admin_token",
                data.token
            );



            localStorage.setItem(
                "ssm_admin",
                JSON.stringify(
                    data.admin
                )
            );



            navigate(
                "/panel-administrador"
            );



        } catch(error) {


            setError(
                error.message
            );


        } finally {


            setLoading(false);


        }

    };





    return (

        <main className="admin-login-page">


            <div className="admin-login-card">


                <div className="admin-login-brand">


                    <strong>
                        SSM
                    </strong>


                    <span>
                        Panel administrativo
                    </span>


                </div>





                <div className="admin-login-title">


                    <h1>
                        Iniciar sesión
                    </h1>


                    <p>
                        Acceso exclusivo para administradores.
                    </p>


                </div>





                <form
                    onSubmit={handleSubmit}
                    className="admin-login-form"
                >



                    <label>
                        Correo electrónico
                    </label>


                    <input

                        type="email"

                        value={email}

                        onChange={(e) =>
                            setEmail(
                                e.target.value
                            )
                        }

                        placeholder="admin@ssm.com"

                        required

                    />





                    <label>
                        Contraseña
                    </label>


                    <input

                        type="password"

                        value={password}

                        onChange={(e) =>
                            setPassword(
                                e.target.value
                            )
                        }

                        placeholder="Contraseña"

                        required

                    />





                    {
                        error &&

                        <div className="admin-login-error">

                            {error}

                        </div>

                    }





                    <button
                        type="submit"
                        disabled={loading}
                    >

                        {
                            loading
                            ?
                            "Ingresando..."
                            :
                            "Ingresar"
                        }


                    </button>



                </form>



            </div>



        </main>


    );


}


export default LoginAdministrador;



