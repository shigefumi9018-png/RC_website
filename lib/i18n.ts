/**
 * Lightweight i18n dictionary.
 * English is the default; Japanese is the secondary language.
 * Strings are consumed via the useT() hook (see components/LanguageProvider).
 */

export const locales = ["en", "ja", "zh"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export const localeNames: Record<Locale, string> = {
  en: "EN",
  ja: "日本語",
  zh: "中文",
};

type Dict = {
  nav: { skills: string; approach: string; collaboration: string; team: string; contact: string };
  hero: {
    eyebrow: string;
    l1: string; l2: string; l3a: string; em: string; l3b: string;
    lede: string;
    cta: string; secondary: string;
    stats: { dt: string; dd: string }[];
  };
  trust: { label: string; items: string[] };
  skills: {
    kicker: string; title: string; sub: string;
    items: { num: string; title: string; body: string; tags: string[]; alt: string }[];
  };
  experience: {
    kicker: string; title: string; sub: string; handleAll: string;
    items: { name: string; note: string }[];
  };
  approach: {
    kicker: string; title: string; sub_a: string; sub_em: string; sub_b: string;
    steps: { no: string; title: string; body: string }[];
  };
  stack: {
    kicker: string; title: string; sub: string;
    columns: { title: string; items: string[] }[];
  };
  collab: {
    kicker: string; title: string; lead: string;
    paras: string[]; noTech: string; closing: string; cta: string;
    slides: { alt: string; caption: string }[];
  };
  founders: {
    kicker: string; title: string; sub: string;
    people: { initials: string; name: string; role: string; bio: string; experience: string[] }[];
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
  nav: { skills: "Skills", approach: "Approach", collaboration: "Partnership", team: "Founders", contact: "Contact us" },
  hero: {
    eyebrow: "Tokyo, Japan",
    l1: "We build software", l2: "and the teams", l3a: "that ", em: "ship", l3b: " it.",
    lede:
      "A3 Tech Group is a Tokyo-based engineering studio. We deliver production full-stack systems, AI automation, and the kind of hands-on training and partnership that turns an idea into something real.",
    cta: "Contact us", secondary: "Our skills",
    stats: [
      { dt: "10+ yrs", dd: "combined senior delivery" },
      { dt: "Full-stack", dd: "web · cloud · AI · automation" },
      { dt: "Worldwide", dd: "remote-friendly partnership" },
    ],
  },
  trust: {
    label: "Trusted across",
    items: ["Fintech", "SaaS", "E-commerce", "Healthcare", "Manufacturing", "EdTech"],
  },
  skills: {
    kicker: "01 — Skills",
    title: "What we do, and do well.",
    sub: "Four core capabilities, one senior team. Swipe through to see how we can help.",
    items: [
      {
        num: "01", title: "Full-Stack Development",
        body: "End-to-end product engineering — clean APIs, considered front-ends, and infrastructure that holds up. From a blank repository to a system your team can own, we write code that still makes sense a year from now.",
        tags: ["Web apps", "APIs", "Cloud", "DevOps"],
        alt: "Developer writing full-stack code on a laptop",
      },
      {
        num: "02", title: "AI Automation",
        body: "We put AI to work on the things that quietly drain your week — support, data entry, reporting, routing. RAG pipelines, agents, and integrations that are evaluated, observable, and safe to run in production.",
        tags: ["LLM agents", "RAG", "Workflows", "Integrations"],
        alt: "Abstract visualisation of artificial intelligence and automation",
      },
      {
        num: "03", title: "CMS Solutions",
        body: "Content systems your marketing team will actually enjoy using. Headless or traditional, fast and SEO-ready, built so non-technical people can publish with confidence and never wait on a developer.",
        tags: ["Headless", "WordPress", "Sanity", "SEO"],
        alt: "Content management dashboard on a screen",
      },
      {
        num: "04", title: "CRM Solutions",
        body: "Customer systems that fit how you actually sell and support — not the other way around. Clean pipelines, useful automation, and the integrations that keep your sales, ops, and data in sync.",
        tags: ["Sales pipelines", "Automation", "Integrations", "Dashboards"],
        alt: "Sales and customer relationship management workspace",
      },
    ],
  },
  experience: {
    kicker: "Track record",
    title: "Experience you can build on.",
    sub: "We've done this before — with serious AI and engineering partners.",
    handleAll: "From the first idea to launch and the years after, we handle the whole stack — so you're never left stitching vendors together.",
    items: [
      { name: "Outlier", note: "AI training & model evaluation" },
      { name: "Mercor", note: "AI talent & data projects" },
      { name: "5+ full-stack apps", note: "web applications shipped end-to-end" },
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
      { title: "AI / Automation", items: ["Claude & OpenAI", "LangChain", "n8n / Zapier", "Vector DBs", "RAG"] },
      { title: "Cloud & Ops", items: ["AWS", "GCP", "Docker", "Kubernetes", "Terraform"] },
    ],
  },
  collab: {
    kicker: "04 — Partnership",
    title: "Built together, built to last.",
    lead: "We're genuinely excited to bring our expertise to the table and help turn your vision into something real.",
    paras: [
      "Every result we're proud of started the same way — with people who trusted one another and shared a clear goal. Projects always have their hard moments; what carries them through is steady communication, professionalism, and a real commitment to each other's success.",
      "To us, collaboration is more than working side by side. It's combining strengths, trading honest ideas, and opening doors none of us could reach alone. Good things get built through consistent effort and a genuine willingness to support the people around you.",
      "The partnerships we value most aren't about quick wins. They grow over time on a foundation of reliability, mutual respect, and shared long-term goals. When our partners and our team line up behind the same vision, the results tend to outlast the project itself.",
      "Right now we're looking to connect with professionals, founders, and business-minded people — especially across the United States and Canada — who value real, growth-oriented partnerships. Whether you're focused on expansion, new technology, or simply creating opportunities, we'd love to explore what we could build together.",
    ],
    noTech: "And you don't need to be technical to work with us. We bring the engineering and the AI know-how — what we ask for is openness, trust, and a real spirit of collaboration. That, more than anything, is what makes a partnership work.",
    closing: "Together, we can turn ideas into opportunities — and opportunities into something that lasts.",
    cta: "Start a conversation",
    slides: [
      { alt: "A team collaborating around a laptop", caption: "Shared goals, honest communication" },
      { alt: "Professionals in a friendly business meeting", caption: "Partnerships that grow over time" },
      { alt: "Two people shaking hands in agreement", caption: "Trust first — everything follows" },
      { alt: "A focused team working together in an office", caption: "Building something that lasts" },
    ],
  },
  founders: {
    kicker: "05 — Founders",
    title: "The people behind A3.",
    sub: "Two founders, one standard: do honest work, build real relationships, and leave every project better than we found it.",
    people: [
      {
        initials: "HT",
        name: "Daniel — Hiro Tanaka",
        role: "Co-Founder & CTO",
        bio: "Daniel leads engineering and applied AI at A3 Tech Group. He has spent his career at the intersection of solid software and practical AI — architecting systems, mentoring engineers, and keeping delivery honest. He believes good technology is quiet: it works, it lasts, and it gets out of the way.",
        experience: [
          "10+ years building and scaling production software",
          "Full-stack & AI systems across fintech, SaaS and e-commerce",
          "Leads architecture, code quality and AI automation",
        ],
      },
      {
        initials: "SK",
        name: "Shigefumi Kobayashi",
        role: "Co-Founder & CEO",
        bio: "Shigefumi connects the engineering to the business. He focuses on partnerships, client relationships, and making sure every project ladders up to a real outcome. His belief is simple: technology only matters when it helps people and businesses move forward.",
        experience: [
          "Background in business strategy and operations",
          "Builds long-term client and partner relationships",
          "Drives growth, delivery and partnership across markets",
        ],
      },
    ],
  },
  contact: {
    kicker: "06 — Contact",
    title: "Let's build something that lasts.",
    sub: "Tell us what you're working on, or book a 30-minute call — no slide deck, just a straight conversation.",
    formTitle: "Send us a message",
    formSub: "We reply to every enquiry within one business day.",
    name: "Name *", namePh: "Your name",
    email: "Email *", emailPh: "you@company.com",
    company: "Company", companyPh: "Company (optional)",
    help: "How can we help?", helpPh: "Select a topic…",
    services: ["Full-Stack Development", "AI Automation", "CMS Solutions", "CRM Solutions", "Partnership / collaboration", "Something else"],
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
      { label: "Languages", value: "English / 日本語 / 中文" },
    ],
    bookingTitle: "Prefer to talk? Book a call",
    bookingSub: "Grab a 30-minute slot directly in our calendar.",
    fallback: "Trouble with the calendar? ",
    fallbackLink: "Open Calendly in a new tab →",
  },
  footer: {
    blurb: "Software engineering, AI automation & partnership, built in Tokyo.",
    location: "Tokyo, Japan",
    schedule: "Schedule a meeting →",
    rights: "All rights reserved.",
    tagline: "Dependable engineering, from Tokyo.",
  },
};

const ja: Dict = {
  nav: { skills: "スキル", approach: "私たちの流儀", collaboration: "パートナーシップ", team: "創業者", contact: "お問い合わせ" },
  hero: {
    eyebrow: "東京, 日本",
    l1: "ソフトウェアと、", l2: "それを動かす", l3a: "", em: "チーム", l3b: "をつくる。",
    lede:
      "A3 Tech Group は東京を拠点とするエンジニアリングスタジオです。本番品質のフルスタック開発、AI自動化、そしてアイデアを形にする実践的な研修とパートナーシップを提供します。",
    cta: "お問い合わせ", secondary: "私たちのスキル",
    stats: [
      { dt: "10年以上", dd: "シニアによる開発実績" },
      { dt: "フルスタック", dd: "Web・クラウド・AI・自動化" },
      { dt: "世界中へ", dd: "リモート対応のパートナーシップ" },
    ],
  },
  trust: {
    label: "対応領域",
    items: ["フィンテック", "SaaS", "EC", "ヘルスケア", "製造業", "EdTech"],
  },
  skills: {
    kicker: "01 — スキル",
    title: "得意なことを、確実に。",
    sub: "4つのコア領域を、ひとつのシニアチームで。スライドでご紹介します。",
    items: [
      {
        num: "01", title: "フルスタック開発",
        body: "エンドツーエンドのプロダクト開発。明快なAPI、考え抜かれたフロントエンド、長く耐えるインフラ。まっさらなリポジトリから、チームが運用できるシステムまで。一年後も理解できるコードを書きます。",
        tags: ["Webアプリ", "API", "クラウド", "DevOps"],
        alt: "ノートパソコンでフルスタック開発を行うエンジニア",
      },
      {
        num: "02", title: "AI自動化",
        body: "サポート、データ入力、レポート作成、振り分けなど、静かに時間を奪う業務をAIに任せます。評価され、観測でき、本番でも安全に動くRAGパイプライン・エージェント・連携を構築します。",
        tags: ["LLMエージェント", "RAG", "ワークフロー", "連携"],
        alt: "人工知能と自動化の抽象的なビジュアル",
      },
      {
        num: "03", title: "CMS（コンテンツ管理）",
        body: "マーケティングチームが使っていて気持ちよいコンテンツ基盤。ヘッドレスでも従来型でも、速くSEOに強く、技術者でなくても安心して公開できる仕組みを。開発者を待つ必要はありません。",
        tags: ["ヘッドレス", "WordPress", "Sanity", "SEO"],
        alt: "画面に表示されたコンテンツ管理ダッシュボード",
      },
      {
        num: "04", title: "CRM（顧客管理）",
        body: "実際の営業・サポートの流れに合わせた顧客管理を。明快なパイプライン、役立つ自動化、そして営業・運用・データを同期させる連携を構築します。",
        tags: ["営業パイプライン", "自動化", "連携", "ダッシュボード"],
        alt: "営業・顧客関係管理のワークスペース",
      },
    ],
  },
  experience: {
    kicker: "実績",
    title: "積み重ねた経験を、土台に。",
    sub: "本格的なAI・エンジニアリングのパートナーと、すでに実践してきました。",
    handleAll: "最初のアイデアからローンチ、その後の運用まで——技術全体を私たちが引き受けます。複数のベンダーを取りまとめる必要はありません。",
    items: [
      { name: "Outlier", note: "AI研修・モデル評価" },
      { name: "Mercor", note: "AI人材・データ案件" },
      { name: "フルスタックアプリ 5件以上", note: "エンドツーエンドで開発・公開" },
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
      { title: "AI / 自動化", items: ["Claude & OpenAI", "LangChain", "n8n / Zapier", "ベクトルDB", "RAG"] },
      { title: "クラウド・運用", items: ["AWS", "GCP", "Docker", "Kubernetes", "Terraform"] },
    ],
  },
  collab: {
    kicker: "04 — パートナーシップ",
    title: "共に築き、長く続く。",
    lead: "私たちの専門性を活かし、あなたのビジョンを形にするお手伝いができることを、心から楽しみにしています。",
    paras: [
      "私たちが誇れる成果は、いつも同じ場所から始まりました。互いを信頼し、明確な目標を分かち合う人たちです。プロジェクトには必ず難しい局面があります。それを乗り越えるのは、絶え間ない対話、プロ意識、そして互いの成功への真の献身です。",
      "私たちにとって協働とは、ただ隣で働くこと以上のものです。強みを掛け合わせ、率直に意見を交わし、一人では届かない扉を開くこと。良いものは、地道な努力と、周囲を支えようとする誠実な姿勢から生まれます。",
      "私たちが最も大切にするパートナーシップは、目先の利益のためのものではありません。信頼、相互の敬意、そして共有された長期的な目標の上に、時間をかけて育っていきます。同じビジョンに向かうとき、成果はプロジェクトそのものよりも長く残ります。",
      "いま私たちは、本物の成長志向のパートナーシップを大切にする方々——特に米国とカナダの専門家・起業家・ビジネスに前向きな方々——とのつながりを求めています。事業拡大、新しい技術、あるいは新たな機会づくり。何を目指す場合でも、一緒に何が築けるかをぜひ探らせてください。",
    ],
    noTech: "そして、私たちと組むのに技術的な知識は必要ありません。エンジニアリングとAIの知見は私たちが持ち込みます。お願いしたいのは、率直さ、信頼、そして本物の協働の精神だけ。それこそが、何よりもパートナーシップを成り立たせるものです。",
    closing: "共に、アイデアを機会へ——そして機会を、長く続くものへと変えていきましょう。",
    cta: "まずは話してみる",
    slides: [
      { alt: "ノートパソコンを囲んで協働するチーム", caption: "共有する目標と、率直な対話" },
      { alt: "和やかなビジネスミーティングの様子", caption: "時間をかけて育つパートナーシップ" },
      { alt: "合意して握手を交わす二人", caption: "まず信頼から、すべてが続く" },
      { alt: "オフィスで協力して働くチーム", caption: "長く続くものを築く" },
    ],
  },
  founders: {
    kicker: "05 — 創業者",
    title: "A3 を支える人たち。",
    sub: "二人の創業者、ひとつの基準。誠実に働き、本物の関係を築き、すべてのプロジェクトを出会ったときより良くして去る。",
    people: [
      {
        initials: "HT",
        name: "Daniel — Hiro Tanaka",
        role: "共同創業者 & CTO",
        bio: "Daniel は A3 Tech Group のエンジニアリングと実用AIを統括します。堅実なソフトウェアと実践的なAIの交点でキャリアを重ね、システムを設計し、エンジニアを育て、誠実な開発を貫いてきました。良い技術は静かであるべきだ——動き、長持ちし、邪魔をしない——が彼の信条です。",
        experience: [
          "本番ソフトウェアの構築・拡張に10年以上",
          "フィンテック・SaaS・ECでのフルスタック/AI開発",
          "アーキテクチャ・コード品質・AI自動化を統括",
        ],
      },
      {
        initials: "SK",
        name: "Shigefumi Kobayashi",
        role: "共同創業者 & CEO",
        bio: "Shigefumi はエンジニアリングとビジネスをつなぎます。パートナーシップと顧客との関係に注力し、すべてのプロジェクトが確かな成果に結びつくよう導きます。技術は人とビジネスを前進させてこそ意味がある——それが彼の信条です。",
        experience: [
          "事業戦略とオペレーションの経験",
          "長期的な顧客・パートナー関係の構築",
          "市場をまたぐ成長・デリバリー・提携を推進",
        ],
      },
    ],
  },
  contact: {
    kicker: "06 — お問い合わせ",
    title: "長く残るものを、一緒に。",
    sub: "取り組んでいることをお聞かせください。あるいは30分の通話をご予約を——資料は不要、率直にお話ししましょう。",
    formTitle: "メッセージを送る",
    formSub: "いただいたお問い合わせには、1営業日以内に返信します。",
    name: "お名前 *", namePh: "お名前",
    email: "メール *", emailPh: "you@company.com",
    company: "会社名", companyPh: "会社名（任意）",
    help: "ご相談内容", helpPh: "トピックを選択…",
    services: ["フルスタック開発", "AI自動化", "CMS（コンテンツ管理）", "CRM（顧客管理）", "パートナーシップ・協業", "その他"],
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
      { label: "対応言語", value: "English / 日本語 / 中文" },
    ],
    bookingTitle: "話して決めたい方は、通話予約を",
    bookingSub: "カレンダーから30分の枠を直接ご予約いただけます。",
    fallback: "カレンダーが表示されませんか？ ",
    fallbackLink: "Calendly を新しいタブで開く →",
  },
  footer: {
    blurb: "ソフトウェア開発・AI自動化・パートナーシップを、東京から。",
    location: "東京, 日本",
    schedule: "ミーティングを予約 →",
    rights: "All rights reserved.",
    tagline: "確かなものづくりを、東京から。",
  },
};

