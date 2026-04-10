import Link from 'next/link';
import AdSlot from '@/components/AdSlot';
import FAQList from '@/components/FAQList';
import { constructMetadata } from '@/lib/metadata';
import { getAllTypeEntries } from '@/lib/type-catalog';

export const metadata = constructMetadata({
  title: 'SBTI 人格测试入口',
  description:
    'SBTI 人格测试，一个偏网络热梗语境的趣味人格测试。先了解 SBTI 是什么，再去做测试、看结果和查人格档案。',
  path: '/',
});

const featuredCodes = ['CTRL', 'BOSS', 'JOKE-R', 'SOLO', 'MONK', 'DRUNK'];

export default function Home() {
  const featuredTypes = getAllTypeEntries().filter((type) =>
    featuredCodes.includes(type.code),
  );

  return (
    <main className="px-6 py-16 max-w-6xl mx-auto">
      <section className="max-w-4xl">
        <p className="text-xs font-medium text-gray-400 uppercase tracking-[0.24em] mb-5">
          SBTI Personality Test
        </p>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 leading-[0.95]">
          SBTI 人格测试
        </h1>
        <p className="mt-6 max-w-3xl text-lg md:text-xl leading-8 text-gray-600">
          这是一个偏抽象、偏网络语境、偏结果传播的趣味人格测试。这里的 SBTI
          指的是网络流行人格测试，不是气候领域的 Science Based Targets initiative。
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/test"
            className="inline-flex items-center justify-center rounded-2xl bg-gray-900 px-6 py-4 text-base font-semibold text-white"
          >
            开始测试
          </Link>
          <Link
            href="/results"
            className="inline-flex items-center justify-center rounded-2xl border border-gray-300 px-6 py-4 text-base font-semibold text-gray-700"
          >
            查看人格总览
          </Link>
        </div>
      </section>

      <section className="mt-16 grid gap-6 md:grid-cols-3">
        <div className="rounded-[2rem] border border-gray-200 bg-white p-7 md:col-span-2">
          <h2 className="text-2xl font-bold text-gray-900">SBTI 是什么</h2>
          <p className="mt-4 text-base leading-8 text-gray-600">
            可以把它理解成一个更贴近中文互联网语感的趣味人格测试。它保留了“测完拿结果、转发结果、讨论人格”的传播结构，但表达方式更抽象、更段子化，也更适合做社交流转。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-600">
            如果你搜索的是 `SBTI人格测试`、`SBTI是什么` 或 `SBTI结果怎么看`，这个站的核心入口就是先测一次，再去看具体人格档案页。
          </p>
        </div>
        <div className="rounded-[2rem] border border-gray-200 bg-gray-50 p-7">
          <h2 className="text-2xl font-bold text-gray-900">和 MBTI 有什么区别</h2>
          <p className="mt-4 text-sm leading-7 text-gray-600">
            MBTI 更像经典人格标签，SBTI 更像网络热梗人格测试。前者强调熟悉的维度词，后者强调结果命名、传播性和社交讨论感。
          </p>
        </div>
      </section>

      <section className="mt-16 grid gap-6 lg:grid-cols-[1fr_0.9fr]">
        <div className="rounded-[2rem] border border-gray-200 bg-white p-8">
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-gray-400">
            Search Intent
          </p>
          <h2 className="mt-3 text-3xl font-bold text-gray-900">
            这个站主要承接哪几类搜索
          </h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {[
              'SBTI人格测试',
              'SBTI是什么',
              'SBTI结果怎么看',
              'SBTI和MBTI区别',
              'SBTI人格类型',
              '搞笑人格测试',
            ].map((keyword) => (
              <div
                key={keyword}
                className="rounded-2xl border border-gray-200 px-4 py-3 text-sm text-gray-600"
              >
                {keyword}
              </div>
            ))}
          </div>
        </div>
        <AdSlot id="home-lower" label="首页下半区广告位预留" />
      </section>

      <section className="mt-16">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-gray-400">
              Featured Types
            </p>
            <h2 className="mt-3 text-3xl font-bold text-gray-900">先看看热门人格长什么样</h2>
          </div>
          <Link href="/results" className="text-sm font-medium text-gray-500 hover:text-gray-900">
            全部类型 →
          </Link>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {featuredTypes.map((type) => (
            <Link
              key={type.code}
              href={`/type/${type.slug}`}
              className="rounded-[2rem] border border-gray-200 bg-white p-6 transition-transform hover:-translate-y-1 hover:border-gray-900"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-gray-400">{type.code}</p>
              <h3 className="mt-3 text-2xl font-bold text-gray-900">{type.cn}</h3>
              <p className="mt-4 text-sm leading-7 text-gray-600">{type.intro}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-16 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[2rem] border border-gray-200 bg-white p-8">
          <h2 className="text-2xl font-bold text-gray-900">测试前你需要知道什么</h2>
          <div className="mt-5 space-y-4 text-base leading-8 text-gray-600">
            <p>题目一共 30 道，另外有隐藏触发题，完整做完才会出结果。</p>
            <p>结果更适合拿来娱乐、讨论和分享，不适合作为心理诊断或现实决策依据。</p>
            <p>如果你是从搜索进来的，推荐顺序是：先测试，再看结果页，最后回到人格档案页细读。</p>
          </div>
        </div>
        <div className="rounded-[2rem] border border-gray-200 bg-gray-900 p-8 text-white">
          <h2 className="text-2xl font-bold">准备好了就去测</h2>
          <p className="mt-4 text-sm leading-7 text-gray-300">
            这个站最核心的页面仍然是测试页。首页负责承接搜索和解释，真正的结果在你答完题之后才会揭晓。
          </p>
          <Link
            href="/test"
            className="mt-6 inline-flex rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-gray-900"
          >
            进入测试
          </Link>
        </div>
      </section>

      <section className="mt-16 rounded-[2rem] border border-gray-200 bg-white p-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-gray-400">FAQ</p>
            <h2 className="mt-3 text-3xl font-bold text-gray-900">先把常见问题回答掉</h2>
          </div>
          <Link href="/faq" className="text-sm font-medium text-gray-500 hover:text-gray-900">
            查看完整 FAQ →
          </Link>
        </div>
        <div className="mt-6">
          <FAQList />
        </div>
      </section>

      <section className="mt-16 grid gap-6 md:grid-cols-3">
        <Link
          href="/what-is-sbti"
          className="rounded-[2rem] border border-gray-200 bg-white p-7 transition-colors hover:border-gray-900"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-gray-400">Guide</p>
          <h2 className="mt-3 text-2xl font-bold text-gray-900">SBTI 是什么</h2>
          <p className="mt-4 text-sm leading-7 text-gray-600">
            适合刚搜到这个词、还不确定它是什么的人。
          </p>
        </Link>
        <Link
          href="/sbti-vs-mbti"
          className="rounded-[2rem] border border-gray-200 bg-white p-7 transition-colors hover:border-gray-900"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-gray-400">Compare</p>
          <h2 className="mt-3 text-2xl font-bold text-gray-900">SBTI vs MBTI</h2>
          <p className="mt-4 text-sm leading-7 text-gray-600">
            适合想快速理解两者差别和传播逻辑的人。
          </p>
        </Link>
        <Link
          href="/faq"
          className="rounded-[2rem] border border-gray-200 bg-white p-7 transition-colors hover:border-gray-900"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-gray-400">Answer</p>
          <h2 className="mt-3 text-2xl font-bold text-gray-900">SBTI FAQ</h2>
          <p className="mt-4 text-sm leading-7 text-gray-600">
            适合已经看过结果，但还想继续追问细节的人。
          </p>
        </Link>
      </section>
    </main>
  );
}
