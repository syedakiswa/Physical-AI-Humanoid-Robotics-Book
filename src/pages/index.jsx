import React from "react";
import Layout from "@theme/Layout";
import styles from "./index.module.css";
import Link from "@docusaurus/Link";
import Footer from "../components/Footer";
import PhysicalAISection from '../components/PhysicalAISection';

export default function Home() {
  return (
    <>
    <Layout
      title="Physicall AI – Humanoid Knowledge"
      description="Explore the next generation of AI and Humanoid Robotics"
    >
      {/* HERO SECTION */}
      <header className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Physicall AI & Humanoid Robotics</h1>
          <article className={styles.heroSubtitle}>
            A modern guide that explains how AI, robotics, and intelligent
            humanoid systems are shaping the future. Designed for beginners
            & advanced readers.
          </article>

          <Link className={styles.heroButton} to="/docs/intro">
            Start Reading →
          </Link>
        </div>

        <div className={styles.heroImageBox}>
          <img
            src="/img/logo1.png"
            alt="AI Humanoid"
            className={styles.heroImage}
          />
        </div>
      </header>

      <PhysicalAISection/>

      {/* WHO CAN READ SECTION */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Who Can Read This Book?</h2>
        <div className={styles.cardGrid}>
          <div className={styles.card}>
            <h3>Students</h3>
            <p>Perfect for school & college students entering AI & robotics.</p>
          </div>

          <div className={styles.card}>
            <h3>Developers</h3>
            <p>Those who want to build intelligent apps & humanoid systems.</p>
          </div>

          <div className={styles.card}>
            <h3>Researchers</h3>
            <p>People exploring advanced robotics, automation & AI models.</p>
          </div>

          <div className={styles.card}>
            <h3>Beginners</h3>
            <p>Anyone curious about the future of Artificial Intelligence.</p>
          </div>
        </div>
      </section>

   {/* WHY THIS BOOK SECTION */}
<section className={styles.sectionAlt}>
  <h2 className={styles.sectionTitle}>Why You Should Read This</h2>

  <div className={styles.featureList}>
    <div className={styles.featureItem}>1. Learn how humanoid robots think</div>
    <div className={styles.featureItem}>2. Understand Physical AI systems</div>
    <div className={styles.featureItem}>3. Real-world applications & future vision</div>
    <div className={styles.featureItem}>4. Simple language – easy to understand</div>
  </div>
</section>



    </Layout>

    

    </>
  );
}
