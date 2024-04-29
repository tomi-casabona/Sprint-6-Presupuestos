import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center min-h-screen bg-gradient-to-r from-indigo-400 to-red-400 text-white">
          <h1 className="text-3xl font-extrabold my-20 text-center">
            Bienvenido a la App de Presupuestos Web
          </h1>
        <div className="card w-full max-w-lg shadow-2xl p-8 text-center">
          <p className="mt-4 text-lg">
            ¡Listo para estimar el costo de tu próxima aplicación web! Sigue las
            instrucciones para obtener un presupuesto detallado.
          </p>
          <div className="mt-6 flex justify-center">
            <button className="btn btn-success mt-5">
              <Link to="/formPresu">Comenzar</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
