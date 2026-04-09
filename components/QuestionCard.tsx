'use client';

import { motion } from 'framer-motion';
import { Question } from '@/lib/types';

export default function QuestionCard({
  question,
  index,
  selected,
  onSelect,
}: {
  question: Question;
  index: number;
  selected: number | undefined;
  onSelect: (value: number) => void;
}) {
  return (
    <motion.div
      key={question.id}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.03 }}
      className="bg-white rounded-2xl p-6 border border-gray-100"
    >
      <p className="text-gray-900 font-medium text-base leading-relaxed mb-5">
        {question.text}
      </p>

      <div className="space-y-2">
        {question.options.map((opt, i) => {
          const isSelected = selected === opt.value;
          return (
            <button
              key={i}
              onClick={() => onSelect(opt.value)}
              className={`
                w-full text-left px-4 py-3 rounded-xl text-sm transition-all duration-150 border
                ${isSelected
                  ? 'border-gray-900 bg-gray-900 text-white'
                  : 'border-gray-200 text-gray-600 hover:border-gray-300 hover:text-gray-900'
                }
              `}
            >
              <span className="mr-2 opacity-50">{String.fromCharCode(65 + i)}.</span>
              {opt.label}
            </button>
          );
        })}
      </div>
    </motion.div>
  );
}
