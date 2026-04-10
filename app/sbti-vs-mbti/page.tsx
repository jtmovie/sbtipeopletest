import Link from 'next/link';
import AdSlot from '@/components/AdSlot';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import { constructMetadata } from '@/lib/metadata';
import { getBreadcrumbJsonLd } from '@/lib/structured-data';

export const metadata = constructMetadata({
  title: 'SBTI 和 MBTI 的区别',
  description:
    '从表达方式、传播机制、结果命名和使用场景上，看 SBTI 和 MBTI 的主要区别。',
  path: '/sbti-vs-mbti',
  keywords: ['SBTI和MBTI区别', 'SBTI vs MBTI', 'MBTI平替'],
});

const compareRows = [
  ['定位', '娱乐型人格测试', '经典人格标签体系'],
  ['传播方式', '更适合社交媒体热梗传播', '更适合长期人格讨论'],
  ['结果命名', '更夸张、更内容化', '更标准、更框架化'],
  ['搜索路径', '结果词和热梗词更多', '基础认知词更多'],
];

export default function SbtiVsMbtiPage() {
  const breadcrumb = getBreadcrumbJsonLd([
    { name: '首页', path: '/' },
    { name: 'SBTI vs MBTI', path: '/sbti-vs-mbti' },
  ]);

  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <JsonLd data={breadcrumb} />
      <Breadcrumbs items={[{ name: '首页', href: '/' }, { name: 'SBTI vs MBTI' }]} />

      <section className="mt-8 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <article className="rounded-[2rem] border border-gray-200 bg-white p-8 md:p-10">
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-gray-400">
            Comparison
          </p>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
            SBTI 和 MBTI 的区别
          </h1>
          <div className="mt-6 space-y-5 text-base leading-8 text-gray-600">
            <p>
              如果把 MBTI 看成“经典人格标签体系”，那么 SBTI 更像“网络时代的人格内容产品”。两者都能引发讨论，但讨论氛围完全不同。
            </p>
            <p>
              MBTI 的优势是大家熟悉它的字母组合和框架感，SBTI 的优势则是结果名更容易被记住、截图更容易传播、人格描述更像段子和角色设定。
            </p>
            <p>
              这也是为什么很多人会把 SBTI 当成 MBTI 的内容化延伸，或者直接把它理解成“更抽象、更贴近中文社交媒体语感的平替”。
            </p>
          </div>
        </article>

        <aside className="rounded-[2rem] border border-gray-200 bg-gray-900 p-8 text-white">
          <h2 className="text-2xl font-bold">适合谁先看这一页</h2>
          <p className="mt-4 text-sm leading-7 text-gray-300">
            如果你是从 “SBTI 和 MBTI 到底差在哪” 这种问题搜进来的，这页就是给你的。看完以后再决定是否去测，会更容易理解这套产品为什么能传播。
          </p>
          <Link
            href="/test"
            className="mt-6 inline-flex rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-gray-900"
          >
            去做测试
          </Link>
        </aside>
      </section>

      <section className="mt-8 rounded-[2rem] border border-gray-200 bg-white p-4 md:p-6">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-gray-200 text-sm text-gray-500">
                <th className="px-4 py-3">维度</th>
                <th className="px-4 py-3">SBTI</th>
                <th className="px-4 py-3">MBTI</th>
              </tr>
            </thead>
            <tbody>
              {compareRows.map((row) => (
                <tr key={row[0]} className="border-b border-gray-100 align-top">
                  <td className="px-4 py-4 text-sm font-semibold text-gray-900">{row[0]}</td>
                  <td className="px-4 py-4 text-sm leading-7 text-gray-600">{row[1]}</td>
                  <td className="px-4 py-4 text-sm leading-7 text-gray-600">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <div className="mt-8">
        <AdSlot id="sbti-vs-mbti-mid" />
      </div>
    </main>
  );
}
