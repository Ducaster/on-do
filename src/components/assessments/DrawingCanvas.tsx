"use client";

import { useRef, useState, useEffect } from "react";
import { Eraser, Undo2, RotateCcw, Minus, Plus } from "lucide-react";

interface DrawingCanvasProps {
  width?: number;
  height?: number;
  onExport: (dataUrl: string) => void;
}

export default function DrawingCanvas({
  width = 800,
  height = 600,
  onExport,
}: DrawingCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [color, setColor] = useState("#1C1410");
  const [lineWidth, setLineWidth] = useState(3);
  const [tool, setTool] = useState<"pen" | "eraser">("pen");
  const historyRef = useRef<ImageData[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(0, 0, width, height);
    saveHistory();
  }, [width, height]);

  function saveHistory() {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const data = ctx.getImageData(0, 0, width, height);
    historyRef.current = [...historyRef.current, data];
    if (historyRef.current.length > 50) {
      historyRef.current = historyRef.current.slice(-50);
    }
  }

  function getPos(e: React.MouseEvent | React.TouchEvent) {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    const scaleX = width / rect.width;
    const scaleY = height / rect.height;

    if ("touches" in e) {
      const touch = e.touches[0];
      return {
        x: (touch.clientX - rect.left) * scaleX,
        y: (touch.clientY - rect.top) * scaleY,
      };
    }
    return {
      x: (e.clientX - rect.left) * scaleX,
      y: (e.clientY - rect.top) * scaleY,
    };
  }

  function startDraw(e: React.MouseEvent | React.TouchEvent) {
    e.preventDefault();
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    setIsDrawing(true);
    const pos = getPos(e);
    ctx.beginPath();
    ctx.moveTo(pos.x, pos.y);
  }

  function draw(e: React.MouseEvent | React.TouchEvent) {
    if (!isDrawing) return;
    e.preventDefault();
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const pos = getPos(e);
    ctx.strokeStyle = tool === "eraser" ? "#FFFFFF" : color;
    ctx.lineWidth = tool === "eraser" ? lineWidth * 4 : lineWidth;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.lineTo(pos.x, pos.y);
    ctx.stroke();
  }

  function endDraw() {
    if (!isDrawing) return;
    setIsDrawing(false);
    saveHistory();
  }

  function undo() {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    if (historyRef.current.length > 1) {
      historyRef.current = historyRef.current.slice(0, -1);
      const prev = historyRef.current[historyRef.current.length - 1];
      ctx.putImageData(prev, 0, 0);
    }
  }

  function clearCanvas() {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(0, 0, width, height);
    saveHistory();
  }

  function handleExport() {
    const canvas = canvasRef.current;
    if (!canvas) return;
    onExport(canvas.toDataURL("image/png"));
  }

  const colors = [
    "#1C1410", "#9C5030", "#547E68", "#506E8E",
    "#7E5E78", "#C9A07A", "#E74C3C", "#2ECC71",
  ];

  return (
    <div className="space-y-3">
      {/* Toolbar */}
      <div className="flex items-center gap-3 flex-wrap">
        <div className="flex items-center gap-1.5">
          {colors.map((c) => (
            <button
              key={c}
              onClick={() => { setColor(c); setTool("pen"); }}
              className="w-7 h-7 rounded-full border-2 transition-transform cursor-pointer"
              style={{
                backgroundColor: c,
                borderColor: color === c && tool === "pen" ? "var(--color-primary)" : "transparent",
                transform: color === c && tool === "pen" ? "scale(1.2)" : "scale(1)",
              }}
            />
          ))}
        </div>

        <div className="w-px h-6 bg-border-light" />

        <div className="flex items-center gap-1">
          <button
            onClick={() => setLineWidth(Math.max(1, lineWidth - 1))}
            className="p-1.5 rounded-[var(--radius-sm)] hover:bg-bg-warm transition-colors cursor-pointer"
          >
            <Minus size={14} />
          </button>
          <span className="text-xs text-text-muted w-6 text-center">{lineWidth}</span>
          <button
            onClick={() => setLineWidth(Math.min(20, lineWidth + 1))}
            className="p-1.5 rounded-[var(--radius-sm)] hover:bg-bg-warm transition-colors cursor-pointer"
          >
            <Plus size={14} />
          </button>
        </div>

        <div className="w-px h-6 bg-border-light" />

        <button
          onClick={() => setTool(tool === "eraser" ? "pen" : "eraser")}
          className={`p-2 rounded-[var(--radius-sm)] transition-colors cursor-pointer ${
            tool === "eraser" ? "bg-primary text-white" : "hover:bg-bg-warm text-text-muted"
          }`}
        >
          <Eraser size={16} />
        </button>
        <button
          onClick={undo}
          className="p-2 rounded-[var(--radius-sm)] hover:bg-bg-warm text-text-muted transition-colors cursor-pointer"
        >
          <Undo2 size={16} />
        </button>
        <button
          onClick={clearCanvas}
          className="p-2 rounded-[var(--radius-sm)] hover:bg-bg-warm text-text-muted transition-colors cursor-pointer"
        >
          <RotateCcw size={16} />
        </button>
      </div>

      {/* Canvas */}
      <div className="border border-border-light rounded-[var(--radius-md)] overflow-hidden bg-white">
        <canvas
          ref={canvasRef}
          width={width}
          height={height}
          className="w-full touch-none"
          style={{ aspectRatio: `${width} / ${height}` }}
          onMouseDown={startDraw}
          onMouseMove={draw}
          onMouseUp={endDraw}
          onMouseLeave={endDraw}
          onTouchStart={startDraw}
          onTouchMove={draw}
          onTouchEnd={endDraw}
        />
      </div>

      <button
        onClick={handleExport}
        className="w-full py-3 bg-primary text-white rounded-[var(--radius-sm)] text-sm font-medium hover:bg-primary-dark transition-colors cursor-pointer"
      >
        검사 완료 및 저장
      </button>
    </div>
  );
}
