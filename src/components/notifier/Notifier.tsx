import { FC, useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { useAppContext } from "../../store/AppContext";
import { BsXCircleFill } from "react-icons/bs";

const Notifier: FC = () => {

    const { state, dispatch } = useAppContext();

    const { type, message, show } = state.notifier;

    const [animateOut, setAnimateOut] = useState(false);

    useEffect(() => {
        if(show) {
            const timeout = setTimeout(() => {
                setAnimateOut(true);
                setTimeout(() => {
                    dispatch({type: 'RESET_NOTIFIER'});
                }, 200)
            }, 3000)
            return () => clearTimeout(timeout);
        } else {
            setAnimateOut(false);
        }
    }, [show])

    if(!show) return null;

    return (
        <div 
            className={`notifier-wrapper${animateOut ? ' reverse-animate' : ' animate'}
            ${type === 'success' ? ' success' : ' error'}`}
        >
            {type === 'success' 
            ? <FaCheckCircle color="#228B22" size={24} />
            : <BsXCircleFill color="#e53935" size={24} />
            }
            <p className="message">{message}</p>
        </div>
    );
}

export default Notifier;