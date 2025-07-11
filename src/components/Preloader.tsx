"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Spline from "@splinetool/react-spline/next";

export default function Preloader() {
    const [isReady, setIsReady] = useState(true);
    const [minTimePassed, setMinTimePassed] = useState(false);

    useEffect(() => {
        // Wait for full page load
        const onLoad = () => setIsReady(true);
        window.addEventListener("load", onLoad);

        // Wait for at least 15 seconds
        const minTime = setTimeout(() => {
            setMinTimePassed(true);
        }, 15000);

        return () => {
            window.removeEventListener("load", onLoad);
            clearTimeout(minTime);
        };
    }, []);

    const showPreloader = !(isReady && minTimePassed);

    return (
        <div>
            {showPreloader && (
                <div
                    className="fixed inset-0 z-[9999] bg-black flex items-center justify-center"
                >
                    <div className="w-full h-full">
                        <Spline scene="https://prod.spline.design/ZTEArICUeqxfhOdV/scene.splinecode" />
                    </div>

                    {/* Optional glowing text or loading message */}
                    <div className="absolute bottom-10 w-full text-center text-white text-sm tracking-wider opacity-80 animate-pulse">
                        Initializing Systems...
                    </div>
                </div>
            )}
        </div>
    );
}
