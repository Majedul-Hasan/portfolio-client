import { motion } from 'framer-motion';

export default function SkillSection() {
  let delay = 0.2;
  return (
    <section
      className='pb-20 max-w-xl break-words'
      id='skills'>
      <h2 className='myfont-fraunces text-3xl sm:text-4xl font-extrabold underline-offset-8 pb-8'>
        Skills
      </h2>
      <div className='flex flex-wrap gap-12 sm:gap-0 text-slate-800 dark:text-slate-200'>
        {/* displaying skill sets  */}
        {mySkills.map((m) => (
          <motion.ul
            key={m.type}
            className='w-1/3 sm:w-1/2 sm:mb-8'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: delay, duration: 0.5 }}
            viewport={{ once: true }}>
            <p className='hidden'>{(delay += 0.1)}</p>
            <li className='mb-4 underline underline-offset-4 decoration-2 decoration-fuchsia-500'>
              <b>{m.type}</b>
            </li>
            {m.items.map((n) => (
              <li key={n}>{n}</li>
            ))}
          </motion.ul>
        ))}
      </div>
    </section>
  );
}

const mySkills = [
  {
    type: 'Programming',
    items: ['HTML5', 'CSS3', 'Scss', 'JavaScript', 'TypeScript'],
  },
  {
    type: 'Frameworks/ Web',
    items: [
      'ReactJS',
      'NextJs',
      'Bootstrap',
      'TailwindCSS',
      'NodeJS',
      'ExpressJS',
    ],
  },
  {
    type: 'Tools',
    items: [
      'VS Code',
      'Github',
      'Postman',
      'Illustrator',
      'Figma',
      'Google Colab',
      'MS office',
      'Google Workplace',
    ],
  },
  {
    type: 'Database',
    items: ['MongoDB', 'MySQL'],
  },
];
