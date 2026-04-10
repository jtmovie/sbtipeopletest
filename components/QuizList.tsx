'use client';

import { useState, useMemo, useCallback } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { questions, specialQuestions, DRUNK_TRIGGER_Q1_ID } from '@/lib/data';
import QuestionCard from './QuestionCard';

export default function QuizList({ onBack }: { onBack: () => void }) {
  const router = useRouter();
  const [answers, setAnswers] = useState<Record<string, number>>({});

  const visibleQuestions = useMemo(() => {
    const gate1Answer = answers[DRUNK_TRIGGER_Q1_ID];
    const showGate2 = gate1Answer === 3;
    return [
      ...questions,
      specialQuestions[0],
      ...(showGate2 ? [specialQuestions[1]] : []),
    ];
  }, [answers]);

  const total = visibleQuestions.length;
  const done = visibleQuestions.filter(q => answers[q.id] !== undefined).length;
  const progress = total > 0 ? (done / total) * 100 : 0;
  const complete = done === total && total > 0;

  const handleSelect = useCallback((qId: string, value: number) => {
    setAnswers(prev => {
      const next = { ...prev, [qId]: value };
      if (qId === DRUNK_TRIGGER_Q1_ID && value !== 3) {
        delete next[specialQuestions[1].id];
      }
      return next;
    });
  }, []);

  const handleSubmit = () => {
    const encoded = btoa(encodeURIComponent(JSON.stringify(answers)));
    router.push(`/result?data=${encoded}`);
  };

  return (
    <section className="min-h-screen px-4 py-10 max-w-[640px] mx-auto">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-[#FAFAFA] pb-4 mb-6">
        <div className="flex items-center justify-between mb-3">
          <button
            onClick={onBack}
            className="text-sm text-gray-400 hover:text-gray-600 transition-colors"
          >
            ← 返回
          </button>
          <span className="text-sm font-medium text-gray-500">{done} / {total}</span>
        </div>
        <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gray-900 rounded-full"
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      {/* Questions */}
      <div className="space-y-4">
        {visibleQuestions.map((q, i) => (
          <QuestionCard
            key={q.id}
            question={q}
            index={i}
            selected={answers[q.id]}
            onSelect={(v) => handleSelect(q.id, v)}
          />
        ))}
      </div>

      {/* Submit */}
      <div className="mt-8">
        <p className="text-xs text-gray-400 text-center mb-4 min-h-[20px]">
          {complete
            ? '都做完了。现在可以把你的电子魂魄交给结果页审判。'
            : '全选完才会放行。世界已经够乱了，起码把题做完整。'}
        </p>
        <button
          onClick={handleSubmit}
          disabled={!complete}
          className={`
            w-full py-4 rounded-2xl font-semibold text-base transition-all
            ${complete
              ? 'bg-gray-900 text-white hover:bg-gray-800 active:scale-[0.98]'
              : 'bg-gray-100 text-gray-300 cursor-not-allowed'
            }
          `}
        >
          提交测试
        </button>
      </div>
    </section>
  );
}
