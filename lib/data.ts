// All copy + assets for the Fastik Media site.
// Reels are the studio's own short-form work, streamed from Mux (HLS).

export const BRAND = "Fastik Media";

const P = (id: string) => `https://framerusercontent.com/images/${id}`;

// Mux playback ids for the reel library (9:16 short-form content).
export const MUX = [
  "3gHFTGibhrWz0200c33cmmbFkUCkSDKYt73uOI8pWXmEM",
  "zaLJurukzYAVk3EP3IWMZ009w1Y3z3wrwGeaRCfY6Hr00",
  "3PCs00a00oQ7Fao2Q0002F7sqEq69iB5e7J3ALNLJ00yFBgo",
  "c00aAqj2MmBGo019uaGg6VIvqsGIx01fYmekI00O2o301zpM",
  "02UpXXHCPIva9qSIIPqTpvmhG7FU52cdnO6zSkjgOcyo",
  "zcpvF01Td01LUIEElWOjHRF901Y892Zc25nFkR02ppQHJNM",
  "P6NK63fU6zoGHV74SPcp00Ivmm36I00EtWrhkENCEc01v8",
  "KEiqmhZdQzr4ZI0202uKxQiQX1zjuWjrIji1ZJkZ8bkJ8",
  "02fum7012DrmikrvfgwuX5FjMAVlFS3nB7ltZumRCT9PI",
  "raeoF2iQCqKs5dFZwbLy01EDnFuKs00bY00Fmcn6k5Uo3o",
  "89BlI01bPAh02sK4DgusO6I9FOgnXxkJdLYdMEa7JqLYE",
  "L8M8w9fa400NL3nUw02dym6bA5iFkJDMZE7ya5y02SRSk8",
  "Tr8A4liXfbKJpc02jbrBWH4Y2fpaW2Iark5100zKxjIlU",
];

// 16:9 project film (landscape) — "Hype Festival Aftermovie".
export const PROJECT_HYPE = "oqogXMSca02XLSVYHd4HYWZJB1lQG7zt67Hy74mHccUs";

// The two brand identities shown on the reels.
export const ID_FASTIK = { handle: "fastikmedia", avatar: "/fastikmedia.jpg" };
export const ID_AMINU = { handle: "creativeaminu", avatar: "/creativeaminu.jpg" };
export const AVATAR_MAIN = "/creativeaminu.jpg";

// Still photos used for editorial thumbnails / decorative avatar stacks.
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
  reel: { video: MUX[0], ...ID_AMINU },
};

export const INTRO = [
  {
    label: "Purpose",
    title: "Performance-led creatives that helps brands scale faster.",
    body: "We blend aesthetics with performance to help you turn views into real business outcomes.",
    reels: [
      {
        video: MUX[3],
        ...ID_FASTIK,
        pills: [
          { icon: "user", text: "5k follower growth" },
          { icon: "chart", text: "6.1% conversion" },
        ],
      },
      {
        video: MUX[8],
        ...ID_AMINU,
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
        video: PROJECT_HYPE,
        ...ID_FASTIK,
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
    { video: MUX[1], ...ID_FASTIK },
    { video: MUX[2], ...ID_AMINU },
    { video: MUX[6], ...ID_FASTIK },
    { video: MUX[7], ...ID_AMINU },
    { video: MUX[9], ...ID_FASTIK },
    { video: MUX[10], ...ID_AMINU },
  ],
};

export const TESTIMONIALS = {
  title: "What clients say after they got viral.",
  sub: "Proof that the right content can skyrocket your reach, grow your audience, and turn views into real business results.",
  cta: "Book a 15-min call",
  items: [
    {
      video: MUX[11],
      ...ID_FASTIK,
      stats: [
        { text: "5k follower growth", dark: true },
        { text: "6.1% conversion" },
        { text: "1.9k profile clicks" },
        { text: "20k avg views" },
      ],
    },
    {
      video: MUX[12],
      ...ID_AMINU,
      stats: [
        { text: "4k follower growth", dark: true },
        { text: "5.3% conversion" },
        { text: "1.5k profile clicks" },
        { text: "18k avg views" },
      ],
    },
    {
      video: MUX[4],
      ...ID_FASTIK,
      stats: [
        { text: "5.8k follower growth", dark: true },
        { text: "6.8% conversion" },
        { text: "2.4k profile clicks" },
        { text: "23k avg views" },
      ],
    },
    {
      video: MUX[2],
      ...ID_AMINU,
      stats: [
        { text: "3k follower growth", dark: true },
        { text: "4.9% conversion" },
        { text: "1.6k profile clicks" },
        { text: "16k avg views" },
      ],
    },
    {
      video: MUX[8],
      ...ID_FASTIK,
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
    { video: MUX[9], ...ID_FASTIK },
    { video: MUX[5], ...ID_AMINU },
    { video: MUX[0], ...ID_FASTIK },
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
