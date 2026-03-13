import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Cursor() {
    const dotRef = useRef<HTMLDivElement | null>(null);
    const ringRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const dot = dotRef.current;
        const ring = ringRef.current;
        if (!dot || !ring) return;

        gsap.set([dot, ring], { x: -200, y: -200 });

        const moveCursor = (e: MouseEvent) => {
            gsap.to(dot, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.08,
                ease: "power2.out",
            });

            gsap.to(ring, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.55,
                ease: "power3.out",
            });
        };

        const onMouseDown = () => {
            gsap.to(ring, { scale: 0.85, duration: 0.15, ease: "power2.out" });
            gsap.to(dot, { scale: 1.5, duration: 0.15, ease: "power2.out" });
        };

        const onMouseUp = () => {
            gsap.to(ring, { scale: 1, duration: 0.5, ease: "elastic.out(1.2, 0.5)" });
            gsap.to(dot, { scale: 1, duration: 0.4, ease: "elastic.out(1.2, 0.5)" });
        };

        window.addEventListener("mousemove", moveCursor);
        window.addEventListener("mousedown", onMouseDown);
        window.addEventListener("mouseup", onMouseUp);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mousedown", onMouseDown);
            window.removeEventListener("mouseup", onMouseUp);
        };
    }, []);

    const base: React.CSSProperties = {
        position: "fixed",
        top: 0,
        left: 0,
        pointerEvents: "none",
        zIndex: 9999,
        transform: "translate(-50%, -50%)",
        willChange: "transform",
        borderRadius: "50%",
    };

    return (
        <>
            <div
                ref={ringRef}
                style={{
                    ...base,
                    width: 50,
                    height: 50,
                    border: "1.5px solid rgba(208, 206, 206, 0.75)",
                    background: "transparent",
                }}
            />

            <div
                ref={dotRef}
                style={{
                    ...base,
                    width: 8,
                    height: 8,
                    background: "rgba(191, 189, 189, 0.9)",
                }}
            />
        </>
    );
}