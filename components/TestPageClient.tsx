'use client';

import { useState } from 'react';
import Hero from '@/components/Hero';
import QuizList from '@/components/QuizList';

export default function TestPageClient() {
  const [screen, setScreen] = useState<'hero' | 'test'>('hero');

  return (
    <>
      {screen === 'hero' && <Hero onStart={() => setScreen('test')} />}
      {screen === 'test' && <QuizList onBack={() => setScreen('hero')} />}
    </>
  );
}
