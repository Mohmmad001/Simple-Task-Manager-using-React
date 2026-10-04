import "./NavList.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function NavList() {
    const [active, setActive] = useState("all");

    return (
        <div className="navList">

            <Link to="/home">
                <button
                    className={active === "all" ? "active" : ""}
                    onClick={() => setActive("all")}
                >
                    All
                </button>
            </Link>

            <Link to="/done">
                <button
                    className={active === "done" ? "active" : ""}
                    onClick={() => setActive("done")}
                >
                    Done
                </button>
            </Link>

            <Link to="/not-done">
                <button
                    className={active === "notDone" ? "active" : ""}
                    onClick={() => setActive("notDone")}
                >
                    Not Done
                </button>
            </Link>

        </div>
    );
}