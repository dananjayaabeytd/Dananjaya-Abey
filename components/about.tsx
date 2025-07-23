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

          <div className='flex flex-col gap-12'>
            <motion.div
              variants={itemVariants}
              className='grid grid-cols-1 md:grid-cols-4 gap-4'
            >
              {[
                {
                  title: 'Full Stack Developer',
                  icon: '💻',
                  description:
                    'Building robust web applications with modern technologies',
                },
                {
                  title: 'Graphic Designer',
                  icon: '🎨',
                  description: 'Creating visually stunning digital designs',
                },
                {
                  title: 'Video Editor',
                  icon: '🎥',
                  description: 'Crafting engaging visual storytelling',
                },
                {
                  title: 'ML/DL Enthusiast',
                  icon: '🤖',
                  description: 'Exploring AI and deep learning technologies',
                },
              ].map((role, index) => (
                <motion.div
                  key={role.title}
                  className='p-4 rounded-xl bg-background/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300'
                  whileHover={{
                    scale: 1.05,
                    boxShadow: '0 10px 30px -15px rgba(0, 0, 0, 0.3)',
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  drag
                  dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                  dragElastic={0.1}
                >
                  <div className='text-4xl mb-3'>{role.icon}</div>
                  <h3 className='text-lg font-semibold mb-2'>{role.title}</h3>
                  <p className='text-sm text-muted-foreground'>
                    {role.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              variants={itemVariants}
              className='space-y-6 max-w-3xl mx-auto'
            >
              <p className='text-lg text-muted-foreground leading-relaxed text-center'>
                I'm a versatile professional combining expertise in full-stack
                development, graphic design, and video editing. With over 5
                years of experience, I create compelling digital experiences
                that merge beautiful design with robust functionality.
              </p>

              <p className='text-lg text-muted-foreground leading-relaxed text-center'>
                My passion extends to artificial intelligence and deep learning,
                where I actively explore and implement cutting-edge machine
                learning solutions. When I'm not coding or designing, you can
                find me contributing to open-source projects or sharing
                knowledge through mentoring.
              </p>

              <div className='grid grid-cols-2 md:grid-cols-4 gap-4 pt-4'>
                {[
                  { label: 'Projects Completed', value: '25+' },
                  { label: 'Years Experience', value: '2+' },
                  { label: 'Tech Stacks', value: '5+' },
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
