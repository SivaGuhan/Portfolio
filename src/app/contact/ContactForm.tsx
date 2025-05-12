import { FC, FormEvent, useRef, useState } from "react";
import { Input } from "../../components";
import { useAppContext } from "../../store/AppContext";
import emailjs from '@emailjs/browser';

const Form: FC = () => {

    const { dispatch } = useAppContext();

    const formRef = useRef<HTMLFormElement>(null);

    const [errors, setErrors] = useState<Record<string, string>>({});
    const [loading, setLoading] = useState<boolean>(false);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = formRef.current;

        if(!form) return;

        const formData = new FormData(form);
        const name = formData.get("name")?.toString()?.trim();
        const email = formData.get("email")?.toString().trim();
        const subject = formData.get("subject")?.toString().trim();
        const message = formData.get("message")?.toString().trim();

        const newErrors: Record<string, string> = {};
        if (!name) newErrors.name = "Name is required";
        if (!email) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = "Invalid email";
        }
        if (!subject) newErrors.subject = "Subject is required";
        if (!message) newErrors.message = "Message is required";

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setErrors({});
        setLoading(true);

        try {
            await emailjs.sendForm(
                import.meta.env.VITE_EMAIL_SERVICE_ID,
                import.meta.env.VITE_EMAIL_TEMPLATE_ID,
                form,
                import.meta.env.VITE_EMAIL_PUBLIC_KEY
            );
            dispatch({ type: 'SET_NOTIFIER', payload: { type: 'success', message: 'Successfully Sent', show: true } });
        } catch {
            dispatch({ type: 'SET_NOTIFIER', payload: { type: 'error', message: 'Something went wrong', show: true } });
        } finally {
            form.reset();
            setLoading(false);
        }
    }

    return (
    <form 
        className="form-wrapper"
        ref={formRef}
        onSubmit={handleSubmit}
    >
        <Input 
            label="Name" 
            name="name" 
            autoComplete="off" 
            error={errors.name}
            onInput={() => setErrors(prev => ({ ...prev, name: "" }))}
        />
        <Input 
            label="Email" 
            type="email" 
            name="email" 
            autoComplete="off" 
            error={errors.email}
            onInput={() => setErrors(prev => ({ ...prev, email: "" }))}
        />
        <Input 
            label="Subject" 
            name="subject" 
            autoComplete="off" 
            error={errors.subject}
            onInput={() => setErrors(prev => ({ ...prev, subject: "" }))}
        />
        <Input 
            label="Message" 
            as="textarea" 
            name="message" 
            autoComplete="off"
            error={errors.message}
            onInput={() => setErrors(prev => ({ ...prev, message: "" }))}
        />
        <div className="submit-button-wrapper">
            <button className="submit" type="submit" disabled={loading}>
            {loading ? (
                <span className="loading-dots">
                    Sending
                    <span className="dot one">.</span>
                    <span className="dot two">.</span>
                    <span className="dot three">.</span>
                </span>
            ) : (
                "Send Mail"
            )}
            </button>
        </div>
    </form>
    )
}

export default Form;