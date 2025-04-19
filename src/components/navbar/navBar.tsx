import { FC } from "react";
import { MENU_OPTIONS } from "./constants";
import { MenuOption } from "./types";

const NavBar: FC = () => {


    return (
        <nav className="nav-container">
            <div>
                <p>Portfolio</p>
            </div>
            <ul>
                {MENU_OPTIONS.map((option: MenuOption) => (
                    <li
                        key={option.value}
                    >
                        {option.label}
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default NavBar