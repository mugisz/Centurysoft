"use client";
import {
  testimonialAvatarVariants,
  testimonialCardVariants,
  TESTIMONIALS,
} from "@/constants";
import { motion } from "framer-motion";
import Image from "next/image";

export function Testimonials() {
  return (
    <section
      className="py-20 text-white"
      // variants={testimonialsContainerVariants}
      // initial={{ y: 100, opacity: 0 }}
      // whileInView={{ y: 0, opacity: 1 }}
      // transition={{ duration: 0.8, ease: "easeOut" }}
      // viewport={{ once: true, amount: 0.3 }}
    >
      <div className="">
        <h2 className="text-[36px] font-semibold text-center mb-16 text-white">
          Testimonials
        </h2>

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

              <p className="text-gray-300 leading-relaxed overflow-y-auto max-h-[230px] custom-scrollbar">
                {testimonial.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
