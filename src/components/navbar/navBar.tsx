import { FC, useState } from "react";
import { MENU_OPTIONS } from "./constants";
import { MenuOption } from "./types";
import { RxHamburgerMenu, RxAvatar } from "react-icons/rx";
import { useAppContext } from "../../store/AppContext";

const NavBar: FC = () => {
    const [isNavBarOpen, setIsNavBarOpen] = useState(false);

    const { state } = useAppContext();

    const { activeMenu } = state;

    const onClickHamburger = () => {
        setIsNavBarOpen((prev) => !prev);
    }

    return (
        <div className="nav-container">
            <nav className="nav-inner-container">
                <div className="avatar">
                    <RxAvatar />
                </div>
                <div className={`nav-list-wrapper-container ${isNavBarOpen ? "open" : "closed"}`}>
                    <ul className={`nav-list-wrapper`}>
                        {MENU_OPTIONS.map((option: MenuOption) => (
                            <li
                                key={option.value}
                                className={`nav-list-item${activeMenu === option.value ? " active" : ""}`}
                            >
                                {option.label}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="hamburger" onClick={onClickHamburger}>
                    <RxHamburgerMenu />
                </div>
            </nav>
        </div>
    )
}

export default NavBar