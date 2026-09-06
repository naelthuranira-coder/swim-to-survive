import { galleryImages, type GalleryImageKey } from "./images";

export type GuideIconType =
  | "waterBaby"
  | "float"
  | "kick"
  | "independent"
  | "poolRules"
  | "openWater";

export type GuideLevel =
  | "Babies & Toddlers"
  | "Preschoolers"
  | "Young Kids"
  | "6+ Years"
  | "Whole Family";

export const guideLevels: GuideLevel[] = [
  "Babies & Toddlers",
  "Preschoolers",
  "Young Kids",
  "6+ Years",
  "Whole Family",
];

export interface Guide {
  slug: string;
  icon: GuideIconType;
  level: GuideLevel;
  title: string;
  ageRange: string;
  summary: string;
  timeToLearn: string;
  image: string;
  steps: { title: string; detail: string }[];
}

const img = (key: GalleryImageKey) => galleryImages[key];

export const guides: Guide[] = [
  {
    slug: "getting-comfortable-in-water",
    icon: "waterBaby",
    level: "Babies & Toddlers",
    image: img("poolInstructor"),
    title: "Getting Comfortable in Water",
    ageRange: "6 months – 2 years",
    summary:
      "Before any skill comes trust. This guide walks you through gentle first sessions so your child feels safe with water on their face, in their ears, and around their body.",
    timeToLearn: "2–3 short sessions a week for a month",
    steps: [
      {
        title: "Start on dry land",
        detail:
          "Talk about the pool before you get in. Let your child watch other swimmers, touch the water with their hands, and set the expectation that you'll be right beside them the whole time.",
      },
      {
        title: "Hold, don't push",
        detail:
          "Carry your child chest-to-chest in shallow water. Let them set the pace of how deep they go. Never force a dunk or a splash they haven't chosen.",
      },
      {
        title: "Play with pouring",
        detail:
          "Use a cup to pour water over their shoulders, then slowly work up to the top of the head. This builds tolerance for water on the face without any surprise.",
      },
      {
        title: "End on a high note",
        detail:
          "Keep first sessions to 10–15 minutes and stop while your child is still enjoying it. A short, happy session beats a long one that ends in tears.",
      },
    ],
  },
  {
    slug: "floating-and-breath-control",
    icon: "float",
    level: "Preschoolers",
    image: img("poolSplash"),
    title: "Floating & Breath Control",
    ageRange: "2 – 4 years",
    summary:
      "Floating is the single most protective swim skill a child can have — it buys time in an emergency. This guide breaks it into small, teachable pieces.",
    timeToLearn: "4–6 weeks of short sessions",
    steps: [
      {
        title: "Practise blowing bubbles",
        detail:
          "In the bath or a shallow pool, practise blowing bubbles through the mouth and nose. This is the foundation of controlled breathing in water.",
      },
      {
        title: "Back float, hands-on",
        detail:
          "Support your child's back and head as they lie flat, ears in the water, tummy up. Count together to build confidence in how long they can hold the position.",
      },
      {
        title: "Reduce your support gradually",
        detail:
          "Move from a full hand under the back, to two fingers, to hovering close by without touching. Only reduce support once the previous stage feels easy.",
      },
      {
        title: "Practise the safety float",
        detail:
          "Teach the 'float, breathe, float' pattern: face down, lift the head to breathe, return face down. This is the skill that keeps a tired or startled swimmer afloat.",
      },
    ],
  },
  {
    slug: "kicking-and-basic-strokes",
    icon: "kick",
    level: "Young Kids",
    image: img("poolLengthsWide"),
    title: "Kicking & Basic Strokes",
    ageRange: "4 – 6 years",
    summary:
      "Once floating feels natural, movement comes next. This guide covers kicking technique and the first strokes that turn floating into swimming.",
    timeToLearn: "6–8 weeks of regular practice",
    steps: [
      {
        title: "Kick from the hip, not the knee",
        detail:
          "Have your child hold the pool edge or a float board and practise a steady flutter kick, keeping legs relatively straight and ankles loose.",
      },
      {
        title: "Add arm movement slowly",
        detail:
          "Introduce simple 'reach and pull' arm strokes only after kicking feels automatic — combining too many new skills at once slows progress.",
      },
      {
        title: "Practise short, supported swims",
        detail:
          "Have your child swim a few metres toward you in the shallow end, so every attempt ends with reaching a safe, reachable goal.",
      },
      {
        title: "Celebrate distance, not speed",
        detail:
          "Track how far they can go, not how fast. Confidence and endurance matter far more than technique at this stage.",
      },
    ],
  },
  {
    slug: "swimming-independently",
    icon: "independent",
    level: "6+ Years",
    image: img("poolPhoneLengths"),
    title: "Swimming Independently",
    ageRange: "6+ years",
    summary:
      "The goal of this stage is real self-rescue ability: swimming a meaningful distance, treading water, and getting out of a pool unassisted.",
    timeToLearn: "Ongoing — revisit each season",
    steps: [
      {
        title: "Combine breathing with strokes",
        detail:
          "Practise turning the head to breathe every few strokes without stopping the kick. This is usually the hardest coordination step — be patient.",
      },
      {
        title: "Practise treading water",
        detail:
          "In water they can stand in, have your child lift their feet and use small circular arm and leg movements to stay upright for 30–60 seconds.",
      },
      {
        title: "Practise exiting unassisted",
        detail:
          "Show your child how to reach the pool edge, push down with both hands, and pull themselves out without a ladder — a critical self-rescue skill.",
      },
      {
        title: "Test it, don't assume it",
        detail:
          "Before you consider your child a confident swimmer, watch them swim a full length and exit on their own, fully clothed, at least once.",
      },
    ],
  },
  {
    slug: "pool-safety-rules-for-the-family",
    icon: "poolRules",
    level: "Whole Family",
    image: img("poolCornerGroup"),
    title: "Pool Safety Rules for the Whole Family",
    ageRange: "All ages",
    summary:
      "Most drownings happen in seconds, close to a supervising adult. This guide sets the household rules that close that gap.",
    timeToLearn: "Set once, repeat every visit",
    steps: [
      {
        title: "Assign one 'water watcher'",
        detail:
          "Whenever children are near water, one adult's only job is watching them — no phone, no chatting. Swap this role every 15–20 minutes.",
      },
      {
        title: "Keep reach and rescue tools close",
        detail:
          "A reaching pole and a phone should always be within arm's reach of the water watcher, not stored somewhere across the yard.",
      },
      {
        title: "Fence and lock every access point",
        detail:
          "A four-sided pool fence with a self-closing, self-latching gate cuts child drowning risk dramatically compared to a fence on only some sides.",
      },
      {
        title: "Agree the rules before you arrive",
        detail:
          "No running, no diving in the shallow end, always ask before entering, always swim with a buddy. Say them out loud every single visit.",
      },
    ],
  },
  {
    slug: "open-water-and-lake-safety",
    icon: "openWater",
    level: "Whole Family",
    image: img("poolUnderwaterDive"),
    title: "Open Water & Lake Safety",
    ageRange: "All ages",
    summary:
      "Rivers, lakes, and the ocean behave nothing like a pool — currents, cold, and poor visibility change the rules. This guide covers what to add before you go.",
    timeToLearn: "Review before every trip",
    steps: [
      {
        title: "Check conditions first",
        detail:
          "Look up current, tide, and weather conditions before you go, and ask local lifeguards or residents about currents you can't see from the shore.",
      },
      {
        title: "Wear a properly fitted life jacket",
        detail:
          "For young or developing swimmers, a life jacket in open water is not optional — floaties and inflatable toys are not rescue devices.",
      },
      {
        title: "Enter feet-first, every time",
        detail:
          "Never dive into water of unknown depth. Wade in gradually so you can feel the bottom and any sudden drop-offs.",
      },
      {
        title: "Teach 'flip, float, follow'",
        detail:
          "If caught in a current: flip onto your back, float to conserve energy, and follow the safest path back to shore — usually parallel to it, not against it.",
      },
    ],
  },
];
