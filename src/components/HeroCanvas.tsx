'use client';

import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  gold: boolean;
  life: number;
  maxLife: number;
}

export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let particles: Particle[] = [];
    let mouseX = 0;
    let mouseY = 0;
    let time = 0;

    const isMobile = window.innerWidth < 768;
    const dpr = Math.min(window.devicePixelRatio, 2);

    const resize = () => {
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.scale(dpr, dpr);
    };

    const createParticle = (): Particle => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      return {
        x: Math.random() * w,
        y: h + Math.random() * 50,
        vx: (Math.random() - 0.5) * 0.3,
        vy: -(Math.random() * 0.4 + 0.15),
        size: Math.random() * 2.5 + 0.5,
        opacity: 0,
        gold: Math.random() > 0.3,
        life: 0,
        maxLife: Math.random() * 400 + 300,
      };
    };

    // Initialize particles — fewer on mobile for performance
    const particleCount = isMobile ? 30 : 60;
    for (let i = 0; i < particleCount; i++) {
      const p = createParticle();
      p.y = Math.random() * canvas.offsetHeight;
      p.life = Math.random() * p.maxLife;
      particles.push(p);
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    const drawOrbitRing = (
      cx: number,
      cy: number,
      rx: number,
      ry: number,
      rotation: number,
      tilt: number,
      color: string,
      lineWidth: number,
      dashOffset: number
    ) => {
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(rotation);
      ctx.scale(1, tilt);
      ctx.beginPath();
      ctx.ellipse(0, 0, rx, ry, 0, 0, Math.PI * 2);
      ctx.strokeStyle = color;
      ctx.lineWidth = lineWidth;
      ctx.setLineDash([4, 12]);
      ctx.lineDashOffset = dashOffset;
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.restore();
    };

    const drawGlowDot = (x: number, y: number, radius: number, color: string, glow: number) => {
      ctx.save();
      ctx.shadowBlur = glow;
      ctx.shadowColor = color;
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fillStyle = color;
      ctx.fill();
      ctx.restore();
    };

    const animate = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);
      time += 0.003; // Slow, cinematic speed

      // ─── 3D Orbital rings (center of canvas) ───
      const cx = w / 2;
      const cy = h * 0.48;

      // Ring 1 — Large, slow
      drawOrbitRing(
        cx, cy,
        Math.min(w * 0.32, 280), Math.min(w * 0.14, 120),
        time * 0.4,
        0.45,
        'rgba(212, 168, 67, 0.12)',
        1.5,
        time * 80
      );

      // Ring 2 — Medium, opposite direction
      drawOrbitRing(
        cx, cy,
        Math.min(w * 0.26, 220), Math.min(w * 0.12, 100),
        -time * 0.3 + 0.8,
        0.5,
        'rgba(212, 168, 67, 0.08)',
        1,
        -time * 60
      );

      // Ring 3 — Inner, faster tilt
      drawOrbitRing(
        cx, cy,
        Math.min(w * 0.18, 155), Math.min(w * 0.08, 70),
        time * 0.55 + 1.5,
        0.55,
        'rgba(232, 198, 106, 0.1)',
        1,
        time * 100
      );

      // ─── Orbiting dots on rings ───
      for (let i = 0; i < 3; i++) {
        const angle = time * (0.3 + i * 0.15) + (i * Math.PI * 2) / 3;
        const ringR = Math.min(w * 0.32, 280);
        const ringRy = Math.min(w * 0.14, 120);
        const tilt = 0.45;
        const rot = time * 0.4;

        const localX = Math.cos(angle) * ringR;
        const localY = Math.sin(angle) * ringRy * tilt;
        const cosR = Math.cos(rot);
        const sinR = Math.sin(rot);
        const dotX = cx + localX * cosR - localY * sinR;
        const dotY = cy + localX * sinR + localY * cosR;

        const behind = Math.sin(angle) > 0.3;
        if (!behind) {
          drawGlowDot(dotX, dotY, 3, 'rgba(212, 168, 67, 0.8)', 20);
        }
      }

      // ─── Center glow pulse ───
      const pulseSize = 40 + Math.sin(time * 2) * 8;
      const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, pulseSize);
      gradient.addColorStop(0, 'rgba(212, 168, 67, 0.08)');
      gradient.addColorStop(0.5, 'rgba(212, 168, 67, 0.03)');
      gradient.addColorStop(1, 'transparent');
      ctx.fillStyle = gradient;
      ctx.fillRect(cx - pulseSize, cy - pulseSize, pulseSize * 2, pulseSize * 2);

      // ─── Floating particles ───
      particles.forEach((p, i) => {
        p.life++;
        p.x += p.vx;
        p.y += p.vy;

        // Gentle mouse repel
        const dx = p.x - mouseX;
        const dy = p.y - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 100 && dist > 0) {
          const force = (100 - dist) / 100 * 0.15;
          p.vx += (dx / dist) * force;
          p.vy += (dy / dist) * force;
        }

        // Dampen velocity
        p.vx *= 0.999;
        p.vy *= 0.999;

        // Fade in/out
        const lifeRatio = p.life / p.maxLife;
        if (lifeRatio < 0.1) {
          p.opacity = lifeRatio / 0.1;
        } else if (lifeRatio > 0.85) {
          p.opacity = (1 - lifeRatio) / 0.15;
        } else {
          p.opacity = 1;
        }

        // Draw
        const alpha = p.opacity * (p.gold ? 0.6 : 0.3);
        const color = p.gold
          ? `rgba(212, 168, 67, ${alpha})`
          : `rgba(100, 130, 200, ${alpha})`;

        ctx.save();
        if (p.gold && p.size > 1.5) {
          ctx.shadowBlur = 12;
          ctx.shadowColor = 'rgba(212, 168, 67, 0.4)';
        }
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
        ctx.restore();

        // Reset dead particles
        if (p.life >= p.maxLife || p.y < -20) {
          particles[i] = createParticle();
        }
      });

      // ─── Subtle connection lines between close particles (skip on mobile) ───
      if (!isMobile) {
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 120 && particles[i].gold && particles[j].gold) {
              const alpha = (1 - dist / 120) * 0.06 * particles[i].opacity * particles[j].opacity;
              ctx.beginPath();
              ctx.moveTo(particles[i].x, particles[i].y);
              ctx.lineTo(particles[j].x, particles[j].y);
              ctx.strokeStyle = `rgba(212, 168, 67, ${alpha})`;
              ctx.lineWidth = 0.5;
              ctx.stroke();
            }
          }
        }
      }

      animationId = requestAnimationFrame(animate);
    };

    resize();
    window.addEventListener('resize', resize);
    canvas.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-auto"
      style={{ opacity: 0.9 }}
    />
  );
}
