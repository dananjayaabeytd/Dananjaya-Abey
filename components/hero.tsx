'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let points: { x: number; y: number; vx: number; vy: number }[] = [];
    const POINTS = 40;
    for (let i = 0; i < POINTS; i++) {
      points.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.7,
        vy: (Math.random() - 0.5) * 0.7,
      });
    }
    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      for (let i = 0; i < POINTS; i++) {
        let p = points[i];
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = '#4FC0D0';
        ctx.fill();
        for (let j = i + 1; j < POINTS; j++) {
          let q = points[j];
          let dx = p.x - q.x;
          let dy = p.y - q.y;
          let dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = 'rgba(79,192,208,' + (1 - dist / 120) + ')';
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }
    }
    function animate() {
      for (let i = 0; i < POINTS; i++) {
        let p = points[i];
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;
      }
      draw();
      requestAnimationFrame(animate);
    }
    animate();
    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });
    return () => {
      // Clean up
    };
  }, []);

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id='home'
      className='min-h-screen flex items-center justify-center pt-20 relative overflow-hidden'
    >
      <canvas
        ref={canvasRef}
        className='absolute inset-0 w-full h-full pointer-events-none'
      />
      <div className='container mx-auto px-6 text-center relative z-10'>
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
