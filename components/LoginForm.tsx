"use client";

import { useState } from 'react';
import styles from './login.module.css';

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setMessage(null);
    await new Promise(r => setTimeout(r, 800));
    setLoading(false);
    setMessage("Signed in (demo)");
  }

  return (
    <main className="main-center">
      <div className={styles.panelShadow}>
        <section className={styles.panel} aria-label="Login panel">
          <header className={styles.header}>
            <div className={styles.medallion} aria-hidden>
              <span className={styles.acanthus} />
            </div>
            <h1 className={styles.title}>Welcome</h1>
            <p className={styles.subtitle}>Sign in to continue</p>
          </header>

          <form className={styles.form} onSubmit={onSubmit}>
            <label className={styles.label} htmlFor="email">Email</label>
            <div className={styles.recessField}>
              <div className={styles.meander} aria-hidden />
              <input
                id="email"
                type="email"
                className={styles.input}
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <label className={styles.label} htmlFor="password">Password</label>
            <div className={styles.recessField}>
              <div className={styles.meander} aria-hidden />
              <input
                id="password"
                type="password"
                className={styles.input}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button className={styles.button} disabled={loading}>
              <span className={styles.buttonOrnate} aria-hidden />
              {loading ? 'Signing in…' : 'Sign in'}
            </button>

            {message && <p className={styles.message}>{message}</p>}
          </form>
        </section>
      </div>
    </main>
  );
}
