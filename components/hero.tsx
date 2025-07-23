'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export function Hero() {
  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id='home'
      className='min-h-screen flex items-center justify-center pt-20'
    >
      <div className='container mx-auto px-6 text-center'>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src='https://avatars.githubusercontent.com/u/155418943?v=4'
            alt='Dananjaya Abenayaka Avatar'
            width={200}
            height={200}
            className='rounded-full mx-auto mb-6'
          />
          <motion.h1
            className='text-4xl md:text-6xl lg:text-7xl font-bold mb-6'
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Hi, I'm{' '}
            <motion.span
              className='text-primary'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Dananjaya Abenayaka
            </motion.span>
          </motion.h1>

          <motion.p
            className='text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto'
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Undergraduate in Data Science, passionate about Software
            Engineering. Exploring machine learning, analytics, and building
            innovative solutions.
          </motion.p>

          <motion.div
            className='flex flex-col sm:flex-row gap-4 justify-center items-center mb-12'
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button size='lg' className='px-8 py-3'>
              View My Work
            </Button>
            <Button
              variant='outline'
              size='lg'
              className='px-8 py-3 bg-transparent'
            >
              Download CV
            </Button>
          </motion.div>

          <motion.div
            className='flex justify-center space-x-6 mb-12'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {[
              { icon: Github, href: '#', label: 'GitHub' },
              { icon: Linkedin, href: '#', label: 'LinkedIn' },
              { icon: Mail, href: '#', label: 'Email' },
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                className='p-3 rounded-full bg-muted hover:bg-muted/80 transition-colors'
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              >
                <social.icon className='h-6 w-6' />
              </motion.a>
            ))}
          </motion.div>

          <motion.button
            onClick={scrollToAbout}
            className='animate-bounce'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            whileHover={{ scale: 1.1 }}
          >
            <ArrowDown className='h-8 w-8 text-muted-foreground' />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
