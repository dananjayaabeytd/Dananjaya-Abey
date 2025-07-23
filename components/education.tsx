'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export function Education() {
  const items = [
    {
      title:
        'BSc (Hons) in Information Technology Specialising in Data Science',
      subtitle: 'Sri Lanka Institute of Information Technology',
      period: '2022 - Present',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/1/17/Google-flutter-logo.png',
      description:
        'An undergraduate degree focused on data science, machine learning, and software engineering blending theory with hands-on projects and modern technologies.',
    },
    {
      title: 'GCE Advanced Level – Physical Science Stream',
      subtitle: 'Mahinda Rajapaksa College, Homagama',
      period: '2019 - 2021',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/4/47/React.svg',
      description:
        'Achieved solid results in the Physical Science stream: Physics (B), Chemistry (C), and Combined Mathematics (C). Developed a strong analytical foundation and problem-solving mindset.',
    },
    {
      title: 'GCE Ordinary Level',
      subtitle: 'Mahinda Rajapaksa College, Homagama',
      period: '2017 - 2018',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/4/47/React.svg',
      description:
        'Excelled with **8 A’s and 1 B**, showcasing academic excellence across all core subjects. Built a strong base in science, mathematics, and general education.',
    },
  ];

  return (
    <div className='relative py-8'>
      {/* Timeline vertical line */}
      <div className='absolute left-1/2 top-0 w-1 h-full bg-primary/40 -translate-x-1/2 z-0' />

      <div className='flex flex-col gap-16 relative z-10'>
        {items.map((item, idx) => {
          const isLeft = idx % 2 === 0;

          return (
            <div key={idx} className='flex items-center justify-between w-full'>
              {isLeft ? (
                <>
                  {/* Left Side Card */}
                  <div className='w-1/2 pr-8 flex justify-end items-center gap-4'>
                    <motion.div
                      className='bg-white/60 dark:bg-black/60 backdrop-blur-md p-6 rounded-lg shadow-md w-[32rem] max-w-full text-right flex flex-col items-end gap-2 relative overflow-hidden'
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
                      <div className='text-sm text-gray-500 dark:text-gray-400 mt-2 text-right'>
                        {item.description}
                      </div>
                    </motion.div>
                  </div>
                  {/* Dot */}
                  <div className='w-0 flex flex-col items-center relative'>
                    <span className='block w-5 h-5 bg-primary rounded-full border-4 border-white dark:border-black z-10' />
                  </div>
                  <div className='w-1/2' />
                </>
              ) : (
                <>
                  <div className='w-1/2' />
                  <div className='w-0 flex flex-col items-center relative'>
                    <span className='block w-5 h-5 bg-primary rounded-full border-4 border-white dark:border-black z-10' />
                  </div>
                  {/* Right Side Card */}
                  <div className='w-1/2 pl-8 flex justify-start items-center gap-4'>
                    <motion.div
                      className='bg-white/60 dark:bg-black/60 backdrop-blur-md p-6 rounded-lg shadow-md w-[32rem] max-w-full text-left flex flex-col items-start gap-2 relative overflow-hidden'
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
                      <div className='text-sm text-gray-500 dark:text-gray-400 mt-2 text-left'>
                        {item.description}
                      </div>
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
