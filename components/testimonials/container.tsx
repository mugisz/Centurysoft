"use client";
import {
  testimonialAvatarVariants,
  testimonialCardVariants,
  TESTIMONIALS,
  testimonialsContainerVariants,
  testimonialTitleVariants,
} from "@/constants";
import { motion } from "framer-motion";
import Image from "next/image";

export function Testimonials() {
  return (
    <motion.section
      className="py-20 text-white"
      variants={testimonialsContainerVariants}
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="">
        <motion.h2
          variants={testimonialTitleVariants}
          className="text-[36px] font-semibold text-center mb-16"
        >
          Testimonials
        </motion.h2>

        <div className="flex flex-row flex-wrap w-full justify-center gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              variants={testimonialCardVariants}
              whileHover={{
                scale: 1.02,
                y: -5,
                transition: { duration: 0.3 },
              }}
              className={`bg-transparent border max-w-[300px] ${
                index === 3
                  ? "max-h-[300px] relative top-[-10px]"
                  : "max-h-[330px]"
              } sm:max-w-[400px] border-white/30 rounded-lg p-8 overflow-hidden hover:border-gray-600 transition-colors duration-300`}
            >
              <div className="flex items-center">
                <motion.div
                  variants={testimonialAvatarVariants}
                  className="w-16 h-16 rounded-full flex items-center justify-center overflow-hidden"
                >
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={50}
                    height={50}
                    className="rounded-full flex items-center justify-center mr-4 overflow-hidden"
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
                className="text-gray-300 leading-relaxed overflow-y-auto max-h-[230px] custom-scrollbar"
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
