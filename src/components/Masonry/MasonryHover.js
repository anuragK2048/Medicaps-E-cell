import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import ImageModule from "../ImageModule/ImageModule.js";
import "./MasonryHover.css";

// Image paths object
const IMAGE_PATHS = {
  BG1: require("../../assets/images/Masonry/BG1.jpg"),
  BG2: require("../../assets/images/Masonry/BG2.jpg"),
  BG3: require("../../assets/images/Masonry/BG3.jpg"),
  BG4: require("../../assets/images/Masonry/BG4.jpg"),
  BG5: require("../../assets/images/Masonry/BG5.jpg"),
  BG6: require("../../assets/images/Masonry/BG6.jpg"),
  BG7: require("../../assets/images/Masonry/BG7.jpg"),
  BG8: require("../../assets/images/Masonry/BG8.jpg"),
};

function MasonryHover() {
  const containerRefs = useRef([]);
  const moduleRefs = useRef([]);
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimer = useRef(null);
  const isMobile = useRef(window.innerWidth <= 700);

  useEffect(() => {
    // Handle window resize
    const handleResize = () => {
      isMobile.current = window.innerWidth <= 700;
    };

    // Handle scroll events
    const handleScroll = () => {
      if (isMobile.current) {
        setIsScrolling(true);

        // Clear the existing timer
        if (scrollTimer.current) {
          clearTimeout(scrollTimer.current);
        }

        // Set a new timer
        scrollTimer.current = setTimeout(() => {
          setIsScrolling(false);
        }, 150); // Adjust this value to control how long after scrolling stops before showing the module again
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    if (typeof gsap !== "undefined") {
      let activeModule;

      containerRefs.current.forEach((container, index) => {
        const module = moduleRefs.current[index];

        gsap.set(module, {
          yPercent: -50,
          xPercent: -50,
          position: "fixed",
          top: 0,
          left: 0,
          opacity: 0,
          visibility: "hidden",
          pointerEvents: "none",
          zIndex: 9,
        });

        let setX, setY;

        const align = (e) => {
          if (!isScrolling || !isMobile.current) {
            setX(e.clientX);
            setY(e.clientY);
          }
        };

        const startFollow = () => document.addEventListener("mousemove", align);
        const stopFollow = () =>
          document.removeEventListener("mousemove", align);

        const fade = gsap.to(module, {
          autoAlpha: 1,
          ease: "none",
          paused: true,
          onReverseComplete: stopFollow,
        });

        container.addEventListener("mouseenter", (e) => {
          if (!isScrolling || !isMobile.current) {
            fade.play();
            startFollow();
            if (activeModule) {
              gsap.set(module, {
                x: gsap.getProperty(activeModule, "x"),
                y: gsap.getProperty(activeModule, "y"),
              });
            }
            activeModule = module;
            setX = gsap.quickTo(module, "x", { duration: 0.6, ease: "power3" });
            setY = gsap.quickTo(module, "y", { duration: 0.6, ease: "power3" });
            align(e);
          }
        });

        container.addEventListener("mouseleave", () => fade.reverse());
      });
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimer.current) {
        clearTimeout(scrollTimer.current);
      }
      containerRefs.current.forEach((container) => {
        container.removeEventListener("mouseenter", () => {});
        container.removeEventListener("mouseleave", () => {});
      });
      document.removeEventListener("mousemove", () => {});
    };
  }, [isScrolling]);

  // Image data array
  const images = [
    {
      className: "img-1",
      image: IMAGE_PATHS.BG1,
      title: "Open Mic",
      description:
        "The Open Mic organized by Entrepreneurship Cell provides a dynamic platform for budding entrepreneurs to share their innovative ideas, showcase talents, and inspire peers. This event fosters creativity and confidence, enabling participants to voice their entrepreneurial journey. By encouraging networking and idea exchange, Open Mic reinforces the E-Cell's commitment to nurturing the next generation of leaders and innovators within a supportive and collaborative environment.",
    },
    {
      className: "img-2",
      image: IMAGE_PATHS.BG2,
      title: "Speaker Sessions",
      description:
        "Speaker Sessions, one of our most impactful initiatives, connects successful entrepreneurs with ambitious students through carefully curated interactive discussions. Drawing industry leaders from diverse sectors, these sessions have become a cornerstone of entrepreneurial learning on campus. Business veterans share their journeys, industry insights, and practical wisdom, helping students understand real-world challenges. The consistently growing attendance and positive feedback reflect the program's remarkable success in nurturing future entrepreneurs.",
    },
    {
      className: "img-3",
      image: IMAGE_PATHS.BG3,
      title: "E-Summit",
      description:
        "E-Summit stands as one of the most impactful events in the history of our E-Cell, recognized as one of the top entrepreneurship events hosted by any university in MP. The event was designed to inspire students to share their innovative ideas and gain valuable insights from seasoned professionals. By learning from the experiences of industry experts, participants were encouraged to apply these lessons, fueling their growth and entrepreneurial success.",
    },
    {
      className: "img-4",
      image: IMAGE_PATHS.BG4,
      title: "Startup Showcase",
      description:
        "Startup Showcase is a platform where young innovators present their ventures and ideas to a diverse audience of investors, industry experts, and peers. This event provides a unique opportunity for budding entrepreneurs to gain valuable feedback, attract potential investors, and build networks that can accelerate their growth. STARTUP SHOWCASE promotes entrepreneurial excellence by celebrating innovation and inspiring the next wave of startup leaders.",
    },
    {
      className: "img-5",
      image: IMAGE_PATHS.BG5,
      title: "One Dollar Venture",
      description:
        "One Dollar Venture consisted of several size-of-4 teams. The teams were supposed to ideate and implement a business plan with a maximum capital of INR 100. After a span of 3 days, they presented their business plan along with their final earnings. The team with maximum profit, adequate proof, and sustainable business plan was awarded. The final earning of the winning team was of INR 4200, which was an outcome of creating, selling websites and animated advertisement videos to local business owners.",
    },
    {
      className: "img-6",
      image: IMAGE_PATHS.BG6,
      title: "Saarthi",
      description:
        "Saarthi is an inspiring speaker session where influential leaders from various fields share their empowering journeys. Participants get the opportunity to dive into topics like Entrepreneurship, Finance, Banking, and more, gaining valuable insights from industry experts. This session is designed to motivate and equip aspiring entrepreneurs with practical knowledge and real-world experiences, helping them navigate their own career paths and entrepreneurial ventures with confidence.",
    },
    {
      className: "img-7",
      image: IMAGE_PATHS.BG7,
      title: "Fire Side Chat",
      description:
        "Fireside Chat is an intimate and engaging event where seasoned entrepreneurs share their personal journeys, offering deep insights into the world of entrepreneurship. Through candid conversations, participants gain valuable knowledge about the challenges faced, lessons learned, and key strategies for achieving success. This event provides a unique opportunity to explore the realities of entrepreneurship, inspiring future leaders to navigate their own paths with confidence and resilience.",
    },
    {
      className: "img-8",
      image: IMAGE_PATHS.BG8,
      title: "Shark Tank",
      description:
        "Shark Tank is an exciting competition where aspiring entrepreneurs pitch their innovative business ideas to a panel of investors, or 'sharks', seeking funding and mentorship. Participants showcase their products or services, demonstrating the potential for growth and impact. This high-stakes event offers real-world experience in securing investment, while also providing valuable feedback and networking opportunities. Shark Tank fosters entrepreneurial drive, helping turn visionary ideas into successful ventures.",
    },
  ];

  const initiativeDetails = [{}];

  return (
    <div className="wrapper2">
      {images.map((image, index) => (
        <div
          key={index}
          ref={(el) => (containerRefs.current[index] = el)}
          className={image.className}
        >
          <div className="initiative-display-container">
            <h1 className="initiative-display-title">{image.title}</h1>
          </div>
          <div
            ref={(el) => (moduleRefs.current[index] = el)}
            style={{
              opacity: isScrolling && isMobile.current ? 0 : undefined,
              transition: "opacity 0.3s ease",
            }}
          >
            <ImageModule
              imagePath={image.image}
              className={image.className}
              initiativeTitle={image.title}
              initiativeDescription={image.description}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default MasonryHover;
