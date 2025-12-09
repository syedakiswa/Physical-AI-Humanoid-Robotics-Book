import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Starry background */}
      <div className={styles.stars}></div>

      <div className={styles.content}>
        <img src="/img/logo1.png" alt="Physicall AI Logo" className={styles.logo} />

        <div className={styles.links}>
          <a href="mailto:syedakiswa710@gmail.com">
            <FaEnvelope /> Email
          </a>
          <a href="https://www.linkedin.com/in/syedakiswa/">
            <FaLinkedin /> LinkedIn
          </a>
          <a href="https://github.com/syedakiswa">
            <FaGithub /> GitHub
          </a>
        </div>

        <p className={styles.copy}>
          This book developed by Sayeda Kiswa, Developer. © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
