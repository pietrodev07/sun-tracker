import { FormData } from "./types";

const toRadians = (deg: number) => (deg * Math.PI) / 180;
const toDegrees = (rad: number) => (rad * 180) / Math.PI;

export const calculateSunPosition = (input: FormData) => {
  const gamma = ((2 * Math.PI) / 365) * input.day;

  const eqTime =
    229.18 *
    (0.000075 +
      0.001868 * Math.cos(gamma) -
      0.032077 * Math.sin(gamma) -
      0.014615 * Math.cos(2 * gamma) -
      0.040849 * Math.sin(2 * gamma));

  const declination =
    0.006918 -
    0.399912 * Math.cos(gamma) +
    0.070257 * Math.sin(gamma) -
    0.006758 * Math.cos(2 * gamma) +
    0.000907 * Math.sin(2 * gamma) -
    0.002697 * Math.cos(3 * gamma) +
    0.00148 * Math.sin(3 * gamma);

  const latRad = toRadians(input.latitude);

  const timeOffset = eqTime - 4 * input.longitude + 60;
  const trueSolarTime = input.hour * 60 + input.minutes + timeOffset - 20;
  const hourAngle = trueSolarTime / 4 - 180;

  const zenithRad = Math.acos(
    Math.sin(latRad) * Math.sin(declination) +
      Math.cos(latRad) * Math.cos(declination) * Math.cos(toRadians(hourAngle)),
  );

  const azimuthHelper = Math.acos(
    -(Math.sin(latRad) * Math.cos(zenithRad) - Math.sin(declination)) /
      (Math.cos(latRad) * Math.sin(zenithRad)),
  );

  let azimuth = 180 - toDegrees(azimuthHelper);

  const zenithRadOffset = Math.acos(
    Math.sin(latRad) * Math.sin(declination) +
      Math.cos(latRad) *
        Math.cos(declination) *
        Math.cos(toRadians(hourAngle + 0.01)),
  );

  const azimuthHelperOffset = Math.acos(
    -(Math.sin(latRad) * Math.cos(zenithRadOffset) - Math.sin(declination)) /
      (Math.cos(latRad) * Math.sin(zenithRadOffset)),
  );

  const azimuthOffset = 180 - toDegrees(azimuthHelperOffset);

  if (azimuthOffset > azimuth) {
    azimuth = 180 + azimuth;
  } else {
    azimuth = 180 - azimuth;
  }

  const elevation = 90 - toDegrees(zenithRad);

  return {
    azimuth: Number(azimuth.toFixed(4)),
    elevation: Number(elevation.toFixed(4)),
  };
};

export const algorithmCode = `const gamma = ((2 * Math.PI) / 365) * input.day;

const eqTime =
  229.18 *
  (0.000075 +
    0.001868 * Math.cos(gamma) -
    0.032077 * Math.sin(gamma) -
    0.014615 * Math.cos(2 * gamma) -
    0.040849 * Math.sin(2 * gamma));

const declination =
  0.006918 -
  0.399912 * Math.cos(gamma) +
  0.070257 * Math.sin(gamma) -
  0.006758 * Math.cos(2 * gamma) +
  0.000907 * Math.sin(2 * gamma) -
  0.002697 * Math.cos(3 * gamma) +
  0.00148 * Math.sin(3 * gamma);

const latRad = toRadians(input.latitude);

const timeOffset = eqTime - 4 * input.longitude + 60;
const trueSolarTime = input.hour * 60 + input.minutes + timeOffset - 20;
const hourAngle = trueSolarTime / 4 - 180;

const zenithRad = Math.acos(
  Math.sin(latRad) * Math.sin(declination) +
    Math.cos(latRad) * Math.cos(declination) * Math.cos(toRadians(hourAngle)),
);

const azimuthHelper = Math.acos(
  -(Math.sin(latRad) * Math.cos(zenithRad) - Math.sin(declination)) /
    (Math.cos(latRad) * Math.sin(zenithRad)),
);

let azimuth = 180 - toDegrees(azimuthHelper);

const zenithRadOffset = Math.acos(
  Math.sin(latRad) * Math.sin(declination) +
    Math.cos(latRad) *
      Math.cos(declination) *
      Math.cos(toRadians(hourAngle + 0.01)),
);

const azimuthHelperOffset = Math.acos(
  -(Math.sin(latRad) * Math.cos(zenithRadOffset) - Math.sin(declination)) /
    (Math.cos(latRad) * Math.sin(zenithRadOffset)),
);

const azimuthOffset = 180 - toDegrees(azimuthHelperOffset);

if (azimuthOffset > azimuth) {
  azimuth = 180 + azimuth;
} else {
  azimuth = 180 - azimuth;
}

const elevation = 90 - toDegrees(zenithRad);

return {
  azimuth: Number(azimuth.toFixed(4)),
  elevation: Number(elevation.toFixed(4)),
};
`;
