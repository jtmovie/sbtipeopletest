'use client';

import { motion } from 'framer-motion';
import { RawResult } from '@/lib/types';
import { dimensionMeta, DIM_EXPLANATIONS } from '@/lib/data';

const GROUPS = [
  { label: '自我模型', keys: ['S1', 'S2', 'S3'] },
  { label: '情感模型', keys: ['E1', 'E2', 'E3'] },
  { label: '态度模型', keys: ['A1', 'A2', 'A3'] },
  { label: '行动驱力模型', keys: ['Ac1', 'Ac2', 'Ac3'] },
  { label: '社交模型', keys: ['So1', 'So2', 'So3'] },
];

const LEVEL_COLOR: Record<string, string> = {
  L: 'bg-gray-200',
  M: 'bg-gray-400',
  H: 'bg-gray-900',
};

export default function DimList({ result }: { result: RawResult }) {
  return (
    <div className="space-y-8">
      <h2 className="text-lg font-bold text-gray-900 text-center">十五维度解析</h2>

      {GROUPS.map((group, gi) => (
        <div key={group.label} className="space-y-3">
          <p className="text-xs font-medium text-gray-400 uppercase tracking-widest">
            {group.label}
          </p>
          {group.keys.map((dim, i) => {
            const level = result.levels[dim];
            const score = result.rawScores[dim];
            const explanation = DIM_EXPLANATIONS[dim][level];
            const delay = gi * 0.1 + i * 0.05 + 0.6;

            return (
              <motion.div
                key={dim}
                className="bg-white rounded-xl p-4 border border-gray-100"
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay }}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-sm font-medium text-gray-800">
                    {dimensionMeta[dim].name}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full text-white ${LEVEL_COLOR[level]}`}>
                      {level}
                    </span>
                    <span className="text-xs text-gray-400">{score}分</span>
                  </div>
                </div>
                <div className="h-1 bg-gray-100 rounded-full overflow-hidden mb-2">
                  <div
                    className={`h-full rounded-full ${LEVEL_COLOR[level]}`}
                    style={{ width: `${(score / 6) * 100}%`, transition: 'width 0.6s ease' }}
                  />
                </div>
                <p className="text-xs text-gray-500 leading-relaxed">{explanation}</p>
              </motion.div>
            );
          })}
        </div>
      ))}
    </div>
  );
}
