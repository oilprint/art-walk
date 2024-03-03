import { useState } from 'react';
import { motion } from 'framer-motion';
import { shoes } from '../constants';
import { bigShoe1, bigShoe2 } from '../assets/images';

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

  return (
    <section className="container ">
      <div className="relative pt-6 pb-[60px]">
        <div className="absolute top-[110px] left-14">
          <p className="text-xl text-grey font-medium mb-1 uppercase">
            New impressionism collection
          </p>
          <p
            className={`font-lucky text-[88px] leading-[1] mb-5 ${
              bigShoeImg === bigShoe2 ? 'text-accent' : 'text-[#C54425]'
            }
            `}>
            Artistry in Motion:
          </p>
          <h1 className="text-[44px] text-primary font-bold uppercase max-w-[550px] w-full mb-8 ">
            Discover Our Inspired Sneaker Collection{' '}
          </h1>
          <motion.a
            href="#catalog"
            className="inline-block cursor-pointer shrink-0 px-10 py-2 font-lucky text-base rounded-[40px] border-2  bg-accent text-light border-primary border-solid  hover:text-primary transition ease-in-out duration-300 "
            whileHover={{ scale: 1.2 }}
            onHoverStart={(e) => {}}
            onHoverEnd={(e) => {}}>
            Buy Now
          </motion.a>
        </div>
        <img
          src={bigShoeImg}
          alt="new collection"
          width={1200}
          height={720}
          className="object-cover rounded-[40px]"
        />
        <ul className="absolute  flex items-center gap-3 bottom-[100px] left-[56px] ">
          {shoes.map((item, index) => (
            <li key={index}>
              <motion.img
                whileHover={{ scale: 1.1 }}
                className={`cursor-pointer border-2 border-solid rounded-[20px] ${
                  bigShoeImg === item.bigShoe ? 'border-accent' : 'border-dark'
                } hover:border-accent transition ease-in-out duration-300`}
                onClick={() => setBigShoeImg(item.bigShoe)}
                src={item.thumbnail}
                alt="new collection"
                width={160}
                height={110}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Hero;
