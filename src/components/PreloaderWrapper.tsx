"use client";
import { useState, useEffect } from "react";
import Preloader from "@/components/Preloader"

export default function PreloaderWrapper({ children }: { children: React.ReactNode }) {
    const [done, setDone] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDone(true);
        }, 1800); // or call setDone from Preloader internally

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="relative">
            {children}
            {!done && (
                <div className="fixed inset-0 z-50 bg-[var(--background)] flex items-center justify-center transition-opacity duration-700">
                    <Preloader />
                </div>
            )}
        </div>
    );
}