import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>seraphim</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Information System;
            <code className={styles.code}>UIN Sunan Ampel</code>
          </p>
          <div>
            <a
              href="https://mam06.me/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Template By{' '}
              <Image
                src="/vercel.svg"
                alt="MAM"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
          <div className={styles.thirteen}>
            <Image
              src="/thirteen.svg"
              alt="13"
              width={40}
              height={31}
              priority
            />
          </div>
        </div>

        <div className={styles.grid}>
          <a
            href="https://github.com/MAM-06"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              GitHub <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Sharing our project.
            </p>
          </a>

          <a
            href="https://www.instagram.com/mam.06_/"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Instagram <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Reach me on Instagram!
            </p>
          </a>

          <a
            href="https://twitter.com/MAM06_"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Twitter <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Or reach me out on twitter.
            </p>
          </a>

          <a
            href="mailto:khotib.bul@gmail.com"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              E-mail <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Contact me on email
            </p>
          </a>
        </div>
      </main>
    </>
  )
}
