import Link from 'next/link';
import { orbitron } from '@/app/ui/fonts';
import { FaCodepen, FaGithub, FaLinkedin } from "react-icons/fa6";

export default function Header() {
  return (
    <header className='flex flex-col items-center justify-center p-5 bg-white shadow-md'>
      <h1 className={`${orbitron.className} font-bold text-green-600`}>Rob Franceschini</h1>
      <div className='flex gap-4 text-indigo-600 text-4xl'>
        <Link target='_blank' href='https://www.linkedin.com/in/robfranceschini/'>
          <FaLinkedin/>
        </Link>
        <Link target='_blank' href='https://github.com/RobF1011/'>
          <FaGithub/>
        </Link>
        <Link target='_blank' href='https://codepen.io/robf1011/pens/public/'>
          <FaCodepen/>
        </Link>
      </div>
    </header>
  );
}
