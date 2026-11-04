import { useEffect, useRef, useState } from "react";

const ScrollReveal = ({
    children,
    direction = "up",
    className = "",
}) => {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const element = ref.current;

        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(element);
                }
            },
            {
                threshold: 0.15,
            }
        );

        observer.observe(element);

        return () => observer.disconnect();
    }, []);

    const directions = {
        up: "translate-y-20",
        right: "translate-x-20",
        left: "-translate-x-10",
        down: "-translate-y-10",
    };

    return (
        <div
            ref={ref}
            className={`transition-all duration-[1500ms] ease-out ${isVisible
                ? "translate-x-0 translate-y-0 opacity-100"
                : `${directions[direction]} opacity-0`
                } ${className}`}
        >
            {children}
        </div>
    );
};

export default ScrollReveal;