'use client';

import { useSearchParams } from 'next/navigation';
import { useMemo } from 'react';
import Link from 'next/link';
import { computeResult } from '@/lib/scoring';
import ResultCard from '@/components/ResultCard';
import DimList from '@/components/DimList';
import { getTypeEntryByCode } from '@/lib/type-catalog';

export default function ResultPageClient() {
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

  const typeEntry = getTypeEntryByCode(result.finalType.code);

  return (
    <div className="min-h-screen px-4 py-12 max-w-[640px] mx-auto">
      <ResultCard result={result} />

      <div className="mt-12">
        <DimList result={result} />
      </div>

      <div className="mt-12 space-y-3">
        {typeEntry ? (
          <Link
            href={`/type/${typeEntry.slug}`}
            className="block w-full py-4 text-center border border-gray-300 text-gray-800 font-semibold rounded-2xl hover:border-gray-900 transition-colors"
          >
            查看 {result.finalType.code} 人格档案
          </Link>
        ) : null}
        <Link
          href="/test"
          className="block w-full py-4 text-center bg-gray-900 text-white font-semibold rounded-2xl hover:bg-gray-800 transition-colors"
        >
          再测一次
        </Link>
        <Link
          href="/results"
          className="block w-full py-4 text-center text-gray-500 font-medium rounded-2xl hover:text-gray-900 transition-colors"
        >
          查看全部人格类型
        </Link>
        <p className="text-center text-xs text-gray-300">
          原作者 B站 @蛆肉儿串儿
        </p>
      </div>
    </div>
  );
}
