'use client';

import { motion } from 'framer-motion';

export function Education() {
  const items = [
    {
      title: "Bachelor's in Data Science",
      subtitle: 'University of Colombo',
      period: '2021 - Present',
    },
    // Add more education items here if needed
  ];

  return (
    <div className='relative py-8'>
      {/* Timeline vertical line */}
      <div className='absolute left-1/2 top-0 w-1 h-full bg-primary/40 -translate-x-1/2 z-0' />
      <div className='flex flex-col gap-12 relative z-10'>
        {items.map((item, idx) => (
          <div
            key={item.title}
            className='flex justify-start items-center relative'
          >
            <div className='w-1/2 pr-8 flex justify-end'>
              <motion.div
                className='bg-white dark:bg-black p-6 rounded-lg shadow-md w-80 text-right'
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
              >
                <h4 className='text-xl font-bold'>{item.title}</h4>
                <p className='text-muted-foreground'>
                  {item.subtitle} <br />
                  {item.period}
                </p>
              </motion.div>
            </div>
            {/* Timeline dot */}
            <div className='w-0 flex flex-col items-center'>
              <span className='block w-5 h-5 bg-primary rounded-full border-4 border-white dark:border-black z-10' />
            </div>
            <div className='w-1/2' />
          </div>
        ))}
      </div>
    </div>
  );
}
