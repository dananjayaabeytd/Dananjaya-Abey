'use client';

import { motion } from 'framer-motion';

export function Experience() {
  const items = [
    {
      title: 'Trainee Software Engineer',
      subtitle: 'CodeGen International (Pvt) Ltd',
      period: 'Jan 2025 - Jul 2025',
      description:
        'Building and maintaining scalable applications with a focus on feature development, payment integration, and user experience. Involved in cloud deployment, continuous integration workflows, and data integration for intelligent systems. Actively engaged in researching advanced communication protocols for modern software architectures.',
    },
    {
      title: 'Codegen Industry Cell',
      subtitle: 'CodeGen International (Pvt) Ltd ',
      period: 'Jul 2924 - Dec 2024',
      description:
        'Collaborated with technical leads to develop scalable web applications and gained hands-on experience across the full software development lifecycle, from requirement analysis to deployment. Contributed to system design, testing, API documentation, caching strategies, and integrated an intelligent classification feature into the application.',
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
            <div
              key={item.title}
              className='flex items-center justify-between w-full'
            >
              {/* Left Side Card */}
              {isLeft ? (
                <>
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
                  <div className='w-0 flex flex-col items-center relative'>
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
