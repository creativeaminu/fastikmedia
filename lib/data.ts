// All copy + assets for the Fastik Media site (design recreated from the
// Influence template). Media is served from Framer's CDN — swap for your own.

export const BRAND = "Fastik Media";

const V = (id: string) => `https://framerusercontent.com/assets/${id}.mp4`;
const P = (id: string) => `https://framerusercontent.com/images/${id}`;

export const VIDEOS = [
  V("8IDs730LgJJaXwQX45zXB4WKBrY"),
  V("DXWg7xZQ9FVGADXcu1YyaoKGc"),
  V("EsKprNy4lLQLqGnbpg4HT6afA"),
  V("FyNgFnzyD13liJpZHSDMJSZiTg8"),
  V("IJoHNEhGHa15Gjh9glBhm3F8WU"),
  V("MqddaZ5QXlptJ1kJtgoyZ632Uio"),
  V("N21R1I2PRXv0rrtAxuzrB3nvAc"),
  V("OFxzR4yy3x6AYpc0q71bZHaoVA"),
  V("V7aP7uEYVIsBmXzinc531yfJCo"),
  V("ZSMEgzYL0TQGQtdoqNwBam9s"),
  V("a6582eMC3cParhpqJcnNnY8lfU"),
  V("aHW6q1zW5Gmge8w8jaaI53hMQ"),
  V("aolyzPNCcyoHRIwk3hhn5WK7s"),
  V("fGyGI2nAP1W87RVd3FxemLXwCg"),
  V("fuVrP45UYEBoOfcLoix1DwuHo"),
  V("swmKztexhyaw6JwBYijJOmfQg"),
];

export const PHOTOS = [
  P("0K9wahDgmpQCidXcEUCpRBJ7sWw.jpg"),
  P("2CBydzAi5aIjb2ShPxPHPp1qI.jpg"),
  P("4Qlpwr9yQtBVZycyW15XId9PM.jpg"),
  P("8Q3wD9sC3p4rB8rfGijPKdgNiRw.jpeg"),
  P("IzJSCh6B6ad9pH6KekfcYAIsk.jpg"),
  P("MuXj3Mub5cfFfM0KE96BOpN59YA.jpg"),
  P("Mxzs75CjAQiHPavkYvSDBouqE.jpg"),
  P("jdPx08tozVVi4aUpXzDEb2JMgY.jpg"),
  P("k2NZM4eX60bZoWXgSpvqXt14lg.jpg"),
  P("sLsF68tNgIeMjXrWW9s9O6Pt27o.jpg"),
];

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Pricing", href: "#pricing" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  badge: "3 spots left for August",
  sub: "We turn your expertise into viral short-form content that builds trust and drives attention.",
  ctaPrimary: "Let's grow your brand",
  ctaSecondary: "See pricing",
  proofBrands: "100+ personal brands",
  proofRating: "Rated excellent: 5/5",
  reel: { video: VIDEOS[5], handle: "sasha_", avatar: PHOTOS[0] },
};

export const INTRO = [
  {
    label: "Purpose",
    title: "Performance-led creatives that helps brands scale faster.",
    body: "We blend aesthetics with performance to help you turn views into real business outcomes.",
    reels: [
      {
        video: VIDEOS[3],
        handle: "zaratalks",
        avatar: PHOTOS[1],
        pills: [
          { icon: "user", text: "5k follower growth" },
          { icon: "chart", text: "6.1% conversion" },
        ],
      },
      {
        video: VIDEOS[8],
        handle: "travelwithmia",
        avatar: PHOTOS[2],
        pills: [{ icon: "link", text: "Link clicks" }],
      },
    ],
  },
  {
    label: "Mission",
    title: "Built for creators who are ready to grow today.",
    body: "If you're showing up, we'll make sure it converts — with short-form content built to scale.",
    reels: [
      {
        video: VIDEOS[13],
        handle: "_jason",
        avatar: PHOTOS[3],
        pills: [
          { icon: "heart", text: "200k" },
          { icon: "user", text: "1.9k profile clicks" },
        ],
      },
    ],
  },
];

