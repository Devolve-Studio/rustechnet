"use client";
import { useEffect, useState } from "react";
import LogoTyping from "./LogoTyping";

export default function Preloader() {
    const [fadeOut, setFadeOut] = useState(false);
    const [hidden, setHidden] = useState(false);

    useEffect(() => {
        const totalDuration = 1500; // 1s wait + 0.5s fade

        const fadeTimer = setTimeout(() => {
            setFadeOut(true);
        }, 1000);

        const hideTimer = setTimeout(() => {
            setHidden(true);
        }, totalDuration);

        return () => {
            clearTimeout(fadeTimer);
            clearTimeout(hideTimer);
        };
    }, []);

    if (hidden) return null;

    return (
        <div
            role="presentation"
            aria-hidden="true"
            className={`fixed inset-0 z-50 flex items-center justify-center bg-[var(--background)] text-[var(--foreground)] transition-opacity duration-500 ${
                fadeOut ? "opacity-0" : "opacity-100"
            }`}
        >
            <LogoTyping />
        </div>
    );
}