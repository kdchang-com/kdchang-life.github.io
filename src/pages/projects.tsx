import type { ReactNode } from "react";
import {
  BookOpen,
  Bookmark,
  Circle,
  CupSoda,
  ExternalLink,
  Gamepad2,
  Landmark,
  MessageSquareText,
  Network,
  Newspaper,
  Rocket,
  Sparkles,
  Stamp,
  Star,
  Trophy,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import Layout from "@theme/Layout";
import styles from "./projects.module.css";

type Project = {
  icon: LucideIcon;
  image?: string;
  title: string;
  desc: string;
  tags: string[];
  status: "live" | "wip" | "archived";
  url?: string;
  github?: string;
};

/* ── Products ─────────────────────────────────────────── */
const products: Project[] = [
  {
    icon: BookOpen,
    image: "/img/projects/lifepicksbookstore.webp",
    title: "LifePicks 人生推書店",
    desc: "人生推書店是一間專為在人生路上感到徬徨、迷惘或卡關的你打造的虛擬獨立書店。無論你正在探索自我、發展事業、經營感情、追求成長、維護健康，或是夢想著財富自由，這裡都有一本書在等著你。",
    tags: ["Bookstore", "Reading", "Curation"],
    status: "live",
    url: "https://www.lifepicksbookstore.com/",
  },
  {
    icon: Bookmark,
    image: "/img/projects/careertags.webp",
    title: "CareerTags 職涯書籤",
    desc: "CareerTags 是一個瀏覽器擴充功能，幫助使用者一鍵收藏跨平台職缺和學習資源，系統化管理你的求職進度及職涯成長。",
    tags: ["Chrome Extension", "Career Development", "Knowledge Management"],
    status: "live",
    url: "https://www.careertags.com/",
  },
  {
    icon: Stamp,
    image: "/img/projects/explorestamp.webp",
    title: "ExploreStamp 探索印記",
    desc: "ExploreStamp 是一本隨身的虛擬集章手冊。到博物館、古蹟、老車站、市集、夜市與觀景台現場打卡，收集印章、記錄照片，並把旅程做成明信片分享。",
    tags: ["Mobile App", "Travel", "Stamp Collecting"],
    status: "live",
    url: "https://www.explorestamp.com/",
  },
  // {
  //   icon: GraduationCap,
  //   image: "/img/projects/certgym.webp",
  //   title: "CertGym 證照道館",
  //   desc: "CertGym 是一個專為考取各類專業證照學習者設計的行動應用。透過閃卡、題庫、錯題收藏，讓備考變得有趣又高效。",
  //   tags: ["Education", "Certification", "Learning"],
  //   status: "live",
  //   url: "https://www.certgym.com/",
  // },
  // {
  //   icon: Users,
  //   image: "/img/projects/relationdeck.webp",
  //   title: "RelationDeck 關係盒子",
  //   desc: "RelationDeck 是一款幫助使用者提升人際關係的互動卡牌遊戲，透過有趣的情境和挑戰，增進溝通技巧和情感理解。",
  //   tags: ["Education", "Relationship", "Game"],
  //   status: "live",
  //   url: "https://www.relationdeck.com/",
  // },
  // {
  //   icon: MapPin,
  //   image: "/img/projects/exploretags.webp",
  //   title: "ExploreTags 漫旅書籤",
  //   desc: "ExploreTags 是一款城市探索打卡 App，讓你透過任務式打卡挑戰，主動走進城市的每個角落。",
  //   tags: ["Mobile App", "Travel"],
  //   status: "wip",
  //   url: "https://www.exploretags.com/",
  // },
  // {
  //   icon: Flower2,
  //   image: "/img/projects/stoazen.webp",
  //   title: "StoaZen 斯多禪",
  //   desc: "StoaZen 整合斯多葛哲學、心理學、禪宗的精要智慧，幫助你建立清晰的人生觀與內在秩序。",
  //   tags: ["Mobile App", "Zen", "Stoicism", "Self-Help"],
  //   status: "wip",
  //   url: "https://www.stoazen.com/",
  // },
  {
    icon: Sparkles,
    image: "/img/projects/kd-ai-hub.webp",
    title: "AI 自學補給站",
    desc: "AI Learning Station 是一個最溫馨有趣的 AI 自學社群平台。從基礎觀念、工具挑選、 提示詞模板到工作流自動化再到 Vibe Coding。照著學習地圖走，一步一步把 AI 變成你的日常工具。",
    tags: ["Education", "GenAI", "AI Course"],
    status: "live",
    url: "https://ai.kdchang.com/",
  },
  {
    icon: Network,
    image: "/img/projects/coderbridge.webp",
    title: "CoderBridge：技術內容分享平台",
    desc: "為開發者而生的技術內容創作分享與職涯發展平台。連結全世界高品質的技術內容、優秀的開發者和工作機會，協助開發者建立技能、人際連結和打造技術職涯。",
    tags: ["Curation", "Community", "Tech Blog"],
    status: "archived",
    url: "https://www.facebook.com/CoderBridgeTW",
  },
  {
    icon: Newspaper,
    image: "/img/projects/techbridge-weekly.webp",
    title: "TechBridge Weekly 技術週刊",
    desc: "每週精選科技、創業與開發者相關新知，曾累積數千名訂閱讀者，開啟許多工程師的技術視野。",
    tags: ["Newsletter", "Curation", "Open Source"],
    status: "archived",
    url: "https://blog.techbridge.cc",
    github: "https://github.com/TechBridgeWeekly",
  },
];

/* ── Tools ─────────────────────────────────────────── */
const tools: Project[] = [
  {
    icon: MessageSquareText,
    image: "/img/projects/happyprompt.webp",
    title: "HappyPrompt",
    desc: "HappyPrompt 是一款瀏覽器擴充功能，提供 Prompt 提示詞管理工具與 AI 知識庫，讓你輕鬆儲存、整理和重複使用常用提示詞，大幅提升使用 AI 工具的效率。",
    tags: ["Chrome Extension", "JavaScript", "GenAI", "Prompt Engineering"],
    status: "live",
    url: "https://chromewebstore.google.com/detail/happyprompt-prompt-%E6%8F%90%E7%A4%BA%E8%A9%9E%E7%AE%A1%E7%90%86%E5%B7%A5/egecphncaagaeolknghbdgelpjfihkdj?hl=zh-tw",
  },
  // {
  //   icon: House,
  //   title: "HomePocket 口袋找房",
  //   desc: "HomePocket 是一款專為找房族打造的 Chrome 擴充功能，幫助你在瀏覽各大房屋平台時，一鍵收藏、整理與分析房源資訊，讓買房與租屋決策更有效率、更有系統。",
  //   tags: ["Web", "Real Estate"],
  //   status: "wip",
  // },
];

/* ── Game ─────────────────────────────────────────── */
const games: Project[] = [
  {
    icon: CupSoda,
    image: "/img/projects/teabarstory.jpg",
    title: "手搖飲物語 Tea Bar Story",
    desc: "研發配方、招募店員、跟上每週的流行趨勢。五個店面各有一個挑戰週要達標，把一台夜市攤車做成全球排隊的手搖飲品牌。",
    tags: ["Browser Game", "Management", "Roguelite"],
    status: "live",
    url: "https://www.teabarstory.com",
  },
  {
    icon: Rocket,
    image: "/img/projects/garagetounicorn.jpg",
    title: "車庫獨角獸物語 Garage to Unicorn",
    desc: "從爸媽家的車庫起步，開發產品、組建團隊、說服投資人，在現金燒光之前把公司做到估值 10 億美元。",
    tags: ["Browser Game", "Startup", "Roguelite"],
    status: "live",
    url: "https://www.garagetounicorn.com",
  },
  {
    icon: Landmark,
    image: "/img/projects/90daystocityhall.png",
    title: "市政廳物語 90 Days to City Hall",
    desc: "安排行程、組建競選團隊、決定競選路線，撐過突發事件，在開票夜拿下新港市。當選後解鎖四年任期的治理模式，還能挑戰連任。",
    tags: ["Browser Game", "Election", "Roguelite"],
    status: "live",
    url: "https://www.90daystocityhall.com",
  },
  {
    icon: Trophy,
    image: "/img/projects/nextbaseballace.png",
    title: "王牌球探物語 Next Baseball Ace",
    desc: "擔任職棒球團的新球探，跑遍全島球場看比賽、做測試、做家訪，撐過三次球探會議，在選秀會挑出下一位王牌。看得準不準，三年後才知道。",
    tags: ["Browser Game", "Baseball", "Roguelite"],
    status: "live",
    url: "https://www.nextbaseballace.com",
  },
];

/* ── Status badge helper ── */
const statusConfig = {
  live: { color: "#22c55e", label: "上線中", cls: "statusLive" },
  wip: { color: "#eab308", label: "開發中", cls: "statusWip" },
  archived: { color: "#9ca3af", label: "已封存", cls: "statusArchived" },
} as const;

/* ── Tag class helper ── */
const tagClassMap = {
  Product: styles.tagProduct,
  Tool: styles.tagTool,
  Game: styles.tagGame,
} as const;

type Category = keyof typeof tagClassMap;

/* ── ProjectCard ── */
function ProjectCard({
  project,
  category,
}: {
  project: Project;
  category: Category;
}) {
  const st = statusConfig[project.status];
  const cardCls =
    category === "Product"
      ? styles.cardProduct
      : category === "Tool"
        ? styles.cardTool
        : styles.cardGame;
  const thumbCls =
    category === "Product"
      ? styles.thumbProduct
      : category === "Tool"
        ? styles.thumbTool
        : styles.thumbGame;

  return (
    <div className={`${styles.card} ${cardCls}`}>
      {/* Thumbnail */}
      <div className={`${styles.cardThumb} ${thumbCls}`}>
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className={styles.cardThumbImg}
          />
        ) : (
          <project.icon size={48} strokeWidth={1.5} aria-hidden />
        )}
      </div>

      <div className={styles.cardBody}>
        {/* Status */}
        <span className={`${styles.statusBadge} ${styles[st.cls]}`}>
          <Circle size={8} fill={st.color} color={st.color} aria-hidden />{" "}
          {st.label}
        </span>

        {/* Title & desc */}
        <h3 className={styles.cardTitle}>{project.title}</h3>
        <p className={styles.cardDesc}>{project.desc}</p>

        {/* Tags */}
        <div className={styles.cardTags}>
          {project.tags.map((t) => (
            <span key={t} className={`${styles.tag} ${tagClassMap[category]}`}>
              {t}
            </span>
          ))}
        </div>

        {/* Action buttons */}
        <div className={styles.cardActions}>
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnPrimary}
            >
              <ExternalLink size={15} aria-hidden /> 前往網站
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnSecondary}
            >
              <Star size={15} aria-hidden /> GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

