"use client";
import { useEffect, useState } from "react";
import LogoTyping from "./LogoTyping";

export default function Preloader({ onFinish }: { onFinish: () => void }) {
    const [fadeOut, setFadeOut] = useState(false);
    const [hidden, setHidden] = useState(false);

    useEffect(() => {
        const animationDuration = 1000; // matches transition-duration

        const timeout = setTimeout(() => {
            setFadeOut(true); // start fade
            setTimeout(() => {
                setHidden(true); // remove from DOM
                onFinish(); // notify parent
            }, animationDuration);
        }, 2500);

        return () => clearTimeout(timeout);
    }, []);

    if (hidden) return null;

    return (
        <div
            className={`fixed inset-0 z-50 flex items-center justify-center bg-black transition-opacity duration-1000 ${
                fadeOut ? "opacity-0" : "opacity-100"
            }`}
        >
            <LogoTyping />
        </div>
    );
}