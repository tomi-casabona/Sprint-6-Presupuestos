import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar bg-slate-200 justify-center gap-10">
      <Link className="btn btn-ghost text-xl" to="/">
        Home
      </Link>
      <Link className="btn btn-ghost text-xl" to="/formPresu">
        Formulario Presupuesto
      </Link>
    </div>
  );
}
