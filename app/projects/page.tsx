import { promises as fs } from 'fs';
import Image from 'next/image'
import Link from 'next/link';
import { Metadata } from 'next';
import { orbitron } from '@/app/ui/fonts';
import { FaGithub } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa";
import { Project } from '../lib/definitions'

export const metadata: Metadata = {
  title: 'Projects',
}

export default async function Page() {
  const file = await fs.readFile(process.cwd() + '/app/lib/projects.json', 'utf8');
  const projects = JSON.parse(file);
  return (
  <main className='flex flex-col items-center justify-center px-8 md:px-16 pt-8 pb-28 gap-6'>
    <div className='text-center'>
      <h2 className={`${orbitron.className} font-bold`}>Projects</h2>
      <p className='text-white text-md max-w-4xl'>Here are some personal projects that I&apos;ve done for fun and to learn new skills! The majority of my work has been done with large companies that I&apos;m not able to showcase here, but I&apos;d be more than happy to discuss in more detail!</p>
    </div> 
    <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
      {projects.map((proj: Project) => {
        return (
          <div className='flex flex-col justify-between bg-white rounded-md p-5 max-w-sm shadow-md' key={proj.slug}>
            <h3 className={`${orbitron.className} font-bold text-black`}>{proj.name}</h3>
            <p className='text-black text-sm'><span className='font-bold'>Skills used:</span> {proj.skills}</p>
            <p className='text-black my-3'>{proj.description}</p>
            <Image
              className="mb-3"
              src={`/${proj.slug}.jpg`}
              alt={proj.description}
              width={354}
              height={194}
              priority
            />
            <div className='flex gap-3'>
              {proj.githubLink && 
                <Link className='text-green-600 text-4xl' href={proj.githubLink} target='_blank'>
                  <FaGithub/>
                </Link>
              }
              {proj.previewLink && 
                <Link className='text-green-600 text-4xl' href={proj.previewLink} target='_blank'>
                  <FaRegEye/>
                </Link>
              }
            </div>
          </div>
        )
      })}
    </div>
  </main>
  );
}