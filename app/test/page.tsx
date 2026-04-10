import { constructMetadata } from '@/lib/metadata';
import TestPageClient from '@/components/TestPageClient';

export const metadata = constructMetadata({
  title: '开始 SBTI 测试',
  description:
    '进入 SBTI 人格测试，完成题目后查看你的结果、十五维度解析和对应人格档案。',
  path: '/test',
  keywords: ['SBTI测试', 'SBTI开始测试', 'SBTI人格测试入口'],
});

export default function TestPage() {
  return <TestPageClient />;
}
