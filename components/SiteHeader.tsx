import Link from 'next/link';
import { siteNavItems } from '@/lib/content';

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-black/5 bg-[rgba(250,250,250,0.82)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-gray-900 text-sm font-bold text-white">
            SB
          </span>
          <div>
            <p className="text-sm font-semibold text-gray-900">SBTI 人格测试</p>
            <p className="text-xs text-gray-500">趣味人格内容站</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {siteNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-gray-500 transition-colors hover:text-gray-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/test"
          className="inline-flex rounded-2xl bg-gray-900 px-4 py-2 text-sm font-semibold text-white"
        >
          去测试
        </Link>
      </div>
    </header>
  );
}
