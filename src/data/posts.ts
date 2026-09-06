import { galleryImages, type GalleryImageKey } from "./images";

export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  body: string[];
}

const img = (key: GalleryImageKey) => galleryImages[key];

export const posts: Post[] = [
  {
    slug: "five-rules-for-the-fridge",
    image: img("poolCornerGroup"),
    title: "5 Water Safety Rules Worth Sticking on Your Fridge",
    excerpt:
      "The rules that matter most are the ones your family actually remembers. Here are five simple enough to say out loud before every swim.",
    date: "2026-06-02",
    readTime: "4 min read",
    category: "Family Habits",
    body: [
      "Most water safety advice is correct and completely unmemorable. Long checklists get skimmed once and forgotten. What actually changes behaviour is a short list that a five-year-old could recite back to you.",
      "1. One adult watches, always. Not 'everyone is kind of watching' — one named adult, no phone, whose only job for the next 15 minutes is the water.",
      "2. No swimming alone, ever. Not in the pool, not in the bath past toddler age, not at the lake. A buddy is a rescue plan, not a suggestion.",
      "3. Feet first into water you can't see the bottom of. Diving is for pools you know, in water deep enough, that you've checked yourself.",
      "4. Life jackets in open water, no exceptions. Floaties are toys. A properly fitted life jacket is the only flotation device you should trust in a river, lake, or the sea.",
      "5. If someone goes quiet, check the water first. Missing children are found in water far more often than families expect — silence is a bigger warning sign than splashing.",
      "Print these five, stick them where your family will actually see them, and say them out loud before you leave for the pool. Repetition is what makes a rule a habit.",
    ],
  },
  {
    slug: "first-sixty-seconds",
    image: img("poolUnderwaterDive"),
    title: "What To Do in the First 60 Seconds Near Water Trouble",
    excerpt:
      "You don't need to be a lifeguard to help. You need to know the four things to do, in order, before help arrives.",
    date: "2026-05-14",
    readTime: "5 min read",
    category: "Emergency Response",
    body: [
      "Drowning rarely looks like it does in films. It's quiet — no shouting, no waving, often just a head tipped back and a body low in the water. Knowing what to do in the first minute matters more than any equipment.",
      "First, shout for help and call for emergency assistance, or ask someone specific to do it — 'you, call for help' works better than a general cry into a crowd.",
      "Second, reach or throw before you go. A pole, a float, a rope, or even a shirt held out from the edge can pull a person to safety without putting a second person at risk.",
      "Third, only enter the water yourself as a last resort, and only if you are a confident swimmer. Panicked swimmers can pull a rescuer under — approach from behind if you must swim to someone.",
      "Fourth, once safe, check breathing and begin CPR immediately if needed while help is on the way. Every minute without oxygen matters, and starting CPR before professionals arrive measurably improves outcomes.",
      "Consider taking a certified first aid and CPR course locally — reading about it is a start, but practising the motions is what makes them automatic under pressure.",
    ],
  },
  {
    slug: "bath-time-changes",
    image: img("poolInstructor"),
    title: "Bath Time Safety: What Changes Once Your Baby Can Sit Up",
    excerpt:
      "The bathroom is where most under-one drownings happen at home. Here's what to adjust the moment your baby starts sitting and moving.",
    date: "2026-04-22",
    readTime: "3 min read",
    category: "Infants & Toddlers",
    body: [
      "A newly sitting baby can also newly topple forward, and a few centimetres of bathwater is enough to be dangerous if a face goes under and stays there. This is the point most families should tighten their bath routine.",
      "Never leave a sitting baby in the bath to grab a towel, answer the door, or check a phone — bring everything you need into the bathroom before you start.",
      "Drain the bath the moment you lift your child out. An empty bath is a safer bath, especially in homes with older siblings who might return to play.",
      "Bath seats and rings are support tools, not supervision tools. They can tip, and they are not designed to prevent drowning on their own.",
      "If you're ever interrupted — a knock at the door, another child calling — the rule is simple: take the baby with you, every time, no exceptions.",
    ],
  },
  {
    slug: "choosing-an-instructor",
    image: img("poolLengthsWide"),
    title: "Choosing a Swim Instructor You Can Actually Trust",
    excerpt:
      "Certification is only the starting point. Here's what to ask before you book your child's first lesson.",
    date: "2026-03-30",
    readTime: "4 min read",
    category: "Lessons",
    body: [
      "A good instructor changes how quickly and how safely your child learns. A few questions before you commit can save months of frustration — or worse.",
      "Ask what certification they hold and who issued it — a recognised swim-instructor or lifeguard certification, not just personal swimming ability, is what you're checking for.",
      "Ask how they handle a child who's afraid. The answer should be about patience and small steps, never about pushing through fear quickly.",
      "Ask about class size. One instructor watching eight toddlers in open water is a very different experience from a ratio of one to three.",
      "Watch a session before you enrol if you can. You're looking for calm instructions, constant eye contact with each child, and hands ready to help — not just a whistle and a countdown.",
    ],
  },
  {
    slug: "pool-vs-open-water",
    image: img("poolLineup"),
    title: "Pool vs Open Water: Same Child, Different Risks",
    excerpt:
      "A confident pool swimmer is not automatically a confident lake or river swimmer. Here's what actually changes.",
    date: "2026-02-11",
    readTime: "3 min read",
    category: "Open Water",
    body: [
      "It's tempting to treat 'my child can swim' as a single fact. In practice, a pool and an open body of water ask for different skills entirely, and the gap catches confident families off guard.",
      "Visibility disappears. In a murky river or lake, your child may not be able to see their own hands, let alone the bottom — depth judgement built in a clear pool doesn't transfer.",
      "Temperature drops stamina fast. Cold water tires muscles and shortens breath far quicker than a heated pool, even for a strong swimmer.",
      "Currents move the goalposts. There is no current in a backyard pool. In open water, the safest direction to swim is often sideways to the shore, not straight toward it.",
      "Treat every new open water location as a fresh safety conversation, however strong a swimmer your child has become in the pool.",
    ],
  },
];
