export interface ICards {
  id: string;
  name: string;
  supertype: string;
  subtypes: Array<string>;
  level: string;
  hp: string;
  types: Array<string>;
  evolvesFrom: string;
  attacks: Array<IAttacks>;
  weaknesses: Array<ITypeAndValue>;
  resistances: Array<ITypeAndValue>;
  retreatCost: Array<string>;
  convertedRetreatCost: number;
  set: ISet;
  number: string;
  artist: string;
  rarity: string;
  nationalPokedexNumbers: Array<number>;
  legalities: ILegalities;
  images: IImagesCard;
  tcgplayer: ITcgplayer;
  cardmarket: ICardmarket;
}

export interface IAttacks {
  name: string;
  cost: Array<string>;
  convertedEnergyCost: number;
  damage: string;
  text: string;
}

export interface ITypeAndValue {
  type: string;
  value: string;
}

export interface ISet {
  id: string;
  name: string;
  series: string;
  printedTotal: number;
  total: number;
  legalities: ILegalities;
  ptcgoCode: string;
  releaseDate: string;
  updatedAt: string;
  images: IImagesSet;
}

export interface ILegalities {
  unlimited: string;
}

export interface IImagesSet {
  symbol: string;
  logo: string;
}

export interface IImagesCard {
  small: string;
  large: string;
}

export interface ITcgplayer {
  url: string;
  updatedAt: string;
  prices: IPriceTcgplayer;
}

export interface IPriceTcgplayer {
  '1stEditionHolofoil': ICoordinates;
  unlimitedHolofoil: ICoordinates;
}

export interface ICoordinates {
  low: number;
  mid: number;
  high: number;
  market: number;
}

export interface ICardmarket {
  url: string;
  updatedAt: string;
  prices: IPricesCardMarket;
}

export interface IPricesCardMarket {
  averageSellPrice: number;
  lowPrice: number;
  trendPrice: number;
  reverseHoloTrend: number;
  lowPriceExPlus: number;
  avg1: number;
  avg7: number;
  avg30: number;
  reverseHoloAvg1: number;
  reverseHoloAvg7: number;
  reverseHoloAvg30: number;
}
