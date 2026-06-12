import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  ArrowRight,
  Radio,
  HeartPulse,
  Factory,
  ShieldCheck,
  Monitor,
  FlaskConical,
} from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

const SectionBlock = ({ children, className = '' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <div ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className={className}
      >
        {children}
      </motion.div>
    </div>
  );
};

const featuredTopics = [
  {
    icon: Radio,
    title: 'Tracking & Monitoring Systems',
    desc: 'Design considerations, deployment challenges, and real-world performance of location- and condition-based monitoring solutions.',
  },
  {
    icon: HeartPulse,
    title: 'Biomedical & Health Monitoring',
    desc: 'Engineering approaches for continuous, accurate monitoring in clinical, research, and controlled environments.',
  },
  {
    icon: Factory,
    title: 'Industrial Automation & Control',
    desc: 'Electronics and control systems built for reliability, consistency, and long-term operation in industrial settings.',
  },
  {
    icon: ShieldCheck,
    title: 'Safety & Compliance-Driven Engineering',
    desc: 'System design for environments where monitoring, alerts, and reporting support risk management and regulatory needs.',
  },
  {
    icon: Monitor,
    title: 'Outdoor & Infrastructure Technology',
    desc: 'Managing and monitoring distributed infrastructure such as outdoor media and field-deployed systems.',
  },
  {
    icon: FlaskConical,
    title: 'Engineering & R&D Insights',
    desc: 'Learnings from system architecture, prototyping, testing, and deployment across different industries.',
  },
];

const fallbackArticles = [
  {
    title: 'Why Off-the-Shelf IoT Fails in Critical Environments',
    summary:
      'Off-the-shelf IoT devices often look capable on paper, yet break down under real operating conditions. This article explores where they fail\u2014and what reliable systems do differently.',
    cta: 'Explore why generic IoT solutions break down in real-world deployments',
    tag: 'IoT',
    slug: 'why-off-the-shelf-iot-fails',
  },
  {
    title: 'Designing Reliable Biomedical Monitoring Systems',
    summary:
      'Accuracy and continuity are non-negotiable in biomedical environments. This post examines the engineering decisions that separate dependable monitoring systems from unstable ones.',
    cta: 'Read how engineering decisions impact monitoring accuracy and stability',
    tag: 'BioMed',
    slug: 'designing-biomedical-monitoring',
  },
  {
    title: 'Beyond GPS: What Real-Time Tracking Systems Must Deliver',
    summary:
      'Location data alone rarely solves operational problems. This article looks at what modern tracking systems must deliver beyond basic GPS to be truly useful.',
    cta: 'Learn what effective tracking systems deliver beyond location data',
    tag: 'Tracking',
    slug: 'beyond-gps-tracking',
  },
  {
    title: 'Centralised vs On-Site Control in Digital Billboard Networks',
    summary:
      "Managing a distributed billboard network involves trade-offs between local control and central oversight. This blog breaks down when each approach works\u2014and when it doesn\u2019t.",
    cta: 'Understand trade-offs in billboard network control approaches',
    tag: 'Infrastructure',
    slug: 'centralised-vs-onsite-billboard',
  },
  {
    title: 'Engineering for Long-Term Reliability in Industrial Systems',
    summary:
      'Industrial electronics are expected to run continuously, not just function at launch. This article explores how engineering choices impact stability over time.',
    cta: 'Discover how engineering choices impact long-term industrial stability',
    tag: 'Industrial',
    slug: 'engineering-long-term-reliability',
  },
  {
    title: 'From Prototype to Deployment: Lessons from Real Systems',
    summary:
      'What works in a prototype often fails in production. This post shares lessons learned while taking systems from concept to real-world deployment.',
    cta: 'Read lessons learned from real system deployments',
    tag: 'R&D',
    slug: 'prototype-to-deployment',
  },
];

