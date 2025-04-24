import { FC, useEffect, useRef, useState } from "react";
import { PiDownloadSimpleThin } from "react-icons/pi";

const About: FC = () => {
    const avatarRef = useRef<HTMLDivElement>(null);
    const imgRef = useRef<HTMLImageElement>(null);
    const [size, setSize] = useState(0);

    useEffect(() => {
        if (!avatarRef.current) return;

        const observer = new ResizeObserver((entries) => {
            for (const entry of entries) {
                const { width, height } = entry.contentRect;
                const minSize = Math.min(width, height);
                setSize(minSize); // Ensure it's square
            }
        });

        observer.observe(avatarRef.current);

        return () => observer.disconnect();
    }, []);

    return (
        <section id="about" className="about-section-wrapper">
            <div className="about-section">
                <div className="about-content">
                    <div className="about-text-wrapper">
                        <section className="d-flex gap-4 align-center">
                            <p className="about-title">Hi, I'm</p>
                            <span className="about-name">Siva Guhan</span>
                        </section>
                        <p className="about-subtitle">Frontend Developer</p>
                    </div>
                    <button className="about-button">
                        <div className="icon-wrapper">
                            <PiDownloadSimpleThin />
                        </div>
                        <span>Resume</span>
                    </button>
                </div>

                <div
                    className="avatar"
                    ref={avatarRef}
                    style={{
                        borderRadius: "50%",
                        overflow: "hidden",
                    }}
                >
                    <img
                        ref={imgRef}
                        src="/avatar.gif"
                        alt="avatar"
                        style={{
                            width: size,
                            height: size,
                            objectFit: "cover",
                            borderRadius: "50%",
                            transition: "all 0.2s ease"
                        }}
                    />
                </div>
            </div>
        </section>
    );
};

export default About;
