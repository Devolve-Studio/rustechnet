'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import CeoQuote from './CeoQuote';

type Segment = {
    text: string;
    bold?: boolean;
};

type CeoBlockProps = {
    image: string;
    quote: Segment[];
    writer: Segment[];
    position: Segment[];
    reverse?: boolean;
};

export default function CeoBlock({
                                     image,
                                     quote,
                                     writer,
                                     position,
                                     reverse = false,
                                 }: CeoBlockProps) {
    return (
        <section
            className={`flex flex-col md:flex-row ${
                reverse ? 'md:flex-row-reverse' : ''
            } items-center md:items-start gap-3 px-4 md:px-6 py-6 max-w-6xl mx-auto`}
        >
            {/* Image block — aligned top and static width */}
            <motion.div
                initial={{ opacity: 0, x: reverse ? 100 : -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                viewport={{ once: true }}
                className="w-full md:w-[200px] flex-shrink-0 flex justify-center md:justify-start"
            >
                <Image
                    src={image}
                    alt="CEO"
                    width={200}
                    height={200}
                    draggable={false}
                    className="w-[200px] h-auto object-cover rounded-lg -mt-20 pb-10 pointer-cursor-default select-none"
                />
            </motion.div>

            {/* Quote block */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
                viewport={{ once: true }}
                className="flex-1 mt-10"
            >
                <TypeIn>
                    <CeoQuote quote={quote} writer={writer} position={position} />
                </TypeIn>
            </motion.div>
        </section>
    );
}

const TypeIn = ({ children }: { children: React.ReactNode }) => {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
                hidden: { opacity: 0 },
                visible: {
                    opacity: 1,
                    transition: {
                        staggerChildren: 0.03,
                    },
                },
            }}
            className="space-y-2"
        >
            {children}
        </motion.div>
    );
};
