"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";

import { fadeIn } from "@/lib/variants";

export const About = () => {
  return (
    <section
      className="grid grid-cols-1 xl:grid-cols-2 gap-x-12 p-8 md:p-12 xl:p-0 items-center"
      id="about"
    >
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
        className="xl:pl-30"
      >
        <h1 className="mb-9">Let&apos;s Talk About W&apos;Food</h1>
        <p className="mb-8">
          At W&apos;Food Restaurant, we believe that great dining is more than
          just delicious meals—it&apos;s about creating memorable experiences.
          Our chefs carefully select the freshest ingredients to craft dishes
          that celebrate both tradition and modern flavors. Whether you&apos;re
          joining us for a casual lunch, a family dinner, or a special
          celebration, you can expect warm hospitality and food made with
          passion.
        </p>
        <p className="mb-10">
          Our menu is inspired by global cuisine, offering a variety of options
          to satisfy every taste. From hearty classics to light seasonal plates,
          each dish is prepared with attention to detail and a focus on quality.
          At W&apos;Food, we aim to be more than a restaurant—we are a place
          where friends gather, families connect, and every guest feels at home.
        </p>
        <Button>Read More</Button>
      </motion.div>
      <motion.div
        variants={fadeIn("left", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
      >
        <Image
          src="/about/img.png"
          alt="Restaurant titchen"
          width={705}
          height={771}
          className="hidden xl:flex"
        />
      </motion.div>
    </section>
  );
};
