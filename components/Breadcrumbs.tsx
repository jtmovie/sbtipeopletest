import Link from 'next/link';

type BreadcrumbItem = {
  name: string;
  href?: string;
};

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav className="text-sm text-gray-400">
      {items.map((item, index) => (
        <span key={`${item.name}-${index}`}>
          {item.href ? (
            <Link href={item.href} className="hover:text-gray-700">
              {item.name}
            </Link>
          ) : (
            <span>{item.name}</span>
          )}
          {index < items.length - 1 ? <span className="mx-2">/</span> : null}
        </span>
      ))}
    </nav>
  );
}
