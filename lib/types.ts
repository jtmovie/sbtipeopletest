export interface Option {
  label: string;
  value: number;
}

export interface Question {
  id: string;
  dim?: string;
  text: string;
  options: Option[];
  special?: boolean;
  kind?: string;
}

export interface TypeData {
  code: string;
  cn: string;
  intro: string;
  desc: string;
  pattern?: string;
}

export interface DimMeta {
  name: string;
  model: string;
}

export interface LevelExplanation {
  L: string;
  M: string;
  H: string;
}

export interface RawResult {
  rawScores: Record<string, number>;
  levels: Record<string, 'L' | 'M' | 'H'>;
  ranked: RankedType[];
  bestNormal: RankedType;
  finalType: TypeData;
  modeKicker: string;
  badge: string;
  sub: string;
  special: boolean;
  secondaryType: RankedType | null;
}

export interface RankedType extends TypeData {
  distance: number;
  exact: number;
  similarity: number;
}
