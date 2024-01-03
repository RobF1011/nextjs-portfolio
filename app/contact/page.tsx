import { promises as fs } from 'fs';
import Image from 'next/image'
import Link from 'next/link';
import { Metadata } from 'next';
import { orbitron } from '@/app/ui/fonts';

export const metadata: Metadata = {
  title: 'Contact',
}

export default async function Page() {
  return (
  <main className='flex flex-col items-center justify-center px-8 md:px-16 pt-8 pb-28 gap-6'>
    <h2 className={`${orbitron.className} font-bold`}>Contact</h2>
    <p>You can get in touch with me by email at:</p>
    <Link className='underline' href="mailto:robert.franceschini@gmail.com">robert.franceschini@gmail.com</Link>
    <p>Or download my resume below!</p>
    <Link href="https://robf.dev/resume/RobertFranceschini_Resume.pdf" target="_blank">
    <Image
      className="shadow"
      src="/RF_resume.jpg"
      alt="Rob Franceschini Resume"
      width={320}
      height={461}
      priority
    />
    </Link>
  </main>
  );
}