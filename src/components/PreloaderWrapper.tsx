"use client";
import { useState } from "react";
import Preloader from "./Preloader";

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
    const [done, setDone] = useState(false);

    return (
        <>
            {!done && <Preloader onFinish={() => setDone(true)} />}
            <div className={`${done ? "block" : "hidden"}`}>
                {children}
            </div>
        </>
    );
}