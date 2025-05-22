export type FormData = {
  day: number;
  hour: number;
  minutes: number;
  latitude: number;
  longitude: number;
};

export type Result = {
  azimuth: number;
  elevation: number;
};

export type Option<T> = { label: string; value: T };
