// ─── TYPES ───────────────────────────────────────────────────────────
export type Flag = "spain" | "belgium" | "bangladesh";

export interface Experience {
  date: string;
  role: string;
  place: string;
  flag: Flag;
  dotColor: string;
}

export interface Skill {
  icon: string;
  name: string;
  desc: string;
  color: string;
}

export interface Education {
  degree: string;
  uni: string;
  detail: string;
  gpa: string;
}

export interface BlogPost {
  id: number;
  category: string;
  date: string;
  readTime: string;
  emoji: string;
  bg: string;
  title: string;
  excerpt: string;
  tags: string[];
  body: string;
}

// ─── EXPERIENCE ───────────────────────────────────────────────────────
export const experiences: Experience[] = [
  {
    date: "October 2023 — Present",
    role: "English Language Teacher",
    place: "Ocidiomes",
    flag: "spain",
    dotColor: "#C1440E",
  },
  {
    date: "July 2025 — August 2025",
    role: "English Language Teacher — Summer Camp",
    place: "Colegio Luis Vives, Palma de Mallorca",
    flag: "spain",
    dotColor: "#C9A84C",
  },
  {
    date: "September 2023 — November 2023",
    role: "English Language Teacher",
    place: "Green House Academy",
    flag: "spain",
    dotColor: "#C1440E",
  },
  {
    date: "July 2023 — August 2023",
    role: "English Language Teacher — Summer Camp",
    place: "Colegio Luis Vives, Palma",
    flag: "spain",
    dotColor: "#C9A84C",
  },
  {
    date: "January 2022 — June 2022",
    role: "English Language Teacher",
    place: "Institut Saint Stanislas",
    flag: "belgium",
    dotColor: "#2E6B8A",
  },
  {
    date: "November 2020 — April 2022",
    role: "Teacher — IELTS Coaching",
    place: "Nextstep IELTS Coaching Center",
    flag: "bangladesh",
    dotColor: "#1E7A48",
  },
  {
    date: "February 2018 — October 2020",
    role: "Lecturer, Department of English",
    place: "University of International Business and Technology (UIBT)",
    flag: "bangladesh",
    dotColor: "#1E7A48",
  },
  {
    date: "May 2017 — January 2018",
    role: "Teacher, Department of English",
    place: "Bangladesh International Tutorial (BIT)",
    flag: "bangladesh",
    dotColor: "#1E7A48",
  },
];

// ─── SKILLS ───────────────────────────────────────────────────────────
export const skills: Skill[] = [
  {
    icon: "◈",
    name: "Communication",
    desc: "Excellent verbal and written communication with students, parents, and colleagues across cultures.",
    color: "#C1440E",
  },
  {
    icon: "◈",
    name: "IELTS Coaching",
    desc: "Expert preparation for IELTS examinations, guiding students to achieve their target band scores.",
    color: "#C9A84C",
  },
  {
    icon: "◈",
    name: "Classroom Presence",
    desc: "Dynamic presentation skills that keep students engaged from primary school age to university level.",
    color: "#4A8FAB",
  },
  {
    icon: "◈",
    name: "Report Writing",
    desc: "Strong academic writing ability including progress reports, lesson plans, and curriculum development.",
    color: "#C1440E",
  },
  {
    icon: "◈",
    name: "Digital Literacy",
    desc: "Proficient with educational technology, computer tools, and modern teaching platforms.",
    color: "#C9A84C",
  },
  {
    icon: "◈",
    name: "Adaptability",
    desc: "Proven ability to thrive in international environments — Spain, Belgium, and Bangladesh.",
    color: "#4A8FAB",
  },
];

// ─── EDUCATION ────────────────────────────────────────────────────────
export const education: Education[] = [
  {
    degree: "Master of Business Administration",
    uni: "Jagannath University, Dhaka",
    detail: "Department of Accounting & Information Systems · Batch 6 · 2016",
    gpa: "3.52 / 4.00",
  },
  {
    degree: "Bachelor of Business Administration",
    uni: "Jagannath University, Dhaka",
    detail: "Department of Accounting & Information Systems · Batch 6 · 2015",
    gpa: "3.54 / 4.00",
  },
];

