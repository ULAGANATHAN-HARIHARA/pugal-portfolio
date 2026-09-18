"use client";

import { useEffect, useRef } from "react";

type ProjectPreviewProps = {
  type: string;
  number: string;
};

export default function ProjectPreview({
  type,
  number,
}: ProjectPreviewProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    let animationFrame = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const ratio = window.devicePixelRatio || 1;

      canvas.width = rect.width * ratio;
      canvas.height = rect.height * ratio;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
    };

    const draw = (time: number) => {
      const rect = canvas.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;

      context.clearRect(0, 0, width, height);

      const motion = time * 0.0005;

      if (type === "SPECTRA") drawSpectra(context, width, height, motion);
      else if (type === "KITE") drawKite(context, width, height, motion);
      else if (type === "MESH") drawMesh(context, width, height, motion);
      else drawEcho(context, width, height, motion);

      animationFrame = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    animationFrame = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrame);
    };
  }, [type]);

  return (
    <div className="relative w-full h-[280px] md:h-[380px] overflow-hidden border border-[#343733] bg-[#111413]">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        aria-hidden="true"
      />

      <div className="absolute top-5 left-5 font-mono text-[9px] tracking-widest text-[#686B66]">
        PROJECT / {number}
      </div>

      <div className="absolute bottom-5 right-5 font-mono text-[9px] tracking-widest text-[#686B66]">
        SYSTEM / LIVE
      </div>

      <div className="absolute top-5 right-5 w-2 h-2 rounded-full bg-[#F04A35]" />
    </div>
  );
}

function drawSpectra(context: CanvasRenderingContext2D, width: number, height: number, motion: number) {
  const points = [
    [.16, .64], [.30, .35], [.44, .56], [.59, .28], [.75, .48], [.88, .25]
  ];

  context.lineWidth = 1;
  context.strokeStyle = "#555952";

  for (let i = 0; i < points.length - 1; i++) {
    const a = points[i];
    const b = points[i + 1];

    context.beginPath();
    context.moveTo(a[0] * width, a[1] * height);
    context.lineTo(b[0] * width, b[1] * height);
    context.stroke();
  }

  points.forEach((point, index) => {
    const pulse = Math.sin(motion * 4 + index) * 2;

    context.beginPath();
    context.arc(
      point[0] * width,
      point[1] * height,
      index === 0 ? 5 + pulse : 4,
      0,
      Math.PI * 2
    );
    context.fillStyle = index === 0 ? "#F04A35" : "#1D211F";
    context.fill();
    context.strokeStyle = index === 0 ? "#F04A35" : "#777A73";
    context.stroke();
  });

  drawLabel(context, "VISION → MEMORY", width * .06, height * .9);
}

function drawKite(context: CanvasRenderingContext2D, width: number, height: number, motion: number) {
  context.strokeStyle = "#4D514C";
  context.lineWidth = 1;

  const centerX = width * .5;
  const centerY = height * .5;

  for (let i = 0; i < 5; i++) {
    const x = centerX + Math.sin(motion * 1.3 + i) * width * .22;
    const y = centerY + (i - 2) * height * .07;

    context.beginPath();
    context.moveTo(width * .12, y);
    context.lineTo(x, y);
    context.stroke();
  }

  context.beginPath();
  context.moveTo(centerX, height * .22);
  context.lineTo(centerX + Math.sin(motion) * width * .12, height * .78);
  context.stroke();

  context.beginPath();
  context.arc(centerX, centerY, 8, 0, Math.PI * 2);
  context.fillStyle = "#F04A35";
  context.fill();

  drawLabel(context, "CONTEXT → ACTION", width * .06, height * .9);
}

function drawMesh(context: CanvasRenderingContext2D, width: number, height: number, motion: number) {
  const nodes = [
    [.18, .30], [.40, .22], [.65, .34], [.82, .25],
    [.28, .62], [.52, .55], [.76, .68], [.44, .82]
  ];

  context.lineWidth = 1;
  context.strokeStyle = "#4D514C";

  nodes.forEach((node, index) => {
    const next = nodes[(index + 1) % nodes.length];

    context.beginPath();
    context.moveTo(node[0] * width, node[1] * height);
    context.lineTo(next[0] * width, next[1] * height);
    context.stroke();
  });

  nodes.forEach((node, index) => {
    const radius = index === 0 ? 5 + Math.sin(motion * 3) * 2 : 3;

    context.beginPath();
    context.arc(node[0] * width, node[1] * height, radius, 0, Math.PI * 2);
    context.fillStyle = index === 0 ? "#F04A35" : "#D6D3CA";
    context.fill();
  });

  drawLabel(context, "DATA → RELATIONSHIPS", width * .06, height * .9);
}

function drawEcho(context: CanvasRenderingContext2D, width: number, height: number, motion: number) {
  const centerX = width * .55;
  const centerY = height * .47;

  context.lineWidth = 1;

  for (let i = 0; i < 7; i++) {
    const radius = 22 + i * 25 + Math.sin(motion * 2 + i) * 4;

    context.beginPath();
    context.arc(centerX, centerY, radius, 0, Math.PI * 2);
    context.strokeStyle = i === 0 ? "#F04A35" : "#4D514C";
    context.stroke();
  }

  context.beginPath();
  context.moveTo(width * .12, centerY);
  context.lineTo(width * .88, centerY);
  context.strokeStyle = "#30342F";
  context.stroke();

  context.beginPath();
  context.arc(
    centerX + Math.cos(motion) * 75,
    centerY + Math.sin(motion) * 75,
    5,
    0,
    Math.PI * 2
  );
  context.fillStyle = "#F04A35";
  context.fill();

  drawLabel(context, "INTERACTION → MEMORY", width * .06, height * .9);
}

function drawLabel(
  context: CanvasRenderingContext2D,
  text: string,
  x: number,
  y: number
) {
  context.font = "10px monospace";
  context.fillStyle = "#686B66";
  context.fillText(text, x, y);
}