const zh: Dict = {
  nav: { skills: "技能", approach: "我们的方式", collaboration: "合作伙伴", team: "创始人", contact: "联系我们" },
  hero: {
    eyebrow: "日本 · 东京",
    l1: "我们打造软件，", l2: "也打造", l3a: "", em: "团队", l3b: "去交付它。",
    lede:
      "A3 Tech Group 是一家位于东京的工程工作室。我们提供生产级的全栈开发、AI 自动化，以及把想法变为现实的实战培训与合作。",
    cta: "联系我们", secondary: "我们的技能",
    stats: [
      { dt: "10年+", dd: "资深交付经验" },
      { dt: "全栈", dd: "Web · 云 · AI · 自动化" },
      { dt: "面向全球", dd: "远程友好的合作" },
    ],
  },
  trust: {
    label: "服务领域",
    items: ["金融科技", "SaaS", "电商", "医疗健康", "制造业", "教育科技"],
  },
  skills: {
    kicker: "01 — 技能",
    title: "我们擅长的，做到极致。",
    sub: "四项核心能力，一支资深团队。滑动查看我们能如何帮助你。",
    items: [
      {
        num: "01", title: "全栈开发",
        body: "端到端的产品工程——简洁的 API、用心的前端，以及稳定可靠的基础设施。从空白仓库到团队可自主运维的系统，我们写的代码一年后依然清晰易懂。",
        tags: ["Web 应用", "API", "云", "DevOps"],
        alt: "工程师在笔记本电脑上编写全栈代码",
      },
      {
        num: "02", title: "AI 自动化",
        body: "让 AI 接手那些悄悄消耗你时间的工作——客服、数据录入、报表、分发。我们构建经过评估、可观测、可安全用于生产的 RAG 流水线、智能体与集成。",
        tags: ["LLM 智能体", "RAG", "工作流", "集成"],
        alt: "人工智能与自动化的抽象可视化",
      },
      {
        num: "03", title: "CMS 内容管理",
        body: "让市场团队真正乐于使用的内容系统。无头或传统架构，快速且利于 SEO，让非技术人员也能放心发布，无需等待开发人员。",
        tags: ["无头架构", "WordPress", "Sanity", "SEO"],
        alt: "屏幕上的内容管理后台",
      },
      {
        num: "04", title: "CRM 客户管理",
        body: "贴合你真实销售与服务流程的客户系统，而非反过来。清晰的管线、实用的自动化，以及让销售、运营与数据保持同步的集成。",
        tags: ["销售管线", "自动化", "集成", "仪表盘"],
        alt: "销售与客户关系管理的工作区",
      },
    ],
  },
  experience: {
    kicker: "过往业绩",
    title: "可以依靠的经验。",
    sub: "我们已与严肃的 AI 与工程伙伴一起实践过。",
    handleAll: "从最初的想法到上线，再到之后的多年运维——整套技术都由我们承担，你无需在多家供应商之间奔波。",
    items: [
      { name: "Outlier", note: "AI 培训与模型评估" },
      { name: "Mercor", note: "AI 人才与数据项目" },
      { name: "5+ 全栈应用", note: "端到端交付的 Web 应用" },
    ],
  },
  approach: {
    kicker: "02 — 我们的方式",
    title: "重匠心，轻喧嚣。",
    sub_a: "我们相信", sub_em: "稳健而有意识的持续改进", sub_b: "——并将其贯彻于软件的打造过程。小步快走，频繁交付。凡是自己不愿运维的，绝不交付。",
    steps: [
      { no: "I", title: "先倾听", body: "我们从你的约束与客户出发，而非我们偏爱的框架。合适的工具，是你的团队能长久驾驭的那一个。" },
      { no: "II", title: "公开地构建", body: "短周期、可见的进展、尽早可用的软件。决策即时共享，绝不是黑箱。" },
      { no: "III", title: "让它更好", body: "我们交付有文档、经测试的系统，以及运维它们的知识。我们的目标，是让自己变得可有可无。" },
    ],
  },
  stack: {
    kicker: "03 — 技术栈",
    title: "我们所选的工具。",
    sub: "务实、经过验证、按项目选型——绝不盲目跟风。",
    columns: [
      { title: "前端", items: ["React", "Next.js", "TypeScript", "Vue", "Tailwind"] },
      { title: "后端", items: ["Node.js", "Go", "Python", "PostgreSQL", "GraphQL"] },
      { title: "AI / 自动化", items: ["Claude & OpenAI", "LangChain", "n8n / Zapier", "向量数据库", "RAG"] },
      { title: "云与运维", items: ["AWS", "GCP", "Docker", "Kubernetes", "Terraform"] },
    ],
  },
  collab: {
    kicker: "04 — 合作伙伴",
    title: "共同打造，长久同行。",
    lead: "我们由衷期待发挥所长，帮助你把愿景变为现实。",
    paras: [
      "我们引以为傲的每一个成果，都源自同一处起点——彼此信任、目标一致的人。项目总会有艰难的时刻，真正支撑它走下去的，是持续的沟通、专业的态度，以及对彼此成功的真诚投入。",
      "对我们而言，合作不止于并肩工作。它意味着优势互补、坦诚交流，并打开任何一方独自无法触及的大门。美好的成果，源自持续的努力与支持身边人的真诚意愿。",
      "我们最看重的合作，并非追求短期的得失。它建立在可靠、相互尊重与共同的长期目标之上，随时间不断成长。当伙伴与我们的团队朝同一愿景前行，成果往往比项目本身更为长久。",
      "目前，我们正寻求与重视真诚、成长导向合作的专业人士、创始人与商业伙伴建立联系——尤其是在美国与加拿大。无论你着眼于业务拓展、新技术，还是创造新机会，我们都期待与你一同探索可以共建的未来。",
    ],
    noTech: "而且，与我们合作并不需要懂技术。工程与 AI 的专长由我们带来；我们所期待的，是开放、信任，以及真正的合作精神。这，才是让合作得以成立的根本。",
    closing: "携手同行，让想法变为机会——也让机会，化为长久的价值。",
    cta: "开始一次对话",
    slides: [
      { alt: "团队围着笔记本电脑协作", caption: "共同的目标，坦诚的沟通" },
      { alt: "友好的商务会议", caption: "随时间成长的合作" },
      { alt: "两人达成一致并握手", caption: "信任为先，水到渠成" },
      { alt: "团队在办公室专注协作", caption: "打造长久的价值" },
    ],
  },
  founders: {
    kicker: "05 — 创始人",
    title: "A3 背后的人。",
    sub: "两位创始人，同一标准：做诚实的工作，建立真实的关系，让每个项目都比当初更好。",
    people: [
      {
        initials: "HT",
        name: "Daniel — Hiro Tanaka",
        role: "联合创始人 & CTO",
        bio: "Daniel 负责 A3 Tech Group 的工程与应用 AI。他的职业生涯始终处于扎实软件与务实 AI 的交汇处——设计系统、培养工程师、坚守诚实的交付。他相信好的技术是安静的：它能用、耐久，并且不碍事。",
        experience: [
          "10 年以上生产级软件的构建与扩展",
          "金融科技、SaaS 与电商的全栈 / AI 开发",
          "主导架构、代码质量与 AI 自动化",
        ],
      },
      {
        initials: "SK",
        name: "Shigefumi Kobayashi",
        role: "联合创始人 & CEO",
        bio: "Shigefumi 连接工程与业务。他专注于合作伙伴与客户关系，确保每个项目都能落地为真实成果。他的信念很简单：技术只有在帮助人与企业前进时才有意义。",
        experience: [
          "拥有商业战略与运营背景",
          "建立长期的客户与伙伴关系",
          "推动跨市场的增长、交付与合作",
        ],
      },
    ],
  },
  contact: {
    kicker: "06 — 联系我们",
    title: "一起打造长久的价值。",
    sub: "告诉我们你正在做的事，或预约一次 30 分钟的通话——无需幻灯片，只需一次坦诚的交流。",
    formTitle: "给我们留言",
    formSub: "每一条咨询，我们都会在一个工作日内回复。",
    name: "姓名 *", namePh: "你的姓名",
    email: "邮箱 *", emailPh: "you@company.com",
    company: "公司", companyPh: "公司（选填）",
    help: "我们能帮你什么？", helpPh: "选择一个主题…",
    services: ["全栈开发", "AI 自动化", "CMS 内容管理", "CRM 客户管理", "合作伙伴 / 协作", "其他"],
    message: "留言 *", messagePh: "用几句话介绍你的项目、时间安排或目标…",
    submit: "发送留言", submitting: "发送中…",
    successTitle: "谢谢——已收到你的留言。",
    successBody: "我们会尽快与你联系。如有急事，欢迎在右侧预约通话。",
    sendAnother: "再发一条",
    errorGeneric: "出了点问题。",
    fineprint: "提交即表示你同意我们就此咨询与你联系。我们绝不会分享你的信息。",
    points: [
      { label: "所在地", value: "日本 · 东京" },
      { label: "回复", value: "一个工作日内" },
      { label: "语言", value: "English / 日本語 / 中文" },
    ],
    bookingTitle: "想直接聊聊？预约通话",
    bookingSub: "直接从我们的日历中预约 30 分钟的时段。",
    fallback: "日历无法显示？ ",
    fallbackLink: "在新标签页打开 Calendly →",
  },
  footer: {
    blurb: "软件工程、AI 自动化与合作，源自东京。",
    location: "日本 · 东京",
    schedule: "预约会议 →",
    rights: "版权所有。",
    tagline: "可靠的工程，来自东京。",
  },
};

export const dictionaries: Record<Locale, Dict> = { en, ja, zh };
