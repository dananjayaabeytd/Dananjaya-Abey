'use client';

import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import Image from 'next/image';

export function Loader() {
  const { theme } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className='fixed inset-0 z-50 flex items-center justify-center bg-background backdrop-blur-md'
    >
      {/* Simple Loader Animation */}
      <motion.div
        className='flex flex-col items-center justify-center'
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      >
        <motion.div
          className='flex items-center justify-center mb-8'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {[0, 1, 2].map(i => (
            <motion.div
              key={i}
              className='w-4 h-4 mx-2 rounded-full bg-primary'
              animate={{ y: [0, -16, 0], opacity: [1, 0.5, 1] }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </motion.div>
        <motion.h1
          className='text-2xl font-bold mb-2 text-center'
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Loading...
        </motion.h1>
      </motion.div>
    </motion.div>
  );
}
