import { sbtiFaqs } from '@/lib/content';

export default function FAQList() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {sbtiFaqs.map((item) => (
        <article
          key={item.question}
          className="rounded-[2rem] border border-gray-200 bg-white p-7"
        >
          <h2 className="text-lg font-bold text-gray-900">{item.question}</h2>
          <p className="mt-3 text-sm leading-7 text-gray-600">{item.answer}</p>
        </article>
      ))}
    </div>
  );
}
