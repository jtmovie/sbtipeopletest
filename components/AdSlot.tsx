type AdSlotProps = {
  id: string;
  label?: string;
};

const googleAdsClient = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;

export default function AdSlot({ id, label = 'Google 广告位预留' }: AdSlotProps) {
  return (
    <div
      data-ad-slot={id}
      className="rounded-[2rem] border border-dashed border-gray-300 bg-white/70 px-6 py-8 text-center"
    >
      <p className="text-xs font-medium uppercase tracking-[0.24em] text-gray-400">
        {label}
      </p>
      <p className="mt-3 text-sm leading-7 text-gray-600">
        {googleAdsClient
          ? '广告客户端已配置。这里适合放置低干扰的内容页广告单元。'
          : '当前为广告占位组件。后续接入 Google AdSense 时，建议只在内容页和人格详情页投放。'}
      </p>
    </div>
  );
}
