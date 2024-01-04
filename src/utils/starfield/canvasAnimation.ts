const STAR_SPEED = 0.2;
const STAR_NUM = 2000;
export const startStarfieldAnimation = (
  canvasRef: React.RefObject<HTMLCanvasElement>
) => {
  const canvas = canvasRef.current;
  const ctx = canvas?.getContext("2d");
  let animationFrameId: number;

  if (canvas && ctx) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const stars: { x: number; y: number; rad: number }[] = [];
    for (let i = 0; i < STAR_NUM; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const rad = Math.random() * 1.5;
      stars.push({ x, y, rad });
    }

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#008080";
      for (const star of stars) {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.rad, 0, Math.PI * 2);
        ctx.fill();
      }

      for (const star of stars) {
        star.y += STAR_SPEED;
        if (star.y > canvas.height) {
          star.y = 0;
        }
      }
      animationFrameId = requestAnimationFrame(render);
    };

    render();
  }

  return () => {
    cancelAnimationFrame(animationFrameId);
  };
};
