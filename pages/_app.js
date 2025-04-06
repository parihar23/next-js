import "@/styles/globals.css";
import Link from 'next/link';

export default function App({ Component, pageProps }) {
  <nav style={{ padding: 10, borderBottom: '1px solid #ccc' }}>
    <Link href="/">Home</Link> | {' '}
    <Link href="/about">About</Link> | {' '}
    <Link href="/contact">Contact</Link>
  </nav>
  return <Component {...pageProps} />;
}