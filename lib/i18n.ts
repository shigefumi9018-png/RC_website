/**
 * Lightweight i18n dictionary.
 * English is the default; Japanese is the secondary language.
 * Strings are consumed via the useT() hook (see components/LanguageProvider).
 */

export const locales = ["en", "ja"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export const localeNames: Record<Locale, string> = {
  en: "EN",
  ja: "日本語",
};

type Dict = {
  nav: { services: string; approach: string; stack: string; team: string; contact: string };
  hero: {
    eyebrow: string;
    l1: string; l2: string; l3a: string; em: string; l3b: string;
    lede: string;
    cta: string; secondary: string;
    stats: { dt: string; dd: string }[];
  };
  trust: { label: string; items: string[] };
  services: {
    kicker: string; title: string; sub: string;
    items: { num: string; title: string; body: string; tags: string[] }[];
  };
  approach: {
    kicker: string; title: string; sub_a: string; sub_em: string; sub_b: string;
    steps: { no: string; title: string; body: string }[];
  };
  stack: {
    kicker: string; title: string; sub: string;
    columns: { title: string; items: string[] }[];
  };
  team: {
    kicker: string; name: string; role: string; bio: string; quote: string; cta: string;
  };
  contact: {
    kicker: string; title: string; sub: string;
    formTitle: string; formSub: string;
    name: string; namePh: string;
    email: string; emailPh: string;
    company: string; companyPh: string;
    help: string; helpPh: string; services: string[];
    message: string; messagePh: string;
    submit: string; submitting: string;
    successTitle: string; successBody: string; sendAnother: string;
    errorGeneric: string;
    fineprint: string;
    points: { label: string; value: string }[];
    bookingTitle: string; bookingSub: string; fallback: string; fallbackLink: string;
  };
  footer: { blurb: string; location: string; schedule: string; rights: string; tagline: string };
};

const en: Dict = {
  nav: { services: "Services", approach: "Approach", stack: "Stack", team: "Team", contact: "Contact us" },
  hero: {
    eyebrow: "Tokyo, Japan",
    l1: "We build software", l2: "and the teams", l3a: "that ", em: "ship", l3b: " it.",
    lede:
      "A3 Tech Group is a Tokyo-based engineering studio. We deliver production full-stack systems, applied AI, and the kind of hands-on AI training that turns a team into a capable one.",
    cta: "Contact us", secondary: "What we do",
    stats: [
      { dt: "10+ yrs", dd: "combined senior delivery" },
      { dt: "Full-stack", dd: "web · mobile · cloud · AI" },
      { dt: "Worldwide", dd: "remote-friendly delivery" },
    ],
  },
  trust: {
    label: "Trusted across",
    items: ["Fintech", "SaaS", "E-commerce", "Healthcare", "Manufacturing", "EdTech"],
  },
  services: {
    kicker: "01 — Services",
    title: "What we do, and do well.",
    sub: "One senior team across the whole lifecycle — from a blank repository to a system your engineers can own and your business can grow on.",
    items: [
      { num: "01", title: "Full-Stack Development", body: "End-to-end product engineering: clean APIs, considered front-ends, and infrastructure that doesn't wake you at 3 a.m. We write code your team will still understand a year from now.", tags: ["Web apps", "APIs", "Cloud", "DevOps"] },
      { num: "02", title: "Applied AI & LLM Systems", body: "RAG pipelines, agents, and model integrations built for the real world — evaluated, observable, and safe to put in front of customers. AI that earns its place in the product.", tags: ["RAG", "Agents", "Fine-tuning", "Evals"] },
      { num: "03", title: "AI Training for Teams", body: "Practical, hands-on programs that take your engineers from curious to confident — prompt engineering, building with LLMs, and shipping AI features responsibly. Taught by people who ship daily.", tags: ["Workshops", "Mentoring", "Curriculum"] },
      { num: "04", title: "Architecture & Consulting", body: "Technical due diligence, system design reviews, and a second set of senior eyes when the stakes are high. Honest assessments, not billable theatre.", tags: ["Audits", "System design", "Scaling"] },
    ],
  },
  approach: {
    kicker: "02 — Approach",
    title: "Craft over noise.",
    sub_a: "We believe in ", sub_em: "steady, deliberate improvement", sub_b: " — applied to how software gets made. Small steps, shipped often. Nothing goes out that we wouldn't run ourselves.",
    steps: [
      { no: "I", title: "Listen first", body: "We start with your constraints and your customers — not our favourite framework. The right tool is the one your team can live with." },
      { no: "II", title: "Build in the open", body: "Short cycles, visible progress, working software early. You see decisions as they happen, never a black box." },
      { no: "III", title: "Leave it better", body: "We hand over documented, tested systems — and the knowledge to run them. Our goal is to make ourselves optional." },
    ],
  },
  stack: {
    kicker: "03 — Stack",
    title: "The tools we reach for.",
    sub: "Pragmatic, proven, and chosen per project — never cargo-culted.",
    columns: [
      { title: "Frontend", items: ["React", "Next.js", "TypeScript", "Vue", "Tailwind"] },
      { title: "Backend", items: ["Node.js", "Go", "Python", "PostgreSQL", "GraphQL"] },
      { title: "AI / ML", items: ["Claude & OpenAI", "LangChain", "PyTorch", "Vector DBs", "RAG"] },
      { title: "Cloud & Ops", items: ["AWS", "GCP", "Docker", "Kubernetes", "Terraform"] },
    ],
  },
  team: {
    kicker: "04 — Leadership",
    name: "Daniel — Hiro Tanaka",
    role: "Chief Technology Officer",
    bio: "Daniel leads engineering at A3 Tech Group. He has spent his career at the intersection of solid software and applied AI — architecting systems, mentoring engineers, and keeping delivery honest. He believes good technology is quiet: it works, it lasts, and it gets out of the way.",
    quote: "“We don't sell complexity. We sell software that holds up — and teams that can carry it forward without us.”",
    cta: "Talk with Daniel",
  },
  contact: {
    kicker: "05 — Contact",
    title: "Let's build something that lasts.",
    sub: "Tell us what you're working on, or book a 30-minute call — no slide deck, just a straight conversation.",
    formTitle: "Send us a message",
    formSub: "We reply to every enquiry within one business day.",
    name: "Name *", namePh: "Your name",
    email: "Email *", emailPh: "you@company.com",
    company: "Company", companyPh: "Company (optional)",
    help: "How can we help?", helpPh: "Select a topic…",
    services: ["Full-Stack Development", "Applied AI & LLM Systems", "AI Training for Teams", "Architecture & Consulting", "Something else"],
    message: "Message *", messagePh: "A few lines about your project, timeline, or goals…",
    submit: "Send message", submitting: "Sending…",
    successTitle: "Thank you — message received.",
    successBody: "We'll be in touch shortly. If it's urgent, feel free to book a call on the right.",
    sendAnother: "Send another",
    errorGeneric: "Something went wrong.",
    fineprint: "By sending this you agree to be contacted about your enquiry. We never share your details.",
    points: [
      { label: "Location", value: "Tokyo, Japan" },
      { label: "Response", value: "Within 1 business day" },
      { label: "Languages", value: "English / 日本語" },
    ],
    bookingTitle: "Prefer to talk? Book a call",
    bookingSub: "Grab a 30-minute slot directly in our calendar.",
    fallback: "Trouble with the calendar? ",
    fallbackLink: "Open Calendly in a new tab →",
  },
  footer: {
    blurb: "Software engineering & AI, built in Tokyo.",
    location: "Tokyo, Japan",
    schedule: "Schedule a meeting →",
    rights: "All rights reserved.",
    tagline: "Dependable engineering, from Tokyo.",
  },
};

const ja: Dict = {
  nav: { services: "サービス", approach: "私たちの流儀", stack: "技術スタック", team: "チーム", contact: "お問い合わせ" },
  hero: {
    eyebrow: "東京, 日本",
    l1: "ソフトウェアと、", l2: "それを動かす", l3a: "", em: "チーム", l3b: "をつくる。",
    lede:
      "A3 Tech Group は東京を拠点とするエンジニアリングスタジオです。本番品質のフルスタック開発、実用的なAI、そしてチームを真に強くする実践的なAI研修を提供します。",
    cta: "お問い合わせ", secondary: "事業内容",
    stats: [
      { dt: "10年以上", dd: "シニアによる開発実績" },
      { dt: "フルスタック", dd: "Web・モバイル・クラウド・AI" },
      { dt: "世界中へ", dd: "リモート対応の開発" },
    ],
  },
  trust: {
    label: "対応領域",
    items: ["フィンテック", "SaaS", "EC", "ヘルスケア", "製造業", "EdTech"],
  },
  services: {
    kicker: "01 — サービス",
    title: "得意なことを、確実に。",
    sub: "ひとつのシニアチームが全工程を担当します。まっさらなリポジトリから、エンジニアが運用でき、事業を成長させられるシステムまで。",
    items: [
      { num: "01", title: "フルスタック開発", body: "エンドツーエンドのプロダクト開発。明快なAPI、考え抜かれたフロントエンド、夜中に起こされないインフラ。一年後もチームが理解できるコードを書きます。", tags: ["Webアプリ", "API", "クラウド", "DevOps"] },
      { num: "02", title: "実用AI・LLMシステム", body: "RAGパイプライン、エージェント、モデル統合を現実の業務向けに構築。評価され、観測でき、顧客に届けても安全。プロダクトに本当に貢献するAIを。", tags: ["RAG", "エージェント", "ファインチューニング", "評価"] },
      { num: "03", title: "チーム向けAI研修", body: "エンジニアを「興味がある」から「自信を持って使える」へ導く実践的プログラム。プロンプト設計、LLM開発、責任あるAI機能の実装まで。日々開発する現場のエンジニアが指導します。", tags: ["ワークショップ", "メンタリング", "カリキュラム"] },
      { num: "04", title: "アーキテクチャ・技術顧問", body: "技術デューデリジェンス、システム設計レビュー、重要な局面でのシニアによる第二の視点。形式的な作業ではなく、誠実な評価を。", tags: ["監査", "システム設計", "スケーリング"] },
    ],
  },
  approach: {
    kicker: "02 — 私たちの流儀",
    title: "ノイズより、技を。",
    sub_a: "私たちは", sub_em: "着実で意図的な改善", sub_b: "を信じ、それをソフトウェアづくりに適用します。小さく、こまめに届ける。自分たちで運用したくないものは、世に出しません。",
    steps: [
      { no: "I", title: "まず、聴く", body: "好きなフレームワークではなく、お客様の制約と顧客から始めます。正しい道具とは、チームが無理なく使えるものです。" },
      { no: "II", title: "オープンに作る", body: "短いサイクル、見える進捗、早い段階で動くソフトウェア。意思決定はその場で共有され、ブラックボックスにはなりません。" },
      { no: "III", title: "より良くして去る", body: "文書化・テスト済みのシステムと、それを運用する知識をお渡しします。私たちの目標は、自分たちを不要にすることです。" },
    ],
  },
  stack: {
    kicker: "03 — 技術スタック",
    title: "私たちが選ぶ道具。",
    sub: "実用的で、実績があり、プロジェクトごとに選定します。流行で選ぶことはありません。",
    columns: [
      { title: "フロントエンド", items: ["React", "Next.js", "TypeScript", "Vue", "Tailwind"] },
      { title: "バックエンド", items: ["Node.js", "Go", "Python", "PostgreSQL", "GraphQL"] },
      { title: "AI / ML", items: ["Claude & OpenAI", "LangChain", "PyTorch", "ベクトルDB", "RAG"] },
      { title: "クラウド・運用", items: ["AWS", "GCP", "Docker", "Kubernetes", "Terraform"] },
    ],
  },
  team: {
    kicker: "04 — リーダーシップ",
    name: "Daniel — Hiro Tanaka",
    role: "最高技術責任者 (CTO)",
    bio: "Daniel は A3 Tech Group のエンジニアリングを統括します。堅実なソフトウェアと実用的なAIの交点でキャリアを重ね、システムを設計し、エンジニアを育て、誠実な開発を貫いてきました。良い技術は静かであるべきだ——動き、長持ちし、邪魔をしない——というのが彼の信条です。",
    quote: "「私たちは複雑さを売りません。長く使えるソフトウェアと、私たち抜きでも前へ進めるチームをお届けします。」",
    cta: "Daniel に相談する",
  },
  contact: {
    kicker: "05 — お問い合わせ",
    title: "長く残るものを、一緒に。",
    sub: "取り組んでいることをお聞かせください。あるいは30分の通話をご予約を——資料は不要、率直にお話ししましょう。",
    formTitle: "メッセージを送る",
    formSub: "いただいたお問い合わせには、1営業日以内に返信します。",
    name: "お名前 *", namePh: "お名前",
    email: "メール *", emailPh: "you@company.com",
    company: "会社名", companyPh: "会社名（任意）",
    help: "ご相談内容", helpPh: "トピックを選択…",
    services: ["フルスタック開発", "実用AI・LLMシステム", "チーム向けAI研修", "アーキテクチャ・技術顧問", "その他"],
    message: "メッセージ *", messagePh: "プロジェクト、スケジュール、目標などを数行でお書きください…",
    submit: "送信する", submitting: "送信中…",
    successTitle: "ありがとうございます。受け付けました。",
    successBody: "まもなくご連絡します。お急ぎの場合は、右側から通話のご予約もどうぞ。",
    sendAnother: "もう一度送る",
    errorGeneric: "問題が発生しました。",
    fineprint: "送信することで、お問い合わせに関するご連絡に同意したものとみなします。お客様の情報を共有することはありません。",
    points: [
      { label: "所在地", value: "東京, 日本" },
      { label: "返信", value: "1営業日以内" },
      { label: "対応言語", value: "English / 日本語" },
    ],
    bookingTitle: "話して決めたい方は、通話予約を",
    bookingSub: "カレンダーから30分の枠を直接ご予約いただけます。",
    fallback: "カレンダーが表示されませんか？ ",
    fallbackLink: "Calendly を新しいタブで開く →",
  },
  footer: {
    blurb: "ソフトウェア開発とAIを、東京から。",
    location: "東京, 日本",
    schedule: "ミーティングを予約 →",
    rights: "All rights reserved.",
    tagline: "確かなものづくりを、東京から。",
  },
};

export const dictionaries: Record<Locale, Dict> = { en, ja };
