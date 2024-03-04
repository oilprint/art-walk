import { Link } from 'react-router-dom';
import { logoSmall } from '../assets/icons';
import { socialList } from '../constants';

console.log(socialList);

const Footer = () => {
  return (
    <footer className="container bg-dark rounded-[40px] pt-[60px] pb-6 text-center">
      <Link to="/" className="flex justify-center items-center sm:mb-8 mb-5">
        <img src={logoSmall} alt="Logo Art Walk Shoes" width={125} height={78} />
      </Link>
      <ul className="flex justify-center gap-8 font-lucky text-accent text-2xl sm:mb-11 mb-7">
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
      <ul className="flex justify-center gap-8 mb-2">
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
    </footer>
  );
};

export default Footer;
