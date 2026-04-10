import { Suspense } from 'react';
import { constructMetadata } from '@/lib/metadata';
import ResultPageClient from '@/components/ResultPageClient';

export const metadata = constructMetadata({
  title: 'SBTI 测试结果',
  description: 'SBTI 测试结果页。该页面主要用于查看已生成的测试结果，不建议被搜索引擎收录。',
  path: '/result',
  noIndex: true,
});

function ResultContent() {
  return <ResultPageClient />;
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
