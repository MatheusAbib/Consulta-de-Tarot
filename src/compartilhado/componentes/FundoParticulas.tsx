import { useEffect, useRef } from "react";
import "./FundoParticulas.scss";

interface Particula {
  x: number;
  y: number;
  tamanho: number;
  cor: string;
  velX: number;
  velY: number;
  vida: number;
  vidaMax: number;
}

const CORES = ["#9969ff", "#ff69a1", "#69b4ff", "#ff9f69"];
const TOTAL_PARTICULAS = 50;

export function FundoParticulas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particulasRef = useRef<Particula[]>([]);
  const animacaoRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    function redimensionar() {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    function criarParticula(x: number, y: number, explosao = false): Particula {
      return {
        x,
        y,
        tamanho: Math.random() * 4 + 1,
        cor: CORES[Math.floor(Math.random() * CORES.length)],
        velX: (Math.random() - 0.5) * (explosao ? 8 : 1),
        velY: (Math.random() - 0.5) * (explosao ? 8 : 1),
        vida: 100,
        vidaMax: 100,
      };
    }

    function inicializar() {
      particulasRef.current = [];
      for (let i = 0; i < TOTAL_PARTICULAS; i++) {
        particulasRef.current.push(
          criarParticula(Math.random() * window.innerWidth, Math.random() * window.innerHeight)
        );
      }
    }

    function animar() {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const particulas = particulasRef.current;
      for (let i = 0; i < particulas.length; i++) {
        const p = particulas[i];
        p.x += p.velX;
        p.y += p.velY;
        p.velX *= 0.99;
        p.velY *= 0.99;
        p.vida--;

        const opacidade = p.vida / p.vidaMax;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.tamanho, 0, Math.PI * 2);
        const hex = Math.floor(opacidade * 255).toString(16).padStart(2, "0");
        ctx.fillStyle = p.cor + hex;
        ctx.fill();

        if (p.vida <= 0) {
          particulas.splice(i, 1);
          i--;
          if (particulas.length < TOTAL_PARTICULAS) {
            particulas.push(criarParticula(Math.random() * canvas.width, Math.random() * canvas.height));
          }
        }
      }

      animacaoRef.current = requestAnimationFrame(animar);
    }

    redimensionar();
    inicializar();
    animar();
    window.addEventListener("resize", redimensionar);

    return () => {
      window.removeEventListener("resize", redimensionar);
      cancelAnimationFrame(animacaoRef.current);
    };
  }, []);

  return <canvas ref={canvasRef} className="fundo-particulas" />;
}

