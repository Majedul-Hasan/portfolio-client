import { motion } from 'framer-motion';
import LaunchIcon from '@mui/icons-material/Launch';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useRef, useEffect, useState } from 'react';

export default function ProjectsSection() {
  const [width, setwidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setwidth(
      carousel.current.scrollWidth - (carousel.current.offsetWidth - 300)
    );
  }, []);

  // animation duration
  let durationtime = 0.3;
  return (
    <section
      className='pb-28 '
      id='projects'>
      <h2 className='myfont-fraunces text-3xl sm:text-4xl font-extrabold underline-offset-8 pb-8'>
        Projects
      </h2>

      <motion.div
        ref={carousel}
        className='mycarousel text-slate-700 dark:text-slate-200 cursor-grab w-full overflow-x-hidden'
        whileTap={{ cursor: 'grabbing' }}>
        <motion.div
          drag='x'
          dragConstraints={{ right: 0, left: -width }}
          className='mycarousel-inner flex gap-6'>
          {projects.map((m) => (
            <motion.section
              key={m._id}
              className='item bg-gradient-to-br from-violet-500 to-fuchsia-500 p-1 sm:p-[2px] rounded-lg'
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: durationtime }}
              viewport={{ once: true }}>
              <p className='hidden'>{(durationtime += 0.2)}</p>
              <section className='bg-violet-50 dark:bg-zinc-900 p-6 rounded-lg w-72 sm:w-96 h-full transition-all delay-200 ease-in-out'>
                <h1 className='text-xl font-bold mt-4'>{m.title}</h1>
                <p className='font-light text-sm my-3'>
                  This is a{' '}
                  <span className='underline underline-offset-2 decoration-fuchsia-500 text-black font-normal dark:text-white'>
                    {m.type}
                  </span>
                  . {m.description}
                </p>

                <p className='font-mono font-bold text-sm text-black dark:text-white tracking-wide'>
                  ·{' '}
                  {m.tech.map((n) => (
                    <span key={n}>{n} · </span>
                  ))}
                </p>

                <div className='flex gap-8 my-6'>
                  <a
                    href={m.livelink}
                    target='_blank'
                    rel='noopener noreferrer'>
                    <LaunchIcon sx={{ fontSize: 35 }} />
                  </a>
                  {m.githublink && (
                    <a
                      href={m.githublink}
                      target='_blank'
                      rel='noopener noreferrer'>
                      <GitHubIcon sx={{ fontSize: 35 }} />
                    </a>
                  )}
                  {m.githubClientLink && (
                    <a
                      href={m.githubClientLink}
                      target='_blank'
                      rel='noopener noreferrer'>
                      <GitHubIcon sx={{ fontSize: 35 }} />
                    </a>
                  )}
                  {m.githubServerLink && (
                    <a
                      href={m.githubServerLink}
                      target='_blank'
                      rel='noopener noreferrer'>
                      <GitHubIcon sx={{ fontSize: 35 }} />
                    </a>
                  )}
                </div>
              </section>
            </motion.section>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

const projects = [
  {
    _id: 1,
    title: 'Pen down blog',
    type: 'Blog Application',
    description:
      'multi-user blog application using the MERN stack and React.js. Redux Toolkit. The project included features like user account creation, blog post creation, commenting, and social interactions',
    tech: [
      'React',
      'React-router',
      'nodeJs',
      'express',
      'mongoose',
      'multer',
      'redux',
      'yup',
      'styled-components',
      'fetch',
      'axios',
      'formik',
    ],
    livelink: 'https://mern-blog-frontend.netlify.app/',
    githubClientLink: 'https://github.com/Majedul-Hasan/mern_blog_fronend',
    githubServerLink:
      'https://github.com/Majedul-Hasan/BlogApplication-backend',
  },
  {
    _id: 1,
    title: 'ProShop',
    type: 'e-commerce website',
    description:
      'It displays product catalogue in the homepage fetched from API, product details of each item in separate page and has cart functionality. user can purchase products using payPal and can drop comments and rate the products',
    tech: [
      'React',
      'React-router',
      'nodeJs',
      'express',
      'mongoose',
      'multer',
      'redux',
      'paypal',
      'react-router-bootstrap',
      'bootstrap',
      'fetch',
      'Fakestore API',
    ],
    livelink: 'https://mern-e-shop.netlify.app/',
    githublink: 'https://github.com/Majedul-Hasan/proShop',
  },
  {
    _id: 2,
    title: 'Summer camp school',
    type: 'Learning management system',
    description:
      'a comprehensive Learning Management System (LMS) built using the MERN stack (MongoDB, Express.js, React.js, and Node.js).  User Authentication: Secure access using Firebase authentication ensures a safe and reliable platform for all users. Students, instructors, and admins have distinct roles and privileges, allowing for efficient management and supervision. Instructors can easily create, upload, and update courses, admin has supper power,  Stripe payment processing for enrolled courses, Interactive Components:',
    tech: [
      'React',
      'Tailwind CSS',
      'Framer Motion',
      'stripe',
      'reduxjs/toolkit',
      'react-parallax-mouse',
      'firebase',
      'sweetalert2',
      'nodeJs',
      'express',
      'mongoose',
      'multer',
    ],
    livelink: 'https://summer-camp-language-school.web.app/',
    githubClientLink: 'https://github.com/Majedul-Hasan/summer-camp-client',
    githubServerLink: 'https://github.com/Majedul-Hasan/summer-camp-server',
  },
  {
    _id: 3,
    title: 'crown-clothing',
    type: 'e-commerce website',
    description:
      'It displays product catalogue in the homepage fetched from firebase, has cart functionality. user can purchase products using card',
    tech: [
      'React',
      'sass',
      'stripe',
      'redux',
      'redux-persist',
      'redux-saga',
      'styled-components',
      'firebase',
      'nodeJs',
      'axios',
      'express',
    ],
    livelink: 'https://cwnclothing.netlify.app/',
    githublink: 'https://github.com/Majedul-Hasan/crown-clothing-strip',
  },
];