export const PROJECTS = {
  title: "Where strategy meets scroll-stopping content.",
  sub: "A curated look at how we turned raw footage into viral-worthy moments — and real audience growth.",
  items: [
    { video: VIDEOS[0], handle: "kia_dances", avatar: PHOTOS[4] },
    { video: VIDEOS[1], handle: "sarah_rides", avatar: PHOTOS[5] },
    { video: VIDEOS[2], handle: "tennis_tips", avatar: PHOTOS[6] },
    { video: VIDEOS[6], handle: "business_chats", avatar: PHOTOS[7] },
    { video: VIDEOS[7], handle: "golf_with_jess", avatar: PHOTOS[8] },
    { video: VIDEOS[10], handle: "zoe_gardens", avatar: PHOTOS[9] },
  ],
};

export const TESTIMONIALS = {
  title: "What clients say after they got viral.",
  sub: "Proof that the right content can skyrocket your reach, grow your audience, and turn views into real business results.",
  cta: "Book a 15-min call",
  items: [
    {
      video: VIDEOS[11],
      handle: "Samuel_",
      avatar: PHOTOS[0],
      stats: [
        { text: "5k follower growth", dark: true },
        { text: "6.1% conversion" },
        { text: "1.9k profile clicks" },
        { text: "20k avg views" },
      ],
    },
    {
      video: VIDEOS[12],
      handle: "Tom_Finance",
      avatar: PHOTOS[3],
      stats: [
        { text: "4k follower growth", dark: true },
        { text: "5.3% conversion" },
        { text: "1.5k profile clicks" },
        { text: "18k avg views" },
      ],
    },
    {
      video: VIDEOS[14],
      handle: "_kenny",
      avatar: PHOTOS[7],
      stats: [
        { text: "5.8k follower growth", dark: true },
        { text: "6.8% conversion" },
        { text: "2.4k profile clicks" },
        { text: "23k avg views" },
      ],
    },
    {
      video: VIDEOS[15],
      handle: "Jessica_Estates",
      avatar: PHOTOS[2],
      stats: [
        { text: "3k follower growth", dark: true },
        { text: "4.9% conversion" },
        { text: "1.6k profile clicks" },
        { text: "16k avg views" },
      ],
    },
    {
      video: VIDEOS[4],
      handle: "investing_with_jon",
      avatar: PHOTOS[8],
      stats: [
        { text: "2k follower growth", dark: true },
        { text: "6.3% conversion" },
        { text: "2k profile clicks" },
        { text: "22k avg views" },
      ],
    },
  ],
};

export const PROCESS = {
  title: "Here's how we turn your raw clips into viral content.",
  sub: "From idea to execution, we handle everything — so you can focus on creating while we make sure your videos get seen, shared, and saved.",
  steps: [
    {
      step: "Step 1",
      title: "Kickoff call.",
      body: "Quick kickoff call to learn your brand, tone, and goals. So every video feels authentically you.",
      visual: "call" as const,
    },
    {
      step: "Step 2",
      title: "Send us your footage.",
      body: "Record on your phone, Zoom, podcast, or wherever you like. Just upload it — we'll take it from there.",
      visual: "upload" as const,
    },
    {
      step: "Step 3",
      title: "We edit. You approve.",
      body: "Our team crafts edits with hooks, subtitles, music, and visual flair. You review, request changes, or hit post.",
      visual: "chat" as const,
      chat: [
        { from: "them", text: "Hey, we uploaded the edited reels" },
        { from: "you", text: "These look awesome 🤩" },
        { from: "them", text: "Glad you liked them! Just finishing your next week's content" },
      ],
    },
    {
      step: "Step 4",
      title: "Track what works.",
      body: "Each month, we show you what's performing best — so you can double down on content that converts.",
      visual: "chart" as const,
    },
  ],
};

export const PRICING = {
  title: "Flexible plans built for growth.",
  sub: "Pick a plan that fits your content needs and lets us do the heavy lifting.",
  plans: [
    {
      name: "Starter plan",
      price: "$750/m",
      blurb: "Perfect for creators looking to grow an audience.",
      features: [
        "8 short-form videos (15–60s each)",
        "5-day turnaround",
        "1 revision per video",
        "Monthly performance report",
      ],
      cta: "Get started",
      featured: false,
    },
    {
      name: "Growth plan",
      price: "$1,500/m",
      blurb: "Ideal for brands ready to post frequently and grow fast.",
      features: [
        "20 short-form videos (15–60s each)",
        "3-day turnaround",
        "Unlimited revisions",
        "Monthly performance report",
      ],
      cta: "Book an intro call",
      featured: true,
    },
    {
      name: "Scale plan",
      price: "$2,800/m",
      blurb: "For founders, agencies, or creators building a dominant presence.",
      features: [
        "32 short-form videos (15–60s each)",
        "48-hr turnaround",
        "Unlimited revisions",
        "Monthly performance report",
      ],
      cta: "Get started",
      featured: false,
    },
  ],
};

