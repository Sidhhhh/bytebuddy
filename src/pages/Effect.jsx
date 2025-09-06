import { useEffect } from 'react';

const useCanvasCursor = () => {
  useEffect(() => {
    const canvas = document.getElementById('canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let f;
    let pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    let lines = [];
    let animationId;

    const E = {
      debug: true,
      friction: 0.5,
      trails: 20,
      size: 50,
      dampening: 0.25,
      tension: 0.98,
    };

    class Oscillator {
      constructor({ phase = 0, offset = 0, frequency = 0.001, amplitude = 1 }) {
        this.phase = phase;
        this.offset = offset;
        this.frequency = frequency;
        this.amplitude = amplitude;
      }

      update() {
        this.phase += this.frequency;
        return this.offset + Math.sin(this.phase) * this.amplitude;
      }
    }

    class Node {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.vx = 0;
        this.vy = 0;
      }
    }

    class Line {
      constructor({ spring }) {
        this.spring = spring + 0.1 * Math.random() - 0.02;
        this.friction = E.friction + 0.01 * Math.random() - 0.002;
        this.nodes = Array.from({ length: E.size }, () => new Node(pos.x, pos.y));
      }

      update() {
        let e = this.spring;
        const first = this.nodes[0];
        first.vx += (pos.x - first.x) * e;
        first.vy += (pos.y - first.y) * e;

        for (let i = 0; i < this.nodes.length; i++) {
          const node = this.nodes[i];
          if (i > 0) {
            const prev = this.nodes[i - 1];
            node.vx += (prev.x - node.x) * e;
            node.vy += (prev.y - node.y) * e;
            node.vx += prev.vx * E.dampening;
            node.vy += prev.vy * E.dampening;
          }
          node.vx *= this.friction;
          node.vy *= this.friction;
          node.x += node.vx;
          node.y += node.vy;

          e *= E.tension;
        }
      }

      draw(ctx) {
        ctx.beginPath();
        ctx.moveTo(this.nodes[0].x, this.nodes[0].y);

        for (let i = 1; i < this.nodes.length - 2; i++) {
          const curr = this.nodes[i];
          const next = this.nodes[i + 1];
          const xc = (curr.x + next.x) / 2;
          const yc = (curr.y + next.y) / 2;
          ctx.quadraticCurveTo(curr.x, curr.y, xc, yc);
        }

        const secondLast = this.nodes[this.nodes.length - 2];
        const last = this.nodes[this.nodes.length - 1];
        ctx.quadraticCurveTo(secondLast.x, secondLast.y, last.x, last.y);

        ctx.stroke();
        ctx.closePath();
      }
    }

    const createLines = () => {
      lines = Array.from({ length: E.trails }, (_, i) =>
        new Line({ spring: 0.4 + (i / E.trails) * 0.025 })
      );
    };

    const onPointerMove = (e) => {
      if (e.touches) {
        pos.x = e.touches[0].pageX;
        pos.y = e.touches[0].pageY;
      } else {
        pos.x = e.clientX;
        pos.y = e.clientY;
      }
      e.preventDefault();
    };

    const render = () => {
      ctx.globalCompositeOperation = 'source-over';
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = 'lighter';
      ctx.strokeStyle = `hsla(${Math.round(f.update())}, 50%, 50%, 0.2)`;
      ctx.lineWidth = 1;

      lines.forEach((line) => {
        line.update();
        line.draw(ctx);
      });

      animationId = requestAnimationFrame(render);
    };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth - 20;
      canvas.height = window.innerHeight;
    };

    const setup = () => {
      f = new Oscillator({
        phase: Math.random() * 2 * Math.PI,
        amplitude: 85,
        frequency: 0.0015,
        offset: 285,
      });

      resizeCanvas();
      createLines();
      render();
    };

    setup();

    document.addEventListener('mousemove', onPointerMove);
    document.addEventListener('touchstart', onPointerMove);
    window.addEventListener('resize', resizeCanvas);

    return () => {
      cancelAnimationFrame(animationId);
      document.removeEventListener('mousemove', onPointerMove);
      document.removeEventListener('touchstart', onPointerMove);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);
};

export default useCanvasCursor;
