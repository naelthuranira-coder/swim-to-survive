export const headlineStats = [
  {
    value: "236,000+",
    label: "People drown around the world every year",
    source: "World Health Organization, global estimate",
  },
  {
    value: "~11",
    label: "Lives lost to drowning every day in the US alone (2010–2019 average)",
    source: "US Centers for Disease Control and Prevention",
  },
  {
    value: "1 in 10",
    label: "Child deaths worldwide are caused by drowning",
    source: "World Health Organization",
  },
  {
    value: "Highest",
    label: "Drowning death rate of any world region is recorded in Africa",
    source: "WHO African Region data",
  },
];

export interface RegionRate {
  key: string;
  label: string;
  value: number;
}

/** Relative drowning-rate index by WHO region (highest region = 100). */
export const regionalRates: RegionRate[] = [
  { key: "afr", label: "African Region", value: 100 },
  { key: "wpr", label: "Western Pacific Region", value: 62 },
  { key: "sear", label: "South-East Asia Region", value: 58 },
  { key: "emr", label: "Eastern Mediterranean Region", value: 30 },
  { key: "eur", label: "European Region", value: 18 },
  { key: "amr", label: "Region of the Americas", value: 14 },
];

/** Relative childhood drowning risk index by age band (highest band = 100). */
export const ageRisk: RegionRate[] = [
  { key: "1-4", label: "1 – 4 years", value: 100 },
  { key: "5-9", label: "5 – 9 years", value: 62 },
  { key: "10-14", label: "10 – 14 years", value: 34 },
  { key: "15-19", label: "15 – 19 years", value: 40 },
];

export const dataSources = [
  {
    name: "WHO Global Report on Drowning",
    detail: "World Health Organization — global and regional drowning estimates.",
    url: "https://www.who.int/publications/i/item/9789241511933",
  },
  {
    name: "CDC — Facts About Drowning",
    detail: "US Centers for Disease Control and Prevention — US drowning data by age group.",
    url: "https://www.cdc.gov/drowning/facts/index.html",
  },
];
