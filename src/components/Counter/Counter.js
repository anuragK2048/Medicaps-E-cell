import React, { useState, useEffect, useRef } from "react";
import "./Counter.css";

const AnimatedCounter = () => {
  const [eventsCount, setEventsCount] = useState(0);
  const [participantsCount, setParticipantsCount] = useState(0);
  const [entrepreneursCount, setEntrepreneursCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const observer = useRef(null);
  const counterRef = useRef(null);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          startCounting();
          observer.current.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.current.observe(counterRef.current);
    }

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, []);

  const startCounting = () => {
    const duration = 2000;
    const steps = 60;
    const stepTime = duration / steps;

    const eventsTarget = 50;
    const participantsTarget = 5000;
    const entrepreneursTarget = 200;

    let step = 0;

    const timer = setInterval(() => {
      step++;
      setEventsCount(Math.round((eventsTarget / steps) * step));
      setParticipantsCount(Math.round((participantsTarget / steps) * step));
      setEntrepreneursCount(Math.round((entrepreneursTarget / steps) * step));

      if (step >= steps) {
        clearInterval(timer);
      }
    }, stepTime);
  };

  return (
    <div
      className={`animated-counter ${isVisible ? "visible" : ""}`}
      ref={counterRef}
    >
      <div className="counter-item">
        <div className="icon events-icon"></div>
        <h3>{eventsCount}</h3>
        <p>EVENTS ORGANISED</p>
      </div>
      <div className="counter-item">
        <div className="icon participants-icon"></div>
        <h3>{participantsCount}</h3>
        <p>TOTAL PARTICIPANTS</p>
      </div>
      <div className="counter-item">
        <div className="icon entrepreneurs-icon"></div>
        <h3>{entrepreneursCount}</h3>
        <p>ENTREPRENEURS SUPPORTED</p>
      </div>
    </div>
  );
};

export default AnimatedCounter;
