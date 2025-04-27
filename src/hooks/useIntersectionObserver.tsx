import { useState, useEffect } from "react";

const useIntersectionObserver = (ref: React.RefObject<HTMLElement | null>, options: IntersectionObserverInit = {}): boolean => {
    const [isIntersecting, setIsIntersecting] = useState<boolean>(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setIsIntersecting(entry.isIntersecting);
        }, options);

        const element = ref.current;
        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, [ref, options])

    return isIntersecting;
}

export default useIntersectionObserver;