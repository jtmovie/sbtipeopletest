import { NORMAL_TYPES, TYPE_IMAGES, TYPE_LIBRARY } from './data';
import { TypeData } from './types';

export type TypeEntry = TypeData & {
  slug: string;
  image?: string;
  hidden: boolean;
};

function slugifyTypeCode(code: string) {
  return code
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

const hiddenTypes = [TYPE_LIBRARY.HHHH, TYPE_LIBRARY.DRUNK];

export const allTypeEntries: TypeEntry[] = [...NORMAL_TYPES, ...hiddenTypes].map(
  (type) => ({
    ...type,
    slug: slugifyTypeCode(type.code),
    image: TYPE_IMAGES[type.code],
    hidden: !type.pattern,
  }),
);

export function getAllTypeEntries() {
  return allTypeEntries;
}

export function getTypeEntryBySlug(slug: string) {
  return allTypeEntries.find((type) => type.slug === slug) ?? null;
}

export function getTypeEntryByCode(code: string) {
  return allTypeEntries.find((type) => type.code === code) ?? null;
}

export function getRelatedTypes(code: string, limit = 3) {
  return allTypeEntries.filter((type) => type.code !== code).slice(0, limit);
}
