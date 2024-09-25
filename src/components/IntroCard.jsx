import React from 'react';
import { motion } from 'framer-motion';

import myPhoto from './myPhoto.jpg';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Button } from '@material-tailwind/react';

const IntroCard = () => {
  let animateduration = 0.3;
  const position = '<mern-stack developer />';
  return (
    <div className='text-slate-800 dark:text-slate-300 pt-10 pb-20   w-full '>
      <div className='flex flex-col items-start gap-4 lg sm:flex-row  sm:items-end sm:gap-8'>
        {/* profile photo  */}
        <motion.img
          src={myPhoto}
          alt='Majedul Hasan'
          className='w-52 h-48 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 outline outline-offset-4 outline-2'
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ type: 'spring', duration: 0.5 }}
          viewport={{ once: true }}
        />
        <section id='intro'>
          <motion.p
            className='text-xl'
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, type: 'spring', duration: 0.5 }}
            viewport={{ once: true }}>
            {position}
          </motion.p>
          <motion.h1
            className='text-slate-900 dark:text-white font-extrabold text-4xl sm:text-5xl leading-[2.5rem] myfont-fraunces'
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, type: 'spring', duration: 0.6 }}
            viewport={{ once: true }}>
            Majedul <br /> Hasan
          </motion.h1>
        </section>
      </div>
      {/* introduction text here  */}
      <motion.p
        className='font-light text-justify leading-6 pt-8 pr-5'
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, type: 'spring', duration: 0.6 }}
        viewport={{ once: true }}>
        I’m a web developer from Bangladesh, specializing in both frontend and
        backend development. My journey began in 2021 where I transitioned from
        a hobbyist to a full-fledged developer after attending an international
        JavaScript workshop and mastering React through professional courses and
        books.
        <br />
        <br />
        Since then, I’ve gained significant expertise in MERN stack development
        (MongoDB, Express, React, Node.js) and worked extensively with both SQL
        (MySQL) and NoSQL (MongoDB) databases. I’ve taken various courses
        including web development from Programming Hero and Learn with Sumit
        (LWS) in my native language where I developed skills in NodeJS, React,
        NextJS, Redux and more about react ecosystem. Also I have skilled on
        templating engines like EJS, Pug, and Handlebars. I’ve also worked with
        Prisma, Mongoose, and Sequelize to streamline database management.
        <br />
        <br />I am currently working towards becoming a microservices developer
        using Node.js, with a focus on cloud-native technologies. To achieve
        this, I have been studying on Docker, Kubernetes, AWS, and CI/CD
        pipelines to enhance my understanding of scalable and containerized
        applications.
      </motion.p>

      <ul className='flex flex-wrap gap-1.5 py-4'>
        {
          // mapping through socials
          socials.map((m) => (
            <motion.li
              key={m.linkto}
              className='p-3 rounded-full hover:text-zinc-900 hover:bg-gradient-to-r from-violet-500 to-fuchsia-500'
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 1,
                type: 'spring',
                duration: animateduration,
              }}
              viewport={{ once: true }}>
              <p className='hidden'>{(animateduration += 0.7)}</p>
              <a
                href={m.linkto}
                target='_blank'
                rel='noopener noreferrer'>
                {m.icon}
              </a>
            </motion.li>
          ))
        }
      </ul>
      <div>
        <a
          href='https://drive.google.com/uc?id=1WBnRC7O9y1f_noT2pvW5fXUvYQCWS2XZ&export=download'
          className='bg-blue-gray-400 border-2  py-3 px-6 hover:bg-transparent '>
          download my resume
        </a>
      </div>
    </div>
  );
};

// data of the social icons in the card introduction
const socials = [
  {
    icon: (
      <React.Fragment>
        <MailOutlineRoundedIcon sx={{ fontSize: 32 }} />
      </React.Fragment>
    ),
    linkto: 'mailto:hasanmajedul@gmail.com',
  },
  {
    icon: (
      <React.Fragment>
        <GitHubIcon sx={{ fontSize: 30 }} />
      </React.Fragment>
    ),
    linkto: 'https://github.com/Majedul-Hasan',
  },
  {
    icon: (
      <React.Fragment>
        <LinkedInIcon sx={{ fontSize: 30 }} />
      </React.Fragment>
    ),
    linkto: 'https://www.linkedin.com/in/hasamajedul',
  },
  {
    icon: (
      <React.Fragment>
        <TwitterIcon sx={{ fontSize: 30 }} />
      </React.Fragment>
    ),
    linkto: 'https://twitter.com/hmajedul',
  },
  {
    icon: (
      <React.Fragment>
        <FacebookIcon sx={{ fontSize: 30 }} />
      </React.Fragment>
    ),
    linkto: 'https://www.facebook.com/h.majedul',
  },
];

export default IntroCard;
