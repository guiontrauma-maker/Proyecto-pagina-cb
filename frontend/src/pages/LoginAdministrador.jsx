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

            const response =
                await fetch(
                    "http://localhost:5000/api/admin/login",
                    {
                        method: "POST",

                        headers: {
                            "Content-Type":
                                "application/json",
                        },

                        body: JSON.stringify({
                            email,
                            password,
                        }),
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


        } catch (error) {

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
                        onChange={(event) =>
                            setEmail(
                                event.target.value
                            )
                        }
                        placeholder="Correo electrónico"
                        required
                    />


                    <label>
                        Contraseña
                    </label>

                    <input
                        type="password"
                        value={password}
                        onChange={(event) =>
                            setPassword(
                                event.target.value
                            )
                        }
                        placeholder="Contraseña"
                        required
                    />


                    {error && (
                        <div className="admin-login-error">
                            {error}
                        </div>
                    )}


                    <button
                        type="submit"
                        disabled={loading}
                    >

                        {loading
                            ? "Ingresando..."
                            : "Ingresar"
                        }

                    </button>

                </form>

            </div>

        </main>

    );
}


export default LoginAdministrador;