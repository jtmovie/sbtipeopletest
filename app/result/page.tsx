'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense, useMemo } from 'react';
import Link from 'next/link';
import { computeResult } from '@/lib/scoring';
import ResultCard from '@/components/ResultCard';
import DimList from '@/components/DimList';

function ResultContent() {
  const params = useSearchParams();
  const raw = params.get('data');

  const result = useMemo(() => {
    if (!raw) return null;
    try {
      const answers = JSON.parse(decodeURIComponent(atob(raw)));
      return computeResult(answers);
    } catch {
      return null;
    }
  }, [raw]);

  if (!result) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-6">
        <p className="text-gray-400 text-sm mb-6">无法解析结果数据</p>
        <Link
          href="/"
          className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
        >
          ← 返回首页
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-4 py-12 max-w-[640px] mx-auto">
      <ResultCard result={result} />

      <div className="mt-12">
        <DimList result={result} />
      </div>

      {/* Actions */}
      <div className="mt-12 space-y-3">
        <Link
          href="/"
          className="block w-full py-4 text-center bg-gray-900 text-white font-semibold rounded-2xl hover:bg-gray-800 transition-colors"
        >
          再测一次
        </Link>
        <p className="text-center text-xs text-gray-300">
          原作者 B站 @蛆肉儿串儿
        </p>
      </div>
    </div>
  );
}

export default function ResultPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <p className="text-gray-400 text-sm">加载中…</p>
        </div>
      }
    >
        <ResultContent />
      </Suspense>
  );
}
