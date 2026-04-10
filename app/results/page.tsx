import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import { constructMetadata } from '@/lib/metadata';
import { getBreadcrumbJsonLd } from '@/lib/structured-data';
import { getAllTypeEntries } from '@/lib/type-catalog';

export const metadata = constructMetadata({
  title: 'SBTI 人格类型总览',
  description:
    '查看 SBTI 人格测试中的全部人格类型，包括热门人格、隐藏人格和每个结果的简要说明。',
  path: '/results',
  keywords: ['SBTI人格类型', 'SBTI结果', 'SBTI人格大全'],
});

export default function ResultsPage() {
  const types = getAllTypeEntries();
  const breadcrumb = getBreadcrumbJsonLd([
    { name: '首页', path: '/' },
    { name: '人格类型总览', path: '/results' },
  ]);

  return (
    <main className="px-6 py-16 max-w-5xl mx-auto">
      <JsonLd data={breadcrumb} />
      <Breadcrumbs items={[{ name: '首页', href: '/' }, { name: '人格类型总览' }]} />
      <div className="max-w-3xl">
        <p className="text-xs font-medium text-gray-400 uppercase tracking-[0.24em] mb-4">
          Results Index
        </p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
          SBTI 人格类型总览
        </h1>
        <p className="mt-4 text-lg leading-8 text-gray-600">
          这里收录了当前版本的全部 SBTI 人格类型。你可以先看热门结果，再决定要不要直接去测，或者先读具体人格档案。
        </p>
      </div>
      <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {types.map((type) => (
          <Link
            key={type.code}
            href={`/type/${type.slug}`}
            className="rounded-3xl border border-gray-200 bg-white p-6 transition-transform hover:-translate-y-1 hover:border-gray-900"
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-gray-400">
                  {type.hidden ? '隐藏人格' : '常规人格'}
                </p>
                <h2 className="mt-3 text-2xl font-bold text-gray-900">{type.code}</h2>
                <p className="mt-1 text-sm text-gray-500">{type.cn}</p>
              </div>
              <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-600">
                查看详情
              </span>
            </div>
            <p className="mt-5 text-sm leading-7 text-gray-600">{type.intro}</p>
          </Link>
        ))}
      </div>

      <div className="mt-12 rounded-3xl bg-gray-900 px-6 py-8 text-white">
        <h2 className="text-2xl font-bold">想直接看你属于哪一类？</h2>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-gray-300">
          测试本体仍然是这个站点的核心转化入口。看完总览后，最好还是自己做完一轮题，再回来看结果页和人格档案。
        </p>
        <Link
          href="/test"
          className="mt-6 inline-flex rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-gray-900"
        >
          去做测试
        </Link>
      </div>
    </main>
  );
}
