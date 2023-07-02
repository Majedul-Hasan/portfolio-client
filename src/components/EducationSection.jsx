import { motion } from 'framer-motion';

export default function EducationSection() {
  return (
    <section className='pb-24 max-w-xl break-words'>
      <h2 className='myfont-fraunces text-3xl sm:text-4xl font-extrabold underline-offset-8 pb-8'>
        Education
      </h2>

      <div className='flex flex-col text-slate-800 dark:text-slate-200'>
        {data.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}>
            <div className='flex items-baseline w-full'>
              <div className='circle'>
                <section className='w-3 h-3 rounded-full bg-fuchsia-500'></section>
              </div>
              <div className='title ml-8 mt-1 text-sm'>
                <b>{m.time}</b>
              </div>
            </div>

            <div className='flex items-stretch'>
              <div className='circle w-3'>
                <section className='ml-1 w-[2px] h-full bg-slate-800 dark:bg-slate-200'></section>
              </div>
              <div className='flex items-center '>
                <div className='w-2/12 '>
                  <img
                    src={m.logo}
                    alt=''
                  />
                </div>
                <div className='title ml-8  flex flex-col items-center'>
                  <span>{m.degree}</span>
                  <p className='text-xs font-light'> - from {m.from}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

const data = [
  {
    degree: 'Bachelor of Science in Physics',
    from: 'Jagannath University of Dhaka',
    logo: './assets/jagannathUniversity.png',
  },
  {
    degree: 'Higher Secondary Certificate in science',
    from: 'Narsingdi Govt. College',
    logo: './assets/narsingdiGovtCollege.png',
  },
  {
    degree: 'Madhabdi S.P. Institution',
    from: 'Secondary School Certificate in science',
    logo: './assets/Mspi.png',
  },
];
