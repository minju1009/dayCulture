export interface IGeolocation {
  latitude: undefined | number;
  longitude: undefined | number;
}

export interface IHomeInfoTypes {
  codename: string;
  guname: string;
  title: string;
  date: string;
  place: string;
  orgName: string;
  useTrgt: string;
  useFee: string;
  player: string;
  program: string;
  etcDesc: string;
  orgLink: string;
  mainImg: string;
  rgstdate: string;
  ticket: string;
  strtdate: string;
  endDate: string;
  themecode: string;
}

export interface IParkInfoTypes {
  area: string;
  gLatitude: string;
  gLongitude: string;
  guidance: string;
  latitude: string;
  longitude: string;
  mainEquip: string;
  mainPlants: string;
  openDt: string;
  pAddr: string;
  pAdmintel: string;
  pIdx: string;
  pImg: string;
  pListContent: string;
  pName: string;
  pPark: string;
  pZone: string;
  templateUrl: string;
  useRefer: string;
  visitRoad: string;
}

export interface ISeoulGilInfoTypes {
  courseCategory: number;
  courseCategoryNm: string;
  southNorthDiv: string;
  southNorthDivNm: string;
  areaGu: string;
  distance: string;
  leadTime: string;
  courseLevel: string;
  voteCnt: string;
  relateSubway: string;
  trafficInfo: string;
  content: string;
  pdfFilePath: string;
  courseName: string;
  regDate: string;
  detailCourse: string;
  cpiIdx: number;
  cpiName: string;
  x: string;
  y: string;
  cpiContent: string;
}

export interface IFilter {
  interest: string[];
  area: string;
  date: string;
  fee: string;
}

export interface IFilterProps {
  isOpen: boolean;
  openAccordion: (name: AccordionFilterType) => void;
  closeAccordion: () => void;
}

export type AccordionFilterType = '관심분야' | '관심지역' | '날짜' | '관람료' | undefined;

export type InterestOptionType =
  | '클래식'
  | '콘서트'
  | '축제'
  | '전시/미술'
  | '영화'
  | '연극'
  | '뮤지컬/오페라'
  | '무용'
  | '독주/독창회'
  | '기타'
  | '국악'
  | '교육/체험';
