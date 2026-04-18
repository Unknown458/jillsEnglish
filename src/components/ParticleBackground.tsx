import { useEffect, useRef } from "react";

interface Snowflake {
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  wind: number;
  wobble: number;
  wobbleSpeed: number;
}

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animFrameRef = useRef<number>(0);
  const flakesRef = useRef<Snowflake[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const count = Math.floor((canvas.width * canvas.height) / 12000);
      const flakes: Snowflake[] = [];
      for (let i = 0; i < count; i++) {
        flakes.push(createFlake(canvas.width, canvas.height, true));
      }
      flakesRef.current = flakes;
    };

    const createFlake = (w: number, h: number, randomY: boolean): Snowflake => ({
      x: Math.random() * w,
      y: randomY ? Math.random() * h : -10,
      size: Math.random() * 1.2 + 0.3,
      speed: Math.random() * 0.6 + 0.2,
      opacity: Math.random() * 0.3 + 0.08,
      wind: Math.random() * 0.5 - 0.25,
      wobble: Math.random() * Math.PI * 2,
      wobbleSpeed: Math.random() * 0.02 + 0.005,
    });

    resize();
    window.addEventListener("resize", resize);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const isDark = document.documentElement.classList.contains("dark");
      const color = isDark ? "255,255,255" : "100,116,139";

      for (let i = 0; i < flakesRef.current.length; i++) {
        const f = flakesRef.current[i];
        f.wobble += f.wobbleSpeed;
        f.y += f.speed;
        f.x += f.wind + Math.sin(f.wobble) * 0.3;

        if (f.y > canvas.height + 10 || f.x < -10 || f.x > canvas.width + 10) {
          flakesRef.current[i] = createFlake(canvas.width, canvas.height, false);
          continue;
        }

        ctx.beginPath();
        ctx.arc(f.x, f.y, f.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color},${f.opacity})`;
        ctx.fill();
      }

      animFrameRef.current = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
};

export default ParticleBackground;
