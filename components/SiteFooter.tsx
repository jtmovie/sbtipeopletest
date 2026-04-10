import Link from 'next/link';
import { siteNavItems } from '@/lib/content';

export default function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-black/5">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <p className="text-lg font-semibold text-gray-900">SBTI 人格测试</p>
          <p className="mt-4 max-w-md text-sm leading-7 text-gray-600">
            这是一个偏网络语境的趣味人格测试站点。首页负责承接搜索，测试页负责转化，类型页和解释页负责承接更长尾的自然流量。
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gray-400">
            页面
          </p>
          <div className="mt-4 flex flex-col gap-3">
            {siteNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-gray-600 transition-colors hover:text-gray-900"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gray-400">
            说明
          </p>
          <div className="mt-4 space-y-3 text-sm leading-7 text-gray-600">
            <p>本测试仅供娱乐，不替代心理诊断。</p>
            <p>Google 广告位会优先放在内容页和类型页，不打断测试流程。</p>
            <p>原作者署名保留：B 站 @蛆肉儿串儿。</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
