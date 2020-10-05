import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useHelloWorld } from '../hooks/useHelloWorld';

export default function Home() {
  const data = useHelloWorld();
  return (
    <div className={styles.container}>
      <Head>
        <title>Welcome to Next.js!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        {data && (
          <p className={styles.description}>
            <code className={styles.code}>{JSON.stringify(data, null, 2)}</code>
          </p>
        )}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
