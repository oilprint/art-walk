import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { logoSmall } from '../assets/icons';
import { socialList } from '../constants';
import { animateScroll } from 'react-scroll';

console.log(socialList);

const Footer = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const options = {
    // your options here, for example:
    duration: 500,
    smooth: true,
  };

  animateScroll.scrollToTop(options);

  return (
    <footer className="container">
      <div className="bg-dark rounded-[40px] pt-[60px] pb-6 text-center">
        <a
          onClick={() => animateScroll.scrollToTop(options)}
          className="flex justify-center items-center mb-8">
          <motion.img
            className="mx-auto h-auto"
            whileHover={{
              scale: 1.2,
              transition: { easy: 'easeInOut', duration: 0.4 },
            }}
            src={logoSmall}
            alt="Logo Art Walk Shoes"
            width={125}
            height={78}
          />
        </a>
        <ul className="flex  flex-wrap justify-center gap-x-8 gap-y-3 font-lucky text-accent text-2xl sm:mb-11 mb-7">
          {socialList.map((item) => (
            <li key={item.id}>
              <a
                className="hover:text-light transition ease-in-out duration-300"
                href={item.href}
                target="_blank"
                title={`Look at our ${item.title}`}>
                {item.title}
              </a>
            </li>
          ))}
        </ul>
        <ul className="flex flex-wrap justify-center gap-x-8 gap-y-2 mb-2 max-w-[400px] w-full">
          <li className="polisyList">{`© ${new Date().getFullYear()}. All rights reserved`}</li>
          <li className="polisyList hover:text-accent transition ease-in-out duration-300">
            <Link to="policy"> Terms </Link>
          </li>
          <li className="polisyList hover:text-accent transition ease-in-out duration-300">
            <Link to="policy"> Privacy </Link>
          </li>
        </ul>
        <a
          className="text-primary/80 inline-block w-auto hover:text-accent transition ease-in-out duration-300"
          href="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=kozlova.ux@gmail.com"
          target="_blank">
          created by kozlova.ux
        </a>
      </div>
    </footer>
  );
};

export default Footer;
