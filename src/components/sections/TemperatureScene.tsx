"use client";

import { useEffect, useRef } from "react";

export function TemperatureScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let rafId = 0;
    let cleanupScene = () => {};
    let cancelled = false;

    async function setupScene(canvasElement: HTMLCanvasElement) {
      const {
        AmbientLight,
        CatmullRomCurve3,
        Color,
        DirectionalLight,
        Group,
        Mesh,
        MeshStandardMaterial,
        PerspectiveCamera,
        Scene,
        TubeGeometry,
        Vector2,
        Vector3,
        WebGLRenderer,
      } = await import("three");

      if (cancelled) return;

      const styles = getComputedStyle(document.documentElement);
      const coral = styles.getPropertyValue("--color-coral").trim();
      const mint = styles.getPropertyValue("--color-mint").trim();
      const signalBlue = styles.getPropertyValue("--color-signal-blue").trim();
      const warm = styles.getPropertyValue("--color-accent-soft").trim();
      const cream = styles.getPropertyValue("--color-bg-cream").trim();
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      const scene = new Scene();
      const camera = new PerspectiveCamera(45, 1, 0.1, 100);
      const renderer = new WebGLRenderer({
        canvas: canvasElement,
        alpha: true,
        antialias: true,
        preserveDrawingBuffer: true,
        powerPreference: "high-performance",
      });
      const pointer = new Vector2(0, 0);
      const ribbons = new Group();

      camera.position.set(0, 0, 8);
      scene.add(new AmbientLight(new Color(cream), 2.4));

      const keyLight = new DirectionalLight(new Color(coral), 2.2);
      keyLight.position.set(3, 4, 6);
      scene.add(keyLight);

      const coolLight = new DirectionalLight(new Color(mint), 1.4);
      coolLight.position.set(-5, -2, 4);
      scene.add(coolLight);

      const signalLight = new DirectionalLight(new Color(signalBlue), 1.1);
      signalLight.position.set(-2, 4, 5);
      scene.add(signalLight);

      const ribbonConfigs = [
        {
          color: coral,
          radius: 0.042,
          y: 0.32,
          phase: 0,
          opacity: 0.54,
        },
        {
          color: mint,
          radius: 0.036,
          y: -0.18,
          phase: 0.88,
          opacity: 0.42,
        },
        {
          color: signalBlue,
          radius: 0.028,
          y: 0,
          phase: 1.2,
          opacity: 0.34,
        },
        {
          color: warm,
          radius: 0.03,
          y: -0.62,
          phase: 1.54,
          opacity: 0.38,
        },
      ];

      ribbonConfigs.forEach((config) => {
        const points = Array.from({ length: 9 }, (_, index) => {
          const x = -4.2 + index * 1.05;
          const wave = Math.sin(index * 0.9 + config.phase) * 0.72;
          const z = Math.cos(index * 0.78 + config.phase) * 0.42;
          return new Vector3(x, config.y + wave, z);
        });
        const curve = new CatmullRomCurve3(points);
        const geometry = new TubeGeometry(curve, 180, config.radius, 14, false);
        const material = new MeshStandardMaterial({
          color: new Color(config.color),
          emissive: new Color(config.color),
          emissiveIntensity: 0.35,
          roughness: 0.28,
          metalness: 0.08,
          transparent: true,
          opacity: config.opacity,
        });
        const mesh = new Mesh(geometry, material);
        ribbons.add(mesh);
      });

      scene.add(ribbons);

      function resize() {
        const rect = canvasElement.getBoundingClientRect();
        const width = Math.max(1, Math.floor(rect.width));
        const height = Math.max(1, Math.floor(rect.height));
        renderer.setSize(width, height, false);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
      }

      function handlePointerMove(event: PointerEvent) {
        const rect = canvasElement.getBoundingClientRect();
        pointer.x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
        pointer.y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
      }

      function renderFrame(time: number) {
        const t = time * 0.00035;
        ribbons.rotation.x = -0.12 + pointer.y * 0.05;
        ribbons.rotation.y = Math.sin(t) * 0.12 + pointer.x * 0.12;
        ribbons.position.y = Math.sin(t * 1.7) * 0.12;
        renderer.render(scene, camera);

        if (!prefersReducedMotion) {
          rafId = window.requestAnimationFrame(renderFrame);
        }
      }

      resize();
      window.addEventListener("resize", resize);
      window.addEventListener("pointermove", handlePointerMove, {
        passive: true,
      });
      renderFrame(0);

      cleanupScene = () => {
        window.removeEventListener("resize", resize);
        window.removeEventListener("pointermove", handlePointerMove);
        window.cancelAnimationFrame(rafId);
        ribbons.traverse((object) => {
          if (object instanceof Mesh) {
            object.geometry.dispose();
            if (Array.isArray(object.material)) {
              object.material.forEach((material) => material.dispose());
            } else {
              object.material.dispose();
            }
          }
        });
        renderer.dispose();
      };
    }

    void setupScene(canvas);

    return () => {
      cancelled = true;
      cleanupScene();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
    />
  );
}
