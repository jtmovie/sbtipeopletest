'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { RawResult } from '@/lib/types';
import { TYPE_IMAGES } from '@/lib/data';

export default function ResultCard({ result }: { result: RawResult }) {
  const { finalType, modeKicker, badge, sub, special, secondaryType } = result;
  const imageSrc = TYPE_IMAGES[finalType.code];

  return (
    <div className="space-y-8">
      {/* Mode kicker */}
      <motion.p
        className="text-xs font-medium text-gray-400 uppercase tracking-widest text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        {modeKicker}
      </motion.p>

      {/* Image */}
      {imageSrc && (
        <motion.div
          className="relative w-40 h-40 mx-auto rounded-2xl overflow-hidden bg-gray-50"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          <Image
            src={imageSrc}
            alt={finalType.cn}
            fill
            sizes="160px"
            className="object-cover"
          />
        </motion.div>
      )}

      {/* Type name */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <h1 className="text-4xl font-bold text-gray-900 tracking-tight mb-2">
          {finalType.code}
        </h1>
        <p className="text-xl text-gray-500">{finalType.cn}</p>
        <p className="text-base text-gray-400 mt-1 italic">
          &ldquo;{finalType.intro}&rdquo;
        </p>
      </motion.div>

      {/* Badge */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <span className="inline-block bg-gray-900 text-white text-sm font-medium px-4 py-2 rounded-full">
          {badge}
        </span>
        {special && secondaryType && (
          <p className="text-xs text-gray-400 mt-2">
            你的第一人格接近 {secondaryType.code}（{secondaryType.cn}）
          </p>
        )}
      </motion.div>

      {/* Sub */}
      <motion.p
        className="text-sm text-gray-500 leading-relaxed text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.45 }}
      >
        {sub}
      </motion.p>

      {/* Description */}
      <motion.div
        className="bg-white rounded-2xl p-6 border border-gray-100"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <p className="text-gray-700 leading-relaxed text-[15px]">
          {finalType.desc}
        </p>
      </motion.div>

      {/* Disclaimer */}
      <motion.p
        className="text-xs text-gray-300 text-center leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        {special
          ? '本测试仅供娱乐。隐藏人格和傻乐兜底都属于作者故意埋的损招，请勿把它当成医学、心理学、相学、命理学或灵异学依据。'
          : '本测试仅供娱乐，别拿它当诊断、面试、相亲、分手、招魂、算命或人生判决书。你可以笑，但别太当真。'}
      </motion.p>
    </div>
  );
}
