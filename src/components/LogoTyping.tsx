"use client";
import { useEffect, useState } from "react";

const TEXT = "rustechnet";

export default function LogoTyping() {
    const [displayed, setDisplayed] = useState("");
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < TEXT.length) {
            const timeout = setTimeout(() => {
                setDisplayed((prev) => prev + TEXT[index]);
                setIndex(index + 1);
            }, 120); // typing speed
            return () => clearTimeout(timeout);
        }
    }, [index]);

    return (
        <div className="font-extrabold text-4xl font-mono tracking-wide flex text-[#00a86b]">
            {displayed}
            <span className="animate-blink">|</span>
        </div>
    );
}