/* ── ProjectSection ── */
function ProjectSection({
  id,
  icon: Icon,
  title,
  subtitle,
  items,
  category,
}: {
  id: string;
  icon: LucideIcon;
  title: string;
  subtitle: string;
  items: Project[];
  category: Category;
}) {
  return (
    <section id={id} className={styles.section}>
      <div className={styles.sectionHeader}>
        <Icon className={styles.sectionEmoji} size={28} aria-hidden />
        <h2 className={styles.sectionTitle}>{title}</h2>
      </div>
      <p className={styles.sectionSubtitle}>{subtitle}</p>
      <hr className={styles.divider} />
      <div className={styles.grid}>
        {items.map((p) => (
          <ProjectCard key={p.title} project={p} category={category} />
        ))}
      </div>
    </section>
  );
}

/* ── Page ── */
export default function Projects(): ReactNode {
  return (
    <Layout
      title="產品專案"
      description="由 KD Chang 張凱迪所打造的產品、工具與遊戲作品集，涵蓋網站、手機 App、瀏覽器外掛、開源工具與遊戲。"
    >
      {/* Hero */}
      <div className={styles.pageHero}>
        <h1 className={styles.pageTitle}>產品專案</h1>
        <p className={styles.pageDesc}>
          用 Builder
          思維持續打造人們喜愛的產品、工具與體驗。這裡收錄從零到一的產品開發嘗試、開源工具與各種有趣的
          Side Projects
        </p>
      </div>

      {/* Sticky tab anchor bar */}
      <div className={styles.tabBar}>
        <div className={styles.tabInner}>
          <a
            href="#products"
            className={`${styles.tabBtn} ${styles.tabBtnProduct}`}
          >
            <Rocket size={16} aria-hidden /> 產品
          </a>
          <a href="#games" className={`${styles.tabBtn} ${styles.tabBtnGame}`}>
            <Gamepad2 size={16} aria-hidden /> 遊戲
          </a>
          <a href="#tools" className={`${styles.tabBtn} ${styles.tabBtnTool}`}>
            <Wrench size={16} aria-hidden /> 工具
          </a>
        </div>
      </div>

      {/* Content */}
      <div className={styles.body}>
        <ProjectSection
          id="products"
          icon={Rocket}
          title="產品 Products"
          subtitle="從零到一打造、面向真實使用者的完整產品、內容與社群服務"
          items={products}
          category="Product"
        />
        <ProjectSection
          id="games"
          icon={Gamepad2}
          title="遊戲 Games"
          subtitle="出於有趣好玩而打造的互動遊戲體驗"
          items={games}
          category="Game"
        />
        <ProjectSection
          id="tools"
          icon={Wrench}
          title="工具 Tools"
          subtitle="解決特定問題的工具、模板與自動化程式碼"
          items={tools}
          category="Tool"
        />
      </div>
    </Layout>
  );
}
