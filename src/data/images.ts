import poolSplash from "../assets/gallery/pool-splash.jpg";
import poolPhoneLengths from "../assets/gallery/pool-phone-lengths.jpg";
import poolLengthsWide from "../assets/gallery/pool-lengths-wide.jpg";
import poolLineup from "../assets/gallery/pool-lineup.jpg";
import poolInstructor from "../assets/gallery/pool-instructor.jpg";
import poolCornerGroup from "../assets/gallery/pool-corner-group.jpg";
import poolUnderwaterDive from "../assets/gallery/pool-underwater-dive.jpg";

export const galleryImages = {
  poolSplash,
  poolPhoneLengths,
  poolLengthsWide,
  poolLineup,
  poolInstructor,
  poolCornerGroup,
  poolUnderwaterDive,
};

export type GalleryImageKey = keyof typeof galleryImages;
