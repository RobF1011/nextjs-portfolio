import Image from 'next/image'

export default function Home() {
  const skills = [
    'JavaScript',
    'TypeScript',
    'React',
    'Next.js',
    'Vue.js',
    'HTML5',
    'CSS3',
    'SASS / SCSS',
    'Tailwind',
    'Jest',
    'Jasmine / Karma',
    'Node.js',
    'Express',
    'Git',
    'Web Accessibilty',
    'Webpack',
    'AWS',
    'WordPress',
    'Liquid (Shopify)',
    'Figma / Sketch',
    'Confluence',
    'JIRA',
    'SEO',
    'UI/UX Design'
  ]

  return (
    <main className="flex flex-col items-center gap-6 py-16 max-w-screen-lg m-auto">
      <Image
          className="rounded-full border-4 shadow-md"
          src="/rob_japan.jpg"
          alt="Rob Franceschini photo"
          width={204}
          height={204}
          priority
        />
        <p>Hi, I&apos;m Rob! I&apos;m a Senior Front-End Software Engineer with over 10 years of experience, specializing in development and shipping of scalable, efficient, and accessible digital UI experiences. My skillset includes:</p>
        <ul className='columns-3'>
          {skills.map((skill) => {
            return (
              <li key={skill}>{skill}</li>
            )
          })}
        </ul>
        <p>Check out the Projects tab for a few projects that I can show, but there are a lot more I&apos;d love to talk about and show! Be sure to also take a look at my GitHub, CodePen, LinkedIn via the icons up top!</p>
    </main>
  )
}
