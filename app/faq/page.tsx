import Link from 'next/link';
import AdSlot from '@/components/AdSlot';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQList from '@/components/FAQList';
import JsonLd from '@/components/JsonLd';
import { constructMetadata } from '@/lib/metadata';
import { getBreadcrumbJsonLd, getFaqJsonLd } from '@/lib/structured-data';

export const metadata = constructMetadata({
  title: 'SBTI 常见问题',
  description:
    '查看 SBTI 人格测试 FAQ，包括 SBTI 是什么、结果怎么看、和 MBTI 的区别，以及使用场景说明。',
  path: '/faq',
  keywords: ['SBTI FAQ', 'SBTI常见问题', 'SBTI结果怎么看'],
});

export default function FaqPage() {
  const breadcrumb = getBreadcrumbJsonLd([
    { name: '首页', path: '/' },
    { name: 'FAQ', path: '/faq' },
  ]);

  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <JsonLd data={getFaqJsonLd()} />
      <JsonLd data={breadcrumb} />
      <Breadcrumbs items={[{ name: '首页', href: '/' }, { name: 'FAQ' }]} />

      <section className="mt-8 rounded-[2rem] border border-gray-200 bg-white p-8 md:p-10">
        <p className="text-xs font-medium uppercase tracking-[0.24em] text-gray-400">
          FAQ
        </p>
        <h1 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
          SBTI 常见问题
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-700">
          这页主要回答从搜索进来的高频问题。它本身也是一个内容承接页，适合挂 FAQ schema，也适合后续放低干扰广告位。
        </p>
      </section>

      <section className="mt-8">
        <FAQList />
      </section>

      <div className="mt-8">
        <AdSlot id="faq-mid" />
      </div>

      <section className="mt-8 rounded-[2rem] border border-gray-200 bg-gray-900 p-8 text-white">
        <h2 className="text-2xl font-bold">如果 FAQ 还不够</h2>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-300">
          最有效的理解方式仍然是自己做一次测试，然后结合结果页和人格详情页一起看。FAQ 解决认知问题，测试负责给你具体答案。
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/test"
            className="inline-flex justify-center rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-gray-900"
          >
            去做测试
          </Link>
          <Link
            href="/results"
            className="inline-flex justify-center rounded-2xl border border-white/20 px-5 py-3 text-sm font-semibold text-white"
          >
            查看人格总览
          </Link>
        </div>
      </section>
    </main>
  );
}
