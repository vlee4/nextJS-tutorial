import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h2>Hello World</h2>
        <p>
          (This is a sample website - built using the
          <a href="https://nextjs.org/learn"> Next.js tutorial</a>.)
        </p>
        <br/>
        <p>Here's my <Link href="/posts/first-post">first post </Link> </p>
      </section>
    </Layout>
  );
}