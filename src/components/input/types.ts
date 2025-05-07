import { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

type CommonProps = {
    label: string
    error: string
}

type InputSpecificProps = InputHTMLAttributes<HTMLInputElement> & {
    as?: "input"
}

type TextAreaSpecificProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
    as: "textarea"
}

type InputProps = CommonProps & (InputSpecificProps | TextAreaSpecificProps)

export type { InputProps }