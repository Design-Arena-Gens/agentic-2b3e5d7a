"use client";
import { useEffect, useState } from "react";

// Minimal interactive force layout without external deps
// Good enough for small graphs

type Node = { id: string; label: string; group: string };
type Link = { source: string; target: string };

const NODES: Node[] = [
  { id: "lolita", label: "Lolita", group: "work" },
  { id: "pale_fire", label: "Pale Fire", group: "work" },
  { id: "ada", label: "Ada, or Ardor", group: "work" },
  { id: "obsession", label: "Obsession", group: "theme" },
  { id: "unreliable", label: "Unreliable Narrator", group: "theme" },
  { id: "metafiction", label: "Metafiction", group: "theme" },
  { id: "memory", label: "Memory", group: "theme" },
];

const LINKS: Link[] = [
  { source: "lolita", target: "obsession" },
  { source: "lolita", target: "unreliable" },
  { source: "pale_fire", target: "metafiction" },
  { source: "pale_fire", target: "unreliable" },
  { source: "ada", target: "memory" },
  { source: "ada", target: "metafiction" },
];

export function WebGraph() {
  const [positions, setPositions] = useState<Record<string, { x: number; y: number }>>(() => {
    const result: Record<string, { x: number; y: number }> = {};
    for (const n of NODES) {
      result[n.id] = { x: Math.random() * 500, y: Math.random() * 260 };
    }
    return result;
  });

  useEffect(() => {
    // Run the layout animation only in the browser
    let animationFrame = 0;
    const alphaDecay = 0.98;
    let alpha = 1;

    function step() {
      alpha *= alphaDecay;
      setPositions((current) => {
        const next: typeof current = { ...current };

        for (const { source, target } of LINKS) {
          const a = next[source];
          const b = next[target];
          const dx = b.x - a.x;
          const dy = b.y - a.y;
          const dist = Math.max(0.001, Math.hypot(dx, dy));
          const desired = 110;
          const force = (dist - desired) * 0.01 * alpha;
          const fx = (dx / dist) * force;
          const fy = (dy / dist) * force;
          a.x += fx;
          a.y += fy;
          b.x -= fx;
          b.y -= fy;
        }

        for (const n of NODES) {
          const p = next[n.id];
          p.x += (250 - p.x) * 0.005 * alpha;
          p.y += (130 - p.y) * 0.005 * alpha;
        }

        return next;
      });

      if (alpha > 0.01) animationFrame = window.requestAnimationFrame(step);
    }

    animationFrame = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <svg viewBox="0 0 500 260" className="w-full h-[260px]">
      {LINKS.map((l, i) => (
        <line
          key={i}
          x1={positions[l.source]?.x ?? 0}
          y1={positions[l.source]?.y ?? 0}
          x2={positions[l.target]?.x ?? 0}
          y2={positions[l.target]?.y ?? 0}
          stroke="#1c1b1a22"
        />
      ))}
      {NODES.map((n) => (
        <g key={n.id} transform={`translate(${positions[n.id]?.x ?? 0}, ${positions[n.id]?.y ?? 0})`}>
          <circle r={n.group === "work" ? 10 : 6} fill={n.group === "work" ? "#f59e0b" : "#3b82f6"} />
          <text x={12} y={4} className="text-[12px] fill-ink/80">{n.label}</text>
        </g>
      ))}
    </svg>
  );
}
