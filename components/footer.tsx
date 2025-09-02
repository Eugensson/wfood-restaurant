"use client";

import { motion } from "framer-motion";

import { Logo } from "@/components/logo";
import Socials from "@/components/socials";
import { BlogNav } from "@/components/blog-nav";
import { NewsNav } from "@/components/news-nav";

import { fadeIn } from "@/lib/variants";

export const Footer = () => {
  return (
    <motion.footer
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0 }}
      className="bg-footer bg-cover bg-no-repeat text-white pt-16"
    >
      <section className="container mx-auto">
        <div className="grid grid-cols-1 xl:grid-cols-[250px_1fr]">
          <Logo width={90} height={36} className="block mb-8 xl:mb-0" />
          <div className="mb-8 xl:mb-16 grid grid-cols-1 xl:grid-cols-3 gap-10">
            <BlogNav />
            <NewsNav />
            <Socials />
          </div>
        </div>
        <p className="py-4 border-t border-white/10 text-white/60 text-center text-sm">
          Copyright &copy; W&apos;Food-Restaurant 2025
        </p>
      </section>
    </motion.footer>
  );
};
