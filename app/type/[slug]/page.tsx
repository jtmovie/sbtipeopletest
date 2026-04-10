import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import { constructMetadata } from '@/lib/metadata';
import { getBreadcrumbJsonLd } from '@/lib/structured-data';
import { getAllTypeEntries, getRelatedTypes, getTypeEntryBySlug } from '@/lib/type-catalog';

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return getAllTypeEntries().map((type) => ({
    slug: type.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const type = getTypeEntryBySlug(slug);

  if (!type) {
    return constructMetadata({
      title: '人格类型不存在',
      path: `/type/${slug}`,
      noIndex: true,
    });
  }

  return constructMetadata({
    title: `SBTI ${type.code} ${type.cn} 人格解析`,
    description: `查看 SBTI ${type.code}（${type.cn}）人格的结果解释、气质特征和相关类型入口。`,
    path: `/type/${type.slug}`,
    keywords: [
      `SBTI ${type.code}`,
      `SBTI ${type.cn}`,
      `${type.code}人格`,
      `${type.cn}人格`,
      'SBTI结果',
    ],
  });
}

export default async function TypeDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const type = getTypeEntryBySlug(slug);

  if (!type) {
    notFound();
  }

  const relatedTypes = getRelatedTypes(type.code);
  const breadcrumb = getBreadcrumbJsonLd([
    { name: '首页', path: '/' },
    { name: '人格类型', path: '/results' },
    { name: type.code, path: `/type/${type.slug}` },
  ]);

  return (
    <main className="px-6 py-16 max-w-4xl mx-auto">
      <JsonLd data={breadcrumb} />
      <Breadcrumbs
        items={[
          { name: '首页', href: '/' },
          { name: '人格类型', href: '/results' },
          { name: type.code },
        ]}
      />

      <header className="mt-8 rounded-[2rem] border border-gray-200 bg-white p-8 md:p-10">
        <p className="text-xs font-medium uppercase tracking-[0.24em] text-gray-400">
          {type.hidden ? '隐藏人格档案' : '人格档案'}
        </p>
        <div className="mt-4 flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
              {type.code}
            </h1>
            <p className="mt-2 text-xl text-gray-500">{type.cn}</p>
            <p className="mt-4 text-lg leading-8 text-gray-700">{type.intro}</p>
          </div>
          <div className="rounded-3xl bg-gray-50 px-5 py-4 text-sm text-gray-600">
            <p>类型代号：{type.code}</p>
            <p className="mt-2">类型名称：{type.cn}</p>
            <p className="mt-2">
              分类：{type.hidden ? '隐藏人格或特殊结果' : '常规人格'}
            </p>
          </div>
        </div>
      </header>

      <section className="mt-10 grid gap-6 md:grid-cols-[1.6fr_0.9fr]">
        <article className="rounded-[2rem] border border-gray-200 bg-white p-8">
          <h2 className="text-2xl font-bold text-gray-900">这个结果大概是什么意思</h2>
          <p className="mt-5 text-base leading-8 text-gray-700">{type.desc}</p>
          <p className="mt-5 text-base leading-8 text-gray-600">
            如果你是在搜索这个人格结果，通常意味着你已经在测试里测到了这个类型，或者你正在比较不同人格之间的差异。SBTI
            的玩法更偏网络语境和趣味观察，它不是标准心理诊断工具，更适合拿来做社交传播、结果分享和自我调侃。
          </p>
          <p className="mt-5 text-base leading-8 text-gray-600">
            对于常规人格，你可以把它理解成十五个维度综合后的一个结果标签。对于隐藏人格，比如 HHHH 或 DRUNK，它更像系统给出的特殊判定。
          </p>
        </article>

        <aside className="rounded-[2rem] border border-gray-200 bg-gray-50 p-8">
          <h2 className="text-xl font-bold text-gray-900">下一步怎么用</h2>
          <p className="mt-4 text-sm leading-7 text-gray-600">
            如果你只是路过这页，建议先做一次完整测试，再回来看这个人格档案，会更容易理解结果为什么会落在这里。
          </p>
          <div className="mt-6 space-y-3">
            <Link
              href="/test"
              className="block rounded-2xl bg-gray-900 px-4 py-3 text-center text-sm font-semibold text-white"
            >
              去做测试
            </Link>
            <Link
              href="/results"
              className="block rounded-2xl border border-gray-300 px-4 py-3 text-center text-sm font-semibold text-gray-700"
            >
              查看全部人格
            </Link>
          </div>
        </aside>
      </section>
      <section className="mt-10 rounded-[2rem] border border-gray-200 bg-white p-8">
        <h2 className="text-2xl font-bold text-gray-900">你也可以顺手看看这些人格</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {relatedTypes.map((relatedType) => (
            <Link
              key={relatedType.code}
              href={`/type/${relatedType.slug}`}
              className="rounded-3xl border border-gray-200 p-5 transition-colors hover:border-gray-900"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-gray-400">
                {relatedType.hidden ? '隐藏人格' : '常规人格'}
              </p>
              <h3 className="mt-3 text-xl font-bold text-gray-900">{relatedType.code}</h3>
              <p className="mt-1 text-sm text-gray-500">{relatedType.cn}</p>
              <p className="mt-4 text-sm leading-7 text-gray-600">{relatedType.intro}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