const Blogs = () => {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const [articles, setArticles] = useState(fallbackArticles);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const url = window.location.hostname === 'localhost'
          ? 'http://localhost/Smartosphere/admin/blogs_api.php'
          : '/admin/blogs_api.php';
        const res = await fetch(url);
        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data) && data.length > 0) {
            setArticles(data.map(post => ({
              title: post.title,
              summary: post.summary || '',
              cta: 'Read more',
              tag: post.tag || 'Engineering',
              slug: post.slug,
            })));
          }
        }
      } catch (err) {
        // Keep fallback articles on error
        console.log('Using fallback blog articles');
      }
    };
    fetchArticles();
  }, []);

  return (
    <div className="blogs-page">
      <style>{`
        /* ── Page ── */
        .blogs-page {
          min-height: 100vh;
          background-color: var(--bg-primary);
        }

        /* ── Hero ── */
        .blogs-hero {
          padding: 140px 0 80px;
          position: relative;
          overflow: hidden;
        }
        .blogs-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at top, rgba(236, 130, 9, 0.15) 0%, transparent 60%);
          pointer-events: none;
        }
        .blogs-hero-inner {
          max-width: 760px;
          position: relative;
        }
        .blogs-eyebrow {
          display: block;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: #EC8209;
          margin-bottom: 18px;
        }
        .blogs-hero h1 {
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 800;
          line-height: 1.2;
          color: var(--text-primary);
          margin-bottom: 24px;
        }
        .blogs-hero h1 .highlight {
          color: #DB2442;
        }
        .blogs-hero p {
          font-size: 1.1rem;
          color: var(--text-secondary);
          line-height: 1.75;
          max-width: 640px;
        }

        /* ── Section shared ── */
        .blogs-section {
          padding: 80px 0;
        }
        .blogs-section.alt-bg {
          background-color: rgba(255, 255, 255, 0.02);
        }
        .blogs-section.dark-bg {
          background: radial-gradient(ellipse at bottom, rgba(236, 130, 9, 0.06) 0%, transparent 60%);
        }
        .blogs-section-header {
          max-width: 720px;
          margin: 0 auto 48px;
          text-align: center;
        }
        .blogs-section-eyebrow {
          display: block;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: #EC8209;
          margin-bottom: 14px;
        }
        .blogs-section-header h2 {
          font-size: clamp(1.6rem, 3vw, 2.2rem);
          font-weight: 800;
          color: var(--text-primary);
          margin-bottom: 18px;
          line-height: 1.25;
        }
        .blogs-section-header h2 .highlight {
          color: #DB2442;
        }
        .blogs-section-header p {
          color: var(--text-secondary);
          line-height: 1.75;
          font-size: 1.05rem;
        }

        /* ── Featured Topics Grid ── */
        .topics-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        @media (max-width: 1024px) {
          .topics-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .topics-grid { grid-template-columns: 1fr; }
        }
        .topic-card {
          background-color: var(--card-bg, #12151c);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 16px;
          padding: 32px;
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }
        .topic-card:hover {
          border-color: rgba(219, 36, 66, 0.35);
          box-shadow: 0 0 28px rgba(219, 36, 66, 0.08);
        }
        .topic-icon-wrap {
          width: 46px;
          height: 46px;
          border-radius: 10px;
          background: rgba(219, 36, 66, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          transition: background 0.3s ease;
        }
        .topic-card:hover .topic-icon-wrap {
          background: rgba(219, 36, 66, 0.2);
        }
        .topic-icon {
          width: 22px;
          height: 22px;
          color: #DB2442;
        }
        .topic-card h3 {
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 12px;
          line-height: 1.3;
        }
        .topic-card p {
          font-size: 0.92rem;
          color: var(--text-secondary);
          line-height: 1.7;
        }

        /* ── Article Cards ── */
        .articles-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }
        @media (max-width: 1024px) {
          .articles-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .articles-grid { grid-template-columns: 1fr; }
        }
        .article-card {
          display: flex;
          flex-direction: column;
          background-color: var(--card-bg, #12151c);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 16px;
          padding: 32px;
          transition: border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
          cursor: pointer;
          text-decoration: none;
          height: 100%;
        }
        .article-card:hover {
          border-color: rgba(219, 36, 66, 0.35);
          box-shadow: 0 0 32px rgba(219, 36, 66, 0.1);
          transform: translateY(-4px);
        }
        .article-tag {
          display: inline-block;
          align-self: flex-start;
          padding: 4px 14px;
          border-radius: 20px;
          font-size: 0.75rem;
          font-weight: 700;
          background: rgba(236, 130, 9, 0.1);
          color: #EC8209;
          margin-bottom: 18px;
          letter-spacing: 0.5px;
        }
        .article-card h3 {
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 12px;
          line-height: 1.35;
          transition: color 0.3s ease;
        }
        .article-card:hover h3 {
          color: #DB2442;
        }
        .article-card .article-summary {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 20px;
          flex: 1;
        }
        .article-cta {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.88rem;
          color: #DB2442;
          font-weight: 600;
          transition: gap 0.3s ease;
        }
        .article-card:hover .article-cta {
          gap: 14px;
        }
        .article-cta svg {
          width: 16px;
          height: 16px;
          flex-shrink: 0;
        }

        /* ── Writing Approach ── */
        .writing-section {
          padding: 80px 0;
          background: #272C35;
        }
        .writing-inner {
          max-width: 720px;
          margin: 0 auto;
          text-align: center;
        }
        .writing-inner h2 {
          font-size: clamp(1.6rem, 3vw, 2.2rem);
          font-weight: 800;
          color: var(--text-primary);
          margin-bottom: 28px;
          line-height: 1.25;
        }
        .writing-inner h2 .highlight {
          color: #DB2442;
        }
        .writing-inner p {
          color: var(--text-secondary);
          line-height: 1.75;
          font-size: 1.05rem;
          margin-bottom: 20px;
        }

        /* ── CTA Section ── */
        .cta-section {
          padding: 80px 0;
        }
        .cta-inner {
          max-width: 640px;
          margin: 0 auto;
          text-align: center;
        }
        .cta-inner h2 {
          font-size: clamp(1.6rem, 3vw, 2.2rem);
          font-weight: 800;
          color: var(--text-primary);
          margin-bottom: 20px;
          line-height: 1.25;
        }
        .cta-inner h2 .highlight {
          color: #DB2442;
        }
        .cta-inner p {
          color: var(--text-secondary);
          line-height: 1.75;
          font-size: 1.05rem;
          margin-bottom: 36px;
        }
        .cta-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 15px 32px;
          font-size: 0.95rem;
          font-weight: 700;
          border-radius: 8px;
          background: var(--accent-gradient, linear-gradient(135deg, #EB1C24, #EC8209));
          color: #fff;
          border: none;
          cursor: pointer;
          text-decoration: none;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .cta-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(235, 28, 36, 0.3);
        }
        .cta-btn-primary svg {
          width: 16px;
          height: 16px;
        }
      `}</style>

      <main>
        {/* ── Hero ── */}
        <section className="blogs-hero">
          <div className="container">
            <motion.div
              ref={heroRef}
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="blogs-hero-inner"
            >
              <span className="blogs-eyebrow">Blog</span>
              <h1>
                Engineering Insights from{' '}
                <span className="highlight">Real-World Deployments</span>
              </h1>
              <p>
                Design thinking, technical insights, and practical learnings gained
                while building and deploying hardware–software systems in live
                environments.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── What You'll Find Here ── */}
        <section className="blogs-section">
          <div className="container">
            <SectionBlock>
              <div className="blogs-section-header">
                <span className="blogs-section-eyebrow">What You'll Find Here</span>
                <h2>
                  Content Built on <span className="highlight">Practical Experience</span>
                </h2>
                <p>
                  Our blogs are written for decision-makers, engineers, and operations teams who
                  value clarity over marketing language. The focus is on explaining how systems are
                  designed, why certain choices are made, and what those choices mean once a solution
                  is deployed.
                </p>
              </div>
            </SectionBlock>
          </div>
        </section>

        {/* ── Featured Topics ── */}
        <section className="blogs-section alt-bg">
          <div className="container">
            <SectionBlock>
              <div className="blogs-section-header">
                <span className="blogs-section-eyebrow">Featured Topics</span>
                <h2>
                  Explore by <span className="highlight">Domain</span>
                </h2>
              </div>
            </SectionBlock>
            <div className="topics-grid">
              {featuredTopics.map((topic, i) => {
                const Icon = topic.icon;
                return (
                  <motion.div
                    key={topic.title}
                    custom={i}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="topic-card"
                  >
                    <div className="topic-icon-wrap">
                      <Icon className="topic-icon" />
                    </div>
                    <h3>{topic.title}</h3>
                    <p>{topic.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Latest Articles ── */}
        <section className="blogs-section">
          <div className="container">
            <SectionBlock>
              <div className="blogs-section-header">
                <span className="blogs-section-eyebrow">Latest Articles</span>
                <h2>
                  Recently <span className="highlight">Published</span>
                </h2>
              </div>
            </SectionBlock>
            <div className="articles-grid">
              {articles.map((article, i) => (
                <a key={article.title} href={`/blogs/${article.slug}`}>
                  <motion.article
                    custom={i}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="article-card"
                  >
                    <span className="article-tag">{article.tag}</span>
                    <h3>{article.title}</h3>
                    <p className="article-summary">{article.summary}</p>
                    <span className="article-cta">
                      {article.cta}
                      <ArrowRight />
                    </span>
                  </motion.article>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── Writing Approach ── */}
        <section className="writing-section">
          <div className="container">
            <SectionBlock>
              <div className="writing-inner">
                <span className="blogs-section-eyebrow">Our Writing Approach</span>
                <h2>
                  Engineering Content with{' '}
                  <span className="highlight">Purpose</span>
                </h2>
                <p>
                  We believe strong engineering content should explain why decisions matter, not just
                  describe what was built. Our writing aims to balance technical depth with clarity,
                  making it useful for both technical and non-technical readers.
                </p>
                <p>
                  Every article reflects real-world constraints, operational considerations, and
                  outcomes observed during system design and deployment. The goal is to provide
                  insight that can be applied, questioned, or built upon—rather than promotional
                  content.
                </p>
              </div>
            </SectionBlock>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="cta-section">
          <div className="container">
            <SectionBlock>
              <div className="cta-inner">
                <h2>
                  Looking for Something{' '}
                  <span className="highlight">Specific?</span>
                </h2>
                <p>
                  Many of the topics covered on this blog originate from conversations with
                  clients, partners, and engineering teams facing complex challenges. If you are
                  exploring a particular use case or technical problem and don't see it covered yet,
                  feel free to reach out.
                </p>
                <a href="https://wa.me/919820953762" target="_blank" rel="noopener noreferrer" className="cta-btn-primary">
                  Talk to Our Engineering Team
                  <ArrowRight />
                </a>
              </div>
            </SectionBlock>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Blogs;
