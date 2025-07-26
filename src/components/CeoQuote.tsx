'use client';

// TypeWriter Component needed for the quote

import { useState } from 'react';
import { motion } from 'framer-motion';
import TypewriterText from './TypewriterText';
import { Quote } from 'lucide-react';

type Segment = {
  text: string;
  bold?: boolean;
};

type CeoQuoteProps = {
  quote: Segment[];
  writer: Segment[];
  position: Segment[];
};

export default function CeoQuote({ quote, writer, position }: CeoQuoteProps) {
  const [quoteFinished, setQuoteFinished] = useState(false);

  return (
      <motion.blockquote
          className="italic !font-light -mt-10 md:-mt-20 ml-0 md:ml-40 text-black text-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <motion.span
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="inline-block"
        >
          <Quote className="scale-x-[-1]" size={50} />
        </motion.span>

        <TypewriterText
            segments={quote}
            speed={30}
            initialDelay={0}
            className="inline"
            onComplete={() => setQuoteFinished(true)} // Triggers when quote finishes
        />

        <motion.span
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2, ease: 'easeOut' }}
            className="inline-block ml-2"
        >
          {/*<Quote size={50} />*/}
        </motion.span>

        {/* Name and Title appear only after the quote finishes */}
        {quoteFinished && (
            <motion.div
                className="mt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5, ease: 'easeOut' }}
            >
              <TypewriterText segments={writer} speed={30} initialDelay={500} />
              <br />
              <TypewriterText segments={position} speed={30} initialDelay={500} />
            </motion.div>
        )}
      </motion.blockquote>
  );
}