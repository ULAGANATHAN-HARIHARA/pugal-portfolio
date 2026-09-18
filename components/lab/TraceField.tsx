"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

type Point = {
  x: number;
  y: number;
};

export default function TraceField() {
  const canvasRef =
    useRef<HTMLCanvasElement>(null);

  const pointsRef =
    useRef<Point[]>([]);

  const drawingRef =
    useRef(false);

  const animationRef =
    useRef<number | null>(null);

  const [drawing, setDrawing] =
    useState(false);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const context =
      canvas.getContext("2d");

    if (!context) return;

    const rect =
      canvas.getBoundingClientRect();

    context.clearRect(
      0,
      0,
      rect.width,
      rect.height
    );

    const points =
      pointsRef.current;

    if (points.length > 1) {
      context.beginPath();

      context.moveTo(
        points[0].x,
        points[0].y
      );

      for (
        let i = 1;
        i < points.length;
        i++
      ) {
        const previous =
          points[i - 1];

        const current =
          points[i];

        const middleX =
          (previous.x + current.x) /
          2;

        const middleY =
          (previous.y + current.y) /
          2;

        context.quadraticCurveTo(
          previous.x,
          previous.y,
          middleX,
          middleY
        );
      }

      context.lineWidth = 1.5;
      context.lineCap = "round";
      context.lineJoin = "round";
      context.strokeStyle =
        "#E94B35";

      context.stroke();
    }

    if (drawingRef.current) {
      animationRef.current =
        requestAnimationFrame(draw);
    }
  }, []);

  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const context =
      canvas.getContext("2d");

    if (!context) return;

    const rect =
      canvas.getBoundingClientRect();

    const ratio =
      window.devicePixelRatio || 1;

    canvas.width =
      rect.width * ratio;

    canvas.height =
      rect.height * ratio;

    context.setTransform(
      ratio,
      0,
      0,
      ratio,
      0,
      0
    );

    draw();
  }, [draw]);

  useEffect(() => {
    resizeCanvas();

    window.addEventListener(
      "resize",
      resizeCanvas
    );

    return () => {
      window.removeEventListener(
        "resize",
        resizeCanvas
      );

      if (
        animationRef.current !== null
      ) {
        cancelAnimationFrame(
          animationRef.current
        );
      }
    };
  }, [resizeCanvas]);

  const addPoint = (
    clientX: number,
    clientY: number
  ) => {
    const canvas =
      canvasRef.current;

    if (!canvas) return;

    const rect =
      canvas.getBoundingClientRect();

    pointsRef.current.push({
      x: clientX - rect.left,
      y: clientY - rect.top,
    });

    if (
      pointsRef.current.length >
      1200
    ) {
      pointsRef.current.shift();
    }

    draw();
  };

  const handlePointerDown = (
    event: React.PointerEvent<HTMLCanvasElement>
  ) => {
    const canvas =
      event.currentTarget;

    drawingRef.current = true;
    setDrawing(true);

    canvas.setPointerCapture(
      event.pointerId
    );

    pointsRef.current = [];

    addPoint(
      event.clientX,
      event.clientY
    );

    animationRef.current =
      requestAnimationFrame(draw);
  };

  const handlePointerMove = (
    event: React.PointerEvent<HTMLCanvasElement>
  ) => {
    if (!drawingRef.current) {
      return;
    }

    addPoint(
      event.clientX,
      event.clientY
    );
  };

  const stopDrawing = () => {
    drawingRef.current = false;
    setDrawing(false);

    if (
      animationRef.current !== null
    ) {
      cancelAnimationFrame(
        animationRef.current
      );

      animationRef.current = null;
    }

    draw();
  };

  const clearTrace = () => {
    pointsRef.current = [];

    draw();
  };

  const hasTrace =
    pointsRef.current.length > 0;

  return (
    <div className="relative w-full h-[500px] md:h-[600px] border border-[#B8B5AC] bg-[#FAF9F4] overflow-hidden">

      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full touch-none cursor-crosshair"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={stopDrawing}
        onPointerCancel={stopDrawing}
      />

      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(#B8B5AC 1px, transparent 1px), linear-gradient(90deg, #B8B5AC 1px, transparent 1px)",
          backgroundSize:
            "50px 50px",
        }}
      />

      <div className="absolute top-6 left-6 pointer-events-none">
        <div className="font-mono text-[10px] tracking-widest text-[#77756E]">
          EXPERIMENT / 001
        </div>

        <div className="mt-2 font-mono text-[10px] tracking-widest">
          TRACE FIELD
        </div>
      </div>

      {!drawing && !hasTrace && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="text-center">

            <div className="font-mono text-xs text-[#77756E]">
              MOVE / DRAW
            </div>

            <div className="mt-3 text-2xl md:text-4xl uppercase tracking-[-0.04em]">
              Create Your Trace
            </div>

          </div>
        </div>
      )}

      <button
        type="button"
        onClick={clearTrace}
        className="absolute bottom-6 right-6 font-mono text-[10px] tracking-widest border-b border-[#161616] pb-1 hover:opacity-50 transition-opacity focus-visible:outline-2 focus-visible:outline-[#E94B35] focus-visible:outline-offset-4"
      >
        CLEAR TRACE
      </button>

      <div className="absolute bottom-6 left-6 font-mono text-[9px] text-[#77756E] pointer-events-none">
        INTERACTION / LIVE
      </div>

    </div>
  );
}