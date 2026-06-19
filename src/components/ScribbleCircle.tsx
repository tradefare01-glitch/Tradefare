import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScribbleCircleProps {
  className?: string;
  size?: number;
  strokeWidth?: number;
  triggerOnScroll?: boolean;
}

export default function ScribbleCircle({
  className = '',
  size = 200,
  strokeWidth = 3,
  triggerOnScroll = false,
}: ScribbleCircleProps) {
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (!pathRef.current) return;

    const path = pathRef.current;
    const length = path.getTotalLength();

    gsap.set(path, {
      strokeDasharray: length,
      strokeDashoffset: length,
    });

    if (triggerOnScroll) {
      gsap.to(path, {
        strokeDashoffset: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: path,
          start: 'top 80%',
          once: true,
        },
      });
    } else {
      gsap.to(path, {
        strokeDashoffset: 0,
        duration: 0.6,
        ease: 'power2.out',
        delay: 0.3,
      });
    }
  }, [triggerOnScroll]);

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      className={`pointer-events-none ${className}`}
    >
      <path
        ref={pathRef}
        d="M100 10
           C140 5, 185 35, 190 85
           C195 135, 165 185, 115 192
           C65 199, 15 165, 8 115
           C1 65, 35 15, 85 8
           C95 6, 98 8, 100 10Z"
        stroke="#111"
        strokeWidth={strokeWidth}
        fill="none"
        strokeLinecap="round"
        style={{
          filter: 'url(#wiggle)',
        }}
      />
      <defs>
        <filter id="wiggle">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.02"
            numOctaves="3"
            result="noise"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale="3"
          />
        </filter>
      </defs>
    </svg>
  );
}
