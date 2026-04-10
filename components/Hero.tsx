'use client';

import { motion } from 'framer-motion';

export default function Hero({ onStart }: { onStart: () => void }) {
  return (
    <section className="min-h-[calc(100vh-88px)] flex flex-col justify-center px-6 py-16 max-w-[680px] mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.p
          className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          人格测试 · SBTI
        </motion.p>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight leading-tight mb-4">
          SBTI<br />人格测试
        </h1>

        <p className="text-gray-500 text-base leading-relaxed mb-4">
          进入测试前，先把脑内滤镜放一边。<br />
          这套题本来就不是来做正经人格报告的。
        </p>

        <p className="text-gray-400 text-sm leading-relaxed mb-10">
          共 30 道题目，约需 5 分钟。<br />
          全部答完才会显示你的真实人格画像。
        </p>

        <button
          onClick={onStart}
          className="w-full bg-gray-900 text-white font-semibold py-4 px-8 rounded-2xl text-base hover:bg-gray-800 active:scale-[0.98] transition-all"
        >
          开始测试
        </button>

        <p className="text-center text-xs text-gray-300 mt-6">
          原作者 B站 @蛆肉儿串儿
        </p>
      </motion.div>
    </section>
  );
}
