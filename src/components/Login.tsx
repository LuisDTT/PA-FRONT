import Link from "next/link";
import bg from "../../public/assets/logo.png";

export const Login = () => {
  return (
    <div className="min-h-screen flex">
      <div
        className="w-1/2 bg-contain bg-center bg-no-repeat relative"
        style={{
          backgroundImage: `url('${bg.src}')`,
        }}
      ></div>

      <div className="w-1/2 flex items-center justify-center bg-gray-100">
        <form className="bg-white p-10 rounded-lg shadow-2xl max-w-md w-full">
          <h2 className="text-3xl font-bold text-center mb-6 text-green-700">
            Bienvenido a GanaderíaPro
          </h2>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-800"
            >
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              className="mt-2 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-green-600 focus:border-green-600"
              placeholder="ejemplo@correo.com"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-800"
            >
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              className="mt-2 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-green-600 focus:border-green-600"
              placeholder="••••••••"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition"
          >
            <Link href={"/home"}>Iniciar sesión</Link>
          </button>
          <p className="text-center text-sm text-gray-700 mt-4">
            ¿No tienes una cuenta?{" "}
            <a
              href="#"
              className="text-green-600 font-semibold hover:underline"
            >
              Regístrate aquí
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
