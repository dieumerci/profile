import React from 'react';
import { motion } from 'framer-motion';

/**
 * Scroll-triggered fade+slide reveal wrapper.
 * Uses framer-motion whileInView so no extra intersection observer library needed.
 */
export default function Reveal({
  children,
  delay = 0,
  direction = 'up',   // 'up' | 'left' | 'right' | 'none'
  duration = 0.55,
  className = '',
  once = true,
}) {
  const offsets = {
    up:    { y: 28, x: 0 },
    left:  { y: 0, x: -28 },
    right: { y: 0, x: 28 },
    none:  { y: 0, x: 0 },
  };

  const { x, y } = offsets[direction] ?? offsets.up;

  return (
    <motion.div
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, margin: '-60px' }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
