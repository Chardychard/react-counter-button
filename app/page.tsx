"use client";

import { useState } from "react";

import MyButton from "./components/button";

export default function Home() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }
    return (
        <main className="flex min-h-screen flex-col items-center p-24 gap-4">
            <h1>React Counter Button</h1>
            <MyButton count={count} onClick={handleClick} />
            
        </main>
    );
}