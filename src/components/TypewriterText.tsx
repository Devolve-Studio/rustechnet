'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

type Segment = {
  text: string;
  bold?: boolean;
};

type TypewriterTextProps = {
  segments?: Segment[];
  speed?: number;
  initialDelay?: number;
  className?: string;
  onComplete?: () => void;
};

export default function TypewriterText({
                                         segments = [],
                                         speed = 50,
                                         initialDelay = 0,
                                         className = '',
                                         onComplete,
                                       }: TypewriterTextProps) {
  const totalLength = segments.reduce(
      (sum, segment) => sum + (segment.text ? segment.text.length : 0),
      0,
  );
  const [currentCharCount, setCurrentCharCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isInView && currentCharCount < totalLength) {
      const delay = currentCharCount === 0 ? initialDelay : speed;
      timer = setTimeout(() => {
        setCurrentCharCount(prev => prev + 1);
      }, delay);
    } else if (currentCharCount === totalLength && onComplete) {
      onComplete();
    }

    return () => clearTimeout(timer);
  }, [isInView, currentCharCount, totalLength, speed, initialDelay, onComplete]);

  let remaining = currentCharCount;
  const renderedSegments = segments.map((segment, segmentIndex) => {
    const segText = segment.text || '';
    const charsToShow = Math.min(remaining, segText.length);
    const visibleChars = segText.slice(0, charsToShow).split('');
    remaining -= charsToShow;

    return (
        <span
            key={segmentIndex}
            className={segment.bold ? 'font-bold' : ''}
        >
        {visibleChars.map((char, charIndex) => (
            <motion.span
                key={charIndex}
                initial={{ opacity: 0, y: 2 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.15,
                  delay: (segmentIndex + charIndex) * 0.01,
                }}
            >
              {char}
            </motion.span>
        ))}
      </span>
    );
  });

  return (
      <span ref={ref} className={className}>
      {renderedSegments}
        {currentCharCount < totalLength && isInView && (
            <span className="border-r-2 border-black animate-blink ml-1"></span>
        )}
    </span>
  );
}