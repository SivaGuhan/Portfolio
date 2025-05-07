import { FC, InputHTMLAttributes, TextareaHTMLAttributes } from "react";
import { InputProps } from "./types";

const Input: FC<InputProps> = (props) => {
    const { 
        label, 
        as = "input",
        error,
        ...rest
    } = props;

    return (
        <div className="input-wrapper">
            {as === "textarea" ? (
                <textarea
                    className="input textarea"
                    placeholder={label}
                    {...(rest as TextareaHTMLAttributes<HTMLTextAreaElement>)}
                />
            ) : (
                <input
                    className="input input-box"
                    placeholder={label}
                    {...(rest as InputHTMLAttributes<HTMLInputElement>)}
                />
            )}
            <label className="label">{label}</label>
            <p className="error-text">{error || "\u00A0"}</p>
        </div>
    );
};

export default Input;