export const QUOTES = [
  {
    text: `${BRAND} helped me turn raw clips into content that actually converts.`,
    author: "MayaLennox",
    avatar: PHOTOS[1],
  },
  {
    text: `Our Reels finally have structure, pace, and purpose — thanks to ${BRAND}.`,
    author: "_traveldiaries",
    avatar: PHOTOS[2],
  },
  {
    text: `${BRAND} made it effortless to stay consistent and grow fast.`,
    author: "sarah_fx",
    avatar: PHOTOS[4],
  },
  {
    text: `From 2K to 10K followers in weeks — ${BRAND} knows what works.`,
    author: "Maya Lennox",
    avatar: PHOTOS[5],
  },
  {
    text: `${BRAND} gave my videos the polish they were missing.`,
    author: "jo",
    avatar: PHOTOS[6],
  },
  {
    text: "They handled everything — editing, pacing, captions — perfectly.",
    author: "Lara_Cunningham",
    avatar: PHOTOS[8],
  },
  {
    text: `Engagement doubled. Saves tripled. All from ${BRAND}'s edits.`,
    author: "Rahul_rules",
    avatar: PHOTOS[9],
  },
  {
    text: `${BRAND} helped me turn niche content into mainstream reach.`,
    author: "Matt",
    avatar: PHOTOS[7],
  },
];

export const BLOG = {
  title: "Learn what makes content go viral.",
  sub: "Stay ahead of the scroll with fresh strategies, platform updates, and proven growth playbooks.",
  posts: [
    {
      category: "Content Strategy",
      title: "5 Ways to Keep Viewers Watching Past 3 Seconds",
      excerpt:
        "Learn the psychology behind high-retention hooks and how to use them in your short-form videos.",
      author: "Sofia Blake",
      read: "5 min",
      photo: PHOTOS[1],
      avatar: PHOTOS[2],
    },
    {
      category: "Creator Growth",
      title: "How One Creator Gained 10K in 30 Days Using POV Content",
      excerpt:
        "A behind-the-scenes breakdown of the tactics, edits, and posting schedule that fueled viral growth.",
      author: "Noor El-Masri",
      read: "4 min",
      photo: PHOTOS[3],
      avatar: PHOTOS[4],
    },
    {
      category: "Platform Insights",
      title: "Instagram vs TikTok: Which Should You Prioritize in 2025?",
      excerpt:
        "A no-fluff comparison of where your content performs best — based on data, trends, and goals.",
      author: "Zane Cooper",
      read: "6 min",
      photo: PHOTOS[5],
      avatar: PHOTOS[6],
    },
    {
      category: "Video Editing",
      title: "Why Captions Can Make or Break Your Video",
      excerpt:
        "Discover how smart typography and subtitle styling boost watch time and engagement.",
      author: "Konrad Cheung",
      read: "3 min",
      photo: PHOTOS[7],
      avatar: PHOTOS[8],
    },
  ],
};

export const CTA = {
  badge: "3 spots left for August",
  title: "Your profile growth is only a few edits away.",
  button: "Get started today",
  reels: [
    { video: VIDEOS[9], handle: "skin_glow", avatar: PHOTOS[5] },
    { video: VIDEOS[5], handle: "sasha_dances", avatar: PHOTOS[0] },
    { video: VIDEOS[0], handle: "MikeCooks", avatar: PHOTOS[9] },
  ],
};

export const FOOTER = {
  tagline:
    "We turn your expertise into viral short-form content that builds trust and drives attention.",
  columns: [
    {
      links: [
        { label: "About", href: "#about" },
        { label: "Pricing", href: "#pricing" },
        { label: "Blog", href: "#blog" },
        { label: "Careers", href: "#" },
      ],
    },
    {
      links: [
        { label: "Instagram", href: "#" },
        { label: "YouTube", href: "#" },
        { label: "TikTok", href: "#" },
      ],
    },
    {
      links: [
        { label: "Contact", href: "#contact" },
        { label: "Terms", href: "#" },
        { label: "404", href: "#" },
      ],
    },
  ],
};
