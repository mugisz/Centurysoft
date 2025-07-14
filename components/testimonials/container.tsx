"use client";
import Avatar from "@/assets/avatar.png";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
const TESTIMONIALS = [
  {
    id: 1,
    name: "Claire Bell",
    role: "Designer",
    avatar: Avatar,
    text: "Slate helps you see how many more days you need to work to reach your financial goal for the month and year. Slate helps you see how many more days you need to work to reach your financial goal for the month and year.your financial goal for the month and year.",
  },
  {
    id: 2,
    name: "Francisco Lane",
    role: "Designer",
    avatar: Avatar,
    text: "Slate helps you see how many more days you need to work to reach your financial goal for the month and year. Slate helps you see how many more days you need to work to reach your financial goal for the month and year.",
  },
  {
    id: 3,
    name: "Ralph Fisher",
    role: "Designer",
    avatar: Avatar,
    text: "Slate helps you see how many more days you need to work to reach your financial goal for the month and year. Slate helps you see how many more days you need to work to reach your financial goal for the month and year.your financial goal for the month and year.",
  },
  {
    id: 4,
    name: "Jorge Murphy",
    role: "Designer",
    avatar: Avatar,
    text: "Slate helps you see how many more days you need to work to reach your financial goal for the month and year. Slate helps you see how many more days you need to work to reach your financial goal for the month and year.",
  },
];

export function Testimonials() {
  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
        ease: "easeOut",
      },
    },
  };

  const titleVariants: Variants = {
    hidden: {
      opacity: 0,
      y: -30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const cardVariants: Variants = {
    hidden: {
      opacity: 0,
      scale: 0.9,
      y: 30,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const avatarVariants: Variants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: 0.2,
      },
    },
  };

  return (
    <motion.section
      className="py-20  text-white"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="">
        <motion.h2
          variants={titleVariants}
          className="text-[36px] font-semibold text-center mb-16"
        >
          Testimonials
        </motion.h2>

        <div className="flex flex-row  flex-wrap w-full justify-center gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              variants={cardVariants}
              whileHover={{
                scale: 1.02,
                y: -5,
                transition: { duration: 0.3 },
              }}
              className={`bg-transparent border max-w-[300px] ${
                index === 3
                  ? "max-h-[300px] relative top-[-10px]"
                  : "max-h-[330px]"
              } sm:max-w-[400px] border-white/ rounded-lg p-8 overflow-hidden  hover:border-gray-600 transition-colors duration-300`}
            >
              <div className="flex items-center ">
                <motion.div
                  variants={avatarVariants}
                  className="w-16 h-16 rounded-full  flex items-center justify-center  overflow-hidden"
                >
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={50}
                    height={50}
                    className=" rounded-full  flex items-center justify-center mr-4 overflow-hidden"
                  />
                </motion.div>
                <div>
                  <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                  <p className="font-semibold text-sm">{testimonial.role}</p>
                </div>
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-gray-300 leading-relaxed overflow-y-scroll max-h-[230px]"
              >
                {testimonial.text}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
