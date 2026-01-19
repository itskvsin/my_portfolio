import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Cursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const isTouchDevice = window.matchMedia("(hover: none) and (pointer: coarse)").matches;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (isTouchDevice || reduceMotion) return;

    const cursor = cursorRef.current;
    if (!cursor) return;

    let mouseX = 0;
    let mouseY = 0;
    let x = 0;
    let y = 0;

    const setX = gsap.quickSetter(cursor, "x", "px");
    const setY = gsap.quickSetter(cursor, "y", "px");
    const setRotate = gsap.quickSetter(cursor, "rotation", "deg");
    const setScaleX = gsap.quickSetter(cursor, "scaleX");
    const setScaleY = gsap.quickSetter(cursor, "scaleY");

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const update = () => {
      const dx = mouseX - x;
      const dy = mouseY - y;

      x += dx * 0.18;
      y += dy * 0.18;

      const angle = Math.atan2(dy, dx) * (180 / Math.PI);
      const velocity = Math.min(Math.sqrt(dx * dx + dy * dy), 80);
      const stretch = velocity * 0.015;

      setX(x);
      setY(y);
      setRotate(angle);
      setScaleX(1 + stretch);
      setScaleY(1 - stretch * 0.4);
    };

    window.addEventListener("mousemove", onMouseMove);
    gsap.ticker.add(update);

    const onMouseDown = () =>
      gsap.to(cursor, { scale: 0.75, duration: 0.15, ease: "power2.out" });

    const onMouseUp = () =>
      gsap.to(cursor, { scale: 1, duration: 0.2, ease: "elastic.out(1, 0.4)" });

    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);

    const interactiveElements = document.querySelectorAll(
      "a, button, input, textarea, select, [data-cursor='hover']"
    );

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", () =>
        gsap.to(cursor, { scale: 1.8, duration: 0.25, ease: "power3.out" })
      );
      el.addEventListener("mouseleave", () =>
        gsap.to(cursor, { scale: 1, duration: 0.25, ease: "power3.out" })
      );
    });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      gsap.ticker.remove(update);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-4 h-4 rounded-full bg-white pointer-events-none z-[9999] mix-blend-difference"
    />
  );
}
