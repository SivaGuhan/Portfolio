import { FC } from "react";
import { HeaderProps } from "./types";

const Heading: FC<HeaderProps> = (props) => {
    const { title } = props;

    return (
        <div className="heading-wrapper">
            <h1 className="heading">{title}</h1>
        </div>
    );
}

export default Heading