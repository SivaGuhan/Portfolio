import { useState, useEffect } from "react";

const useIntersectionObserver = (ref: React.RefObject<HTMLElement | null>, options: IntersectionObserverInit = {}): boolean => {
    const [hasIntersected, setHasIntersected] = useState<boolean>(false);

    useEffect(() => {
        const element = ref.current;
        if (!element || hasIntersected) return;

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setHasIntersected(true);
                observer.unobserve(entry.target);
            }
        }, options);

        observer.observe(element);

        return () => {
            observer.disconnect();
        };
    }, [ref, options, hasIntersected])

    return hasIntersected;
}

export default useIntersectionObserver;