import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import { constructMetadata } from '@/lib/metadata';
import { getBreadcrumbJsonLd } from '@/lib/structured-data';

export const metadata = constructMetadata({
  title: 'SBTI 是什么',
  description:
    '了解 SBTI 人格测试是什么、为什么会在中文互联网传播，以及它和传统人格测试的区别。',
  path: '/what-is-sbti',
  keywords: ['SBTI是什么', 'SBTI人格测试', 'SBTI介绍'],
});

export default function WhatIsSbtiPage() {
  const breadcrumb = getBreadcrumbJsonLd([
    { name: '首页', path: '/' },
    { name: 'SBTI 是什么', path: '/what-is-sbti' },
  ]);

  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <JsonLd data={breadcrumb} />
      <Breadcrumbs items={[{ name: '首页', href: '/' }, { name: 'SBTI 是什么' }]} />

      <article className="mt-8 rounded-[2rem] border border-gray-200 bg-white p-8 md:p-10">
        <p className="text-xs font-medium uppercase tracking-[0.24em] text-gray-400">
          Explainer
        </p>
        <h1 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
          SBTI 是什么
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-700">
          SBTI 可以理解成一个更贴近中文互联网语感的趣味人格测试。它不是标准心理学量表，而是一套更强调结果命名、传播表达和社交讨论感的测试系统。
        </p>

        <div className="mt-8 space-y-6 text-base leading-8 text-gray-600">
          <p>
            很多人第一次搜 SBTI，是因为在社交媒体上看到了某个夸张的人格名称，或者看到别人发出了自己的结果截图。它能传播起来，不是因为它比传统人格测试更严肃，而是因为它更像内容产品。
          </p>
          <p>
            这套测试的吸引力主要来自三个层面：第一，结果命名非常强；第二，测试题本身带有明显的中文互联网语境；第三，测完以后天然适合继续搜索“我这个人格是什么意思”。
          </p>
          <p>
            如果你只是想知道这个词是什么意思，那么最简单的结论是：SBTI 是一个娱乐型人格测试热词。它的价值在传播和表达，不在心理诊断。
          </p>
        </div>
      </article>

      <section className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="rounded-[2rem] border border-gray-200 bg-white p-8">
          <h2 className="text-2xl font-bold text-gray-900">为什么会有人搜它</h2>
          <p className="mt-4 text-sm leading-7 text-gray-600">
            因为它兼具“测试”和“内容标签”两种属性。很多人不是先做测试，而是先搜结果名、先搜解释、先搜和 MBTI 的区别，再回头测试。
          </p>
        </div>
        <div className="rounded-[2rem] border border-gray-200 bg-gray-50 p-8">
          <h2 className="text-2xl font-bold text-gray-900">这里的 SBTI 不是哪个 SBTi</h2>
          <p className="mt-4 text-sm leading-7 text-gray-600">
            搜索时经常会和气候领域的 Science Based Targets initiative 缩写冲突，所以内容页里需要明确消歧。这个站指的是网络流行人格测试语境下的 SBTI。
          </p>
        </div>
      </section>

      <section className="mt-8 rounded-[2rem] border border-gray-200 bg-gray-900 p-8 text-white">
        <h2 className="text-2xl font-bold">下一步最合理的动作</h2>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-300">
          如果你是第一次接触这个词，建议直接做一次测试，再去看你对应的人格详情页；如果你已经测过，建议继续读对比页和 FAQ。
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/test"
            className="inline-flex justify-center rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-gray-900"
          >
            去做测试
          </Link>
          <Link
            href="/sbti-vs-mbti"
            className="inline-flex justify-center rounded-2xl border border-white/20 px-5 py-3 text-sm font-semibold text-white"
          >
            看 SBTI vs MBTI
          </Link>
        </div>
      </section>
    </main>
  );
}
