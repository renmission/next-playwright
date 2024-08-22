import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className='flex flex-col p-10'>
      <h1 className='text-3xl mb-5'>Next.js + Playwright</h1>
      <Link href='/form' className='underline text-blue-700 text-xl'>
        Form
      </Link>
    </main>
  );
}
