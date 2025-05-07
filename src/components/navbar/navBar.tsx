import { FC, useState } from "react";
import { MenuOption, NavBarProps } from "./types";
import { TbCircleDashedLetterS } from "react-icons/tb";
import { RxHamburgerMenu } from "react-icons/rx";
import { useAppContext } from "../../store/AppContext";

const NavBar: FC<NavBarProps> = (props) => {

    const { onClickMenuItem, sections } = props;
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
                    <TbCircleDashedLetterS />
                </div>
                <div className={`nav-list-wrapper-container ${isNavBarOpen ? "open" : "closed"}`}>
                    <ul className={`nav-list-wrapper`}>
                        {sections.map((option: MenuOption) => (
                            <li
                                key={option.id}
                                className={`nav-list-item${activeMenu === option.id ? " active" : ""}`}
                                onClick={() => onClickMenuItem(option.id)}
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