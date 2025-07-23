'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Education } from './education';
import { Experience } from './experience';

export function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id='about' className='py-20 bg-muted/30'>
      <div className='container mx-auto px-6'>
        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            className='text-3xl md:text-4xl font-bold text-center mb-12'
            variants={itemVariants}
          >
            About Me
          </motion.h2>

          <div className='grid md:grid-cols-2 gap-12 items-center'>
            <motion.div variants={itemVariants}>
              <Card className='overflow-hidden'>
                <CardContent className='p-0'>
                  <div className='aspect-square bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center'>
                    <div className='w-48 h-48 bg-muted rounded-full flex items-center justify-center text-6xl font-bold text-muted-foreground'>
                      JD
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants} className='space-y-6'>
              <p className='text-lg text-muted-foreground leading-relaxed'>
                I'm a passionate full-stack developer with over 5 years of
                experience creating digital experiences that combine beautiful
                design with robust functionality. I specialize in modern web
                technologies and love turning complex problems into simple,
                elegant solutions.
              </p>

              <p className='text-lg text-muted-foreground leading-relaxed'>
                When I'm not coding, you can find me exploring new technologies,
                contributing to open-source projects, or sharing my knowledge
                through blog posts and mentoring.
              </p>

              <div className='grid grid-cols-2 gap-4 pt-4'>
                {[
                  { label: 'Projects Completed', value: '50+' },
                  { label: 'Years Experience', value: '5+' },
                  { label: 'Happy Clients', value: '30+' },
                  { label: 'Technologies', value: '20+' },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className='text-center p-4 rounded-lg bg-background'
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className='text-2xl font-bold text-primary'>
                      {stat.value}
                    </div>
                    <div className='text-sm text-muted-foreground'>
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