// ─── BLOG POSTS ───────────────────────────────────────────────────────
export const blogPosts: BlogPost[] = [
  {
    id: 1,
    category: "Teaching Life",
    date: "March 2025",
    readTime: "5 min read",
    emoji: "🌅",
    bg: "linear-gradient(135deg, #F5E8D8 0%, #E8C9A0 100%)",
    title: "My First Summer Camp in Mallorca: What I Learned",
    excerpt:
      "Running a summer English camp under the Spanish sun was everything I hoped for — and nothing I expected. Here is what three weeks in Palma taught me about teaching.",
    tags: ["Spain", "Summer Camp", "Teaching Tips", "Mallorca"],
    body: `
      <p>When I first arrived at Colegio Luis Vives for the summer camp in July 2023, I had no idea what to expect. Bangladesh, Belgium, Dhaka lecture halls — but this was my first immersive summer programme in Spain, and the energy was unlike anything I had experienced before.</p>
      <h3>The Language of Play</h3>
      <p>Spanish children, I quickly discovered, learn English best when they forget they are learning at all. The moment I introduced drama activities, role-playing scenarios, and music into the lessons, the classroom transformed. Students who had been quiet for three days suddenly became storytellers.</p>
      <blockquote>"If you talk to a man in a language he understands, that goes to his head. If you talk to him in his language, that goes to his heart." — Nelson Mandela</blockquote>
      <h3>Lessons from the Mediterranean</h3>
      <p>Living in Palma while teaching gave me a profound appreciation for context-based learning. I started weaving local geography, food, and festivals into every lesson. We wrote postcards from Palma's Old Town. We counted windows in the Cathedral. Language became geography, culture, and history all at once.</p>
      <p>The most rewarding moment? On the final day, a shy nine-year-old named Marcos stood up and delivered a two-minute speech about his favourite place in Mallorca — entirely in English. His parents were in tears. So was I.</p>
      <h3>What I Carry Forward</h3>
      <p>Every teaching context has its own rhythm. Spain taught me to slow down, to trust the process, and to let joy lead. I returned for a second summer camp in 2025 — and I hope to keep returning for many more years to come.</p>
    `,
  },
  {
    id: 2,
    category: "Teaching Tips",
    date: "January 2025",
    readTime: "6 min read",
    emoji: "📚",
    bg: "linear-gradient(135deg, #E1EEF5 0%, #B5D4E8 100%)",
    title: "7 Activities That Make IELTS Preparation Actually Enjoyable",
    excerpt:
      "After two years coaching IELTS students in Dhaka, I developed a toolkit of activities that reduce anxiety, build confidence, and — dare I say — make exam prep fun.",
    tags: ["IELTS", "Exam Prep", "Teaching Tips", "Bangladesh"],
    body: `
      <p>IELTS preparation has a reputation for being dry, stressful, and repetitive. After coaching hundreds of students at Nextstep in Dhaka between 2020 and 2022, I made it my mission to change that — one lesson at a time.</p>
      <h3>1. Podcast Shadowing</h3>
      <p>I had students listen to short BBC World Service clips and shadow the speaker sentence by sentence. It improved pronunciation, rhythm, and listening comprehension simultaneously. Within weeks, students noticed a tangible difference in their speaking tests.</p>
      <h3>2. "Agree to Disagree" Debates</h3>
      <p>I assigned random IELTS essay topics and made students argue the side they personally disagreed with. This forced them to think critically, use formal discourse markers, and build vocabulary for nuanced argument — exactly what the Writing Task 2 demands.</p>
      <blockquote>The best IELTS preparation is not memorising band descriptors. It is developing a genuine relationship with the English language.</blockquote>
      <h3>3. The Weekly Reading Newspaper Club</h3>
      <p>Every Monday, we read one Guardian article together. Students took turns summarising paragraphs, identifying the author's tone, and asking each other comprehension questions. It replicated the Academic Reading section while keeping discussions lively and topical.</p>
      <h3>Real Results</h3>
      <p>Out of the students I coached intensively over six months in Dhaka, the majority improved by at least one full band score. More importantly, they left with tools and habits they could use long after the exam was over.</p>
    `,
  },
  {
    id: 3,
    category: "Reflections",
    date: "September 2024",
    readTime: "4 min read",
    emoji: "🇧🇪",
    bg: "linear-gradient(135deg, #EDE8F5 0%, #C8B8E8 100%)",
    title: "Six Months in Belgium: What a Brussels Winter Teaches You",
    excerpt:
      "Teaching at Institut Saint Stanislas in Belgium was one of the most formative chapters of my career. The cold, the culture, and the classrooms shaped me in unexpected ways.",
    tags: ["Belgium", "International Teaching", "Reflections", "Europe"],
    body: `
      <p>January 2022. I arrived in Belgium with two suitcases and a great deal of nervous excitement. Institut Saint Stanislas in Namur would be my classroom for the next six months — and the whole of Belgium would be my education.</p>
      <h3>Teaching Across Cultures</h3>
      <p>Belgian students were remarkably different from those I had taught in Bangladesh. They were confident, opinionated, and expected their teacher to engage with them as equals. This pushed me to develop a more Socratic, dialogue-based teaching style — asking questions rather than delivering answers.</p>
      <p>I learned quickly that silence in a Belgian classroom was not disrespect. It was thinking. I had to resist the urge to fill every quiet moment and instead trust my students to arrive at their own conclusions.</p>
      <blockquote>Teaching abroad does not just expand your professional toolkit. It fundamentally rewires how you see the world and your place in it.</blockquote>
      <h3>The Belgian Gift: Patience</h3>
      <p>The grey winter skies, the long commutes, the language adjustments — Belgium taught me patience. And patience, I have come to believe, is the single most important quality an English language teacher can possess.</p>
      <h3>Coming Home to a New Version of Myself</h3>
      <p>When I left Belgium in June 2022, I carried with me a new understanding of European educational philosophy and a much deeper respect for my students' individual journeys.</p>
    `,
  },
  {
    id: 4,
    category: "Classroom Ideas",
    date: "November 2024",
    readTime: "5 min read",
    emoji: "🎭",
    bg: "linear-gradient(135deg, #F5EDE1 0%, #E8C8A0 100%)",
    title: "Drama in the Classroom: Why Role-Play Changes Everything",
    excerpt:
      "From shy beginners to reluctant teenagers, drama-based activities have transformed more of my students than any textbook exercise. Here is how I use them.",
    tags: ["Drama", "Methodology", "Classroom Activities", "Speaking"],
    body: `
      <p>I discovered the power of drama in an unlikely place: a university lecture hall in Dhaka in 2018. I had a group of business students who dreaded speaking English aloud. Their grammar was solid, their vocabulary was decent — but the moment I asked them to speak, they froze.</p>
      <h3>Enter the Persona</h3>
      <p>One afternoon, out of desperation, I asked each student to invent a character — a journalist, a chef, a lost tourist — and conduct a five-minute conversation in their new identity. The transformation was instant. Freed from the fear of being "themselves" and making mistakes, they spoke fluently, creatively, and with genuine enjoyment.</p>
      <p>This simple activity became the cornerstone of my teaching philosophy: lower the affective filter, and language flows.</p>
      <h3>Practical Drama Techniques I Use Regularly</h3>
      <p><strong>Hot Seating:</strong> One student sits in the "hot seat" as a historical figure or fictional character while the class interviews them.</p>
      <p><strong>Freeze Frame:</strong> Students act out a scenario, I call "freeze," and they must justify what their character is thinking or feeling at that exact moment.</p>
      <p><strong>News Broadcast:</strong> Groups prepare and deliver a live news report on a topic of their choice. It integrates reading, speaking, listening, and media literacy in one activity.</p>
      <blockquote>Language is performance. The classroom should feel like a stage where every student has a role to play and a voice worth hearing.</blockquote>
    `,
  },
  {
    id: 5,
    category: "Life in Spain",
    date: "July 2024",
    readTime: "3 min read",
    emoji: "🌺",
    bg: "linear-gradient(135deg, #F5E1E1 0%, #E8A0A0 100%)",
    title: "Living and Teaching in Palma de Mallorca: A Love Letter",
    excerpt:
      "Two years in, Palma de Mallorca still takes my breath away every single morning. Here is what life as an English teacher on this beautiful island really looks like.",
    tags: ["Palma", "Life in Spain", "Expat Life", "Mallorca"],
    body: `
      <p>Every morning, I walk past the same old stone walls, the same bougainvillea spilling over iron gates, and I still cannot quite believe this is where I live and teach. Palma de Mallorca has a way of making the extraordinary feel ordinary — and that is perhaps its greatest gift.</p>
      <h3>A City That Teaches You</h3>
      <p>Living in Palma has made me a better teacher of English because it has made me a better student of everything else. I am learning Spanish. I am learning Catalan phrases from my neighbours. Every day of life here is a language lesson.</p>
      <p>I often think about my students in Bangladesh and Belgium who were learning English as a foreign language. I now know, viscerally, what that feels like. That empathy has made me infinitely more patient and creative in the classroom.</p>
      <h3>The Teaching Community</h3>
      <p>The teachers and staff at Ocidiomes and Colegio Luis Vives have been extraordinarily welcoming. There is a warmth and professionalism here that aligns beautifully with my own teaching philosophy.</p>
      <blockquote>Mallorca taught me that the best classrooms are the ones that feel like home.</blockquote>
      <h3>Looking Ahead</h3>
      <p>I plan to continue building my life and career in Spain. There is so much more to learn, so many more students to inspire, and so many more mornings to spend watching the Mediterranean light change over the bay. I am exactly where I need to be.</p>
    `,
  },
  {
    id: 6,
    category: "Personal Story",
    date: "April 2024",
    readTime: "4 min read",
    emoji: "🎓",
    bg: "linear-gradient(135deg, #E1F0E8 0%, #A0C8B0 100%)",
    title: "From MBA to English Teacher: Why I Changed My Path",
    excerpt:
      "I graduated from Jagannath University with an MBA and a high CGPA. So why did I end up teaching English? Here is the honest story behind my career change.",
    tags: ["Career Change", "Personal Story", "Teaching Vocation"],
    body: `
      <p>People are often surprised to learn that I hold an MBA from Jagannath University, not a degree in English Literature or Education. My undergraduate and postgraduate studies were in Accounting and Information Systems. My first job after graduation was as a Senior Officer at Keya Cosmetics.</p>
      <h3>The Moment Everything Changed</h3>
      <p>In 2017, a friend invited me to cover a few English classes at Bangladesh International Tutorial while their regular teacher was unwell. I said yes without much thought. Three weeks later, I had not left. The classroom had claimed me.</p>
      <p>There was something about the moment a student suddenly understood a concept they had been struggling with — the light in their eyes, the small exhale of relief — that felt more meaningful than anything I had experienced in a corporate office.</p>
      <h3>What My MBA Gave Me</h3>
      <p>Far from being irrelevant, my business background has been a genuine asset in the classroom. I am organised, analytical, and comfortable with data. I design lesson plans the way I used to design reports: with clear objectives, structured timelines, and measurable outcomes.</p>
      <blockquote>The best career decisions are rarely the planned ones. They are the ones that scare you just enough to know they matter.</blockquote>
      <h3>No Regrets</h3>
      <p>Eight years in, I have never once wished I had stayed in the corporate world. Teaching is demanding, humbling, and endlessly surprising. Every classroom is a new story. Every student is a new reason to be better at what you do.</p>
    `,
  },
];
