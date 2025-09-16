import { Link } from "react-router-dom"

export default function LoginView() {
    return (
        <>
            <h1 className="text-4xl text-white font-bold">Iniciar sesión</h1>

            <nav className="mt-10">
                <Link className="text-center text-white text-lg block mt-10" to="/auth/register">No tienes una cuenta? Crea una aqui.</Link>
            </nav>
        </>
    )
}
