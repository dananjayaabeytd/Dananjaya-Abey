'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader } from '@/components/loader';
import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { About } from '@/components/about';
import { Projects } from '@/components/projects';
import { Skills } from '@/components/skills';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';
import { Education } from '@/components/education';
import { Experience } from '@/components/experience';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode='wait'>
      {isLoading ? (
        <Loader key='loader' />
      ) : (
        <motion.div
          key='content'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className='min-h-screen bg-background'
        >
          <Header />
          <main>
            <Hero />
            <About />
            <section id='experience' className='py-20 bg-muted/40'>
              <div className='container mx-auto px-6'>
                <h2 className='text-3xl md:text-4xl font-bold text-center mb-12'>
                  Experience
                </h2>
                <Experience />
              </div>
            </section>
            <Projects />
            <section id='education' className='py-20 bg-muted/30'>
              <div className='container mx-auto px-6'>
                <h2 className='text-3xl md:text-4xl font-bold text-center mb-12'>
                  Education
                </h2>
                <Education />
              </div>
            </section>
            <Skills />
            <Contact />
          </main>
          <Footer />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
