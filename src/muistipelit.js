import { Outlet, Link } from "react-router-dom";

export default function Muistipelit() {


    return (
        <div className="mpeliDiv">
            <h1>Muistipelit</h1>
            <div className="pelilistaDiv">
                <Link className="linkki" to="lippupeli">Lippupeli</Link>
                <Link className="linkki" to="koirapeli">Koirapeli</Link>
            </div>
            <Outlet />
        </div>
    )
}