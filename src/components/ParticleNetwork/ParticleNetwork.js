import React, { useEffect, useRef } from "react";

const ParticleBackground = ({ children }) => {
  const canvasRef = useRef(null);
  const options = {
    particleColor: "rgba(254,244,201)",
    lineColor: "rgba(81,255,116)",
    particleAmount: 30,
    defaultRadius: 0.5,
    variantRadius: 1,
    defaultSpeed: 1,
    variantSpeed: 1,
    linkRadius: 300,
  };

  class Particle {
    constructor(w, h, ctx) {
      this.x = Math.random() * w;
      this.y = Math.random() * h;
      this.color = options.particleColor;
      this.radius =
        options.defaultRadius + Math.random() * options.variantRadius;
      this.speed = options.defaultSpeed + Math.random() * options.variantSpeed;
      this.directionAngle = Math.floor(Math.random() * 360);
      this.vector = {
        x: Math.cos(this.directionAngle) * this.speed,
        y: Math.sin(this.directionAngle) * this.speed,
      };
      this.ctx = ctx;
      this.w = w;
      this.h = h;
    }

    update() {
      this.border();
      this.x += this.vector.x;
      this.y += this.vector.y;
    }

    border() {
      if (this.x >= this.w || this.x <= 0) {
        this.vector.x *= -1;
      }
      if (this.y >= this.h || this.y <= 0) {
        this.vector.y *= -1;
      }
      if (this.x > this.w) this.x = this.w;
      if (this.y > this.h) this.y = this.h;
      if (this.x < 0) this.x = 0;
      if (this.y < 0) this.y = 0;
    }

    draw() {
      this.ctx.beginPath();
      this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      this.ctx.closePath();
      this.ctx.fillStyle = this.color;
      this.ctx.fill();
    }
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let particles = [];
    const rgb = options.lineColor.match(/\d+/g);

    const resizeReset = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const initialiseElements = () => {
      particles = [];
      for (let i = 0; i < options.particleAmount; i++) {
        particles.push(new Particle(canvas.width, canvas.height, ctx));
      }
    };

    const drawScene = () => {
      // Draw lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = 0; j < particles.length; j++) {
          const distance = Math.sqrt(
            Math.pow(particles[j].x - particles[i].x, 2) +
              Math.pow(particles[j].y - particles[i].y, 2)
          );
          const opacity = 1 - distance / options.linkRadius;

          if (opacity > 0) {
            ctx.lineWidth = 0.5;
            ctx.strokeStyle = `rgba(${rgb[0]},${rgb[1]},${rgb[2]},${opacity})`;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.closePath();
            ctx.stroke();
          }
        }
      }

      // Draw particles
      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawScene();
      animationFrameId = requestAnimationFrame(animate);
    };

    // Initialize
    resizeReset();
    initialiseElements();
    animate();

    // Handle window resize
    const handleResize = () => {
      resizeReset();
      initialiseElements();
    };
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const containerStyle = {
    position: "relative",
    width: "100%",
    minHeight: "900px",
    background: "black",
    isolation: "isolate", // Creates a new stacking context
  };

  const canvasStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "900px",
    zIndex: 1,
    pointerEvents: "none",
  };

  const contentStyle = {
    position: "relative",
    zIndex: 2,
    minHeight: "900px",
    width: "100%",
  };

  return (
    <div style={containerStyle}>
      {/* Canvas Layer */}
      <div style={canvasStyle}>
        <canvas
          ref={canvasRef}
          style={{
            width: "100%",
            height: "900px",
            display: "block",
          }}
        />
      </div>

      {/* Content Layer */}
      <div style={contentStyle}>{children}</div>
    </div>
  );
};

// Example usage
const ExamplePage = () => {
  return (
    <ParticleBackground>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          padding: "1rem",
          color: "white",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "3rem",
            fontWeight: "bold",
            marginBottom: "1rem",
          }}
        >
          Welcome to My Site
        </h1>
        <p
          style={{
            fontSize: "1.25rem",
            maxWidth: "600px",
            marginBottom: "2rem",
          }}
        >
          This text should now appear above the particle network animation. The
          background creates an interactive and dynamic experience while
          maintaining content readability.
        </p>
      </div>
    </ParticleBackground>
  );
};

export default ParticleBackground;
