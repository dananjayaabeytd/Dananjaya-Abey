'use client';

import { motion } from 'framer-motion';

export function Experience() {
  const items = [
    {
      title: 'Software Engineering Intern',
      subtitle: 'HorizonStay',
      period: '2024 - Present',
    },
    {
      title: 'Open Source Contributor',
      subtitle: 'GitHub Projects',
      period: '2023 - Present',
    },
    // You can add more items here
  ];

  return (
    <div className='relative py-8'>
      {/* Timeline vertical line */}
      <div className='absolute left-1/2 top-0 w-1 h-full bg-primary/40 -translate-x-1/2 z-0' />

      <div className='flex flex-col gap-16 relative z-10'>
        {items.map((item, idx) => {
          const isLeft = idx % 2 === 0;

          return (
            <div
              key={item.title}
              className='flex items-center justify-between w-full'
            >
              {/* Left Side Card */}
              {isLeft ? (
                <>
                  <div className='w-1/2 flex justify-end pr-8'>
                    <motion.div
                      className='bg-white dark:bg-black p-6 rounded-lg shadow-md w-80 text-left'
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
                  <div className='w-0 flex flex-col items-center'>
                    <span className='block w-5 h-5 bg-primary rounded-full border-4 border-white dark:border-black z-10' />
                  </div>
                  <div className='w-1/2' />
                </>
              ) : (
                // Right Side Card
                <>
                  <div className='w-1/2' />
                  <div className='w-0 flex flex-col items-center'>
                    <span className='block w-5 h-5 bg-primary rounded-full border-4 border-white dark:border-black z-10' />
                  </div>
                  <div className='w-1/2 pl-8 flex justify-start'>
                    <motion.div
                      className='bg-white dark:bg-black p-6 rounded-lg shadow-md w-80 text-left'
                      initial={{ opacity: 0, x: 50 }}
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
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
