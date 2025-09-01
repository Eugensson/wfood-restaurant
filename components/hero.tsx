"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";

import { fadeIn } from "@/lib/variants";

export const Hero = () => {
  return (
    <section
      className="bg-hero bg-no-repeat relative xl:bg-cover xl:h-274.5 pt-40 pb-32 xl:py-0"
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex items-center xl:h-240">
          <div className="w-full xl:max-w-115 text-center xl:text-left">
            <motion.h1
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.4 }}
              className="h1 text-white mb-7"
            >
              A taste of local <br /> flavours
            </motion.h1>
            <motion.p
              variants={fadeIn("down", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.4 }}
              className="text-white font-semibold mb-7"
            >
              by: <span className="text-orange">Wildan Wari</span>
            </motion.p>
            <motion.p
              variants={fadeIn("down", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.4 }}
              className="text-white mb-12 max-w-150 mx-auto xl:max-w-none xl:mx-0"
            >
              Discover the rich taste of local ingredients carefully crafted
              into authentic dishes. Experience flavors that celebrate tradition
              and creativity, bringing every bite to life in a memorable
              culinary journey.
            </motion.p>
            <motion.div
              variants={fadeIn("down", 0.8)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.4 }}
            >
              <Button>Let&apos;s Eat</Button>
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn("up", 0.8)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.1 }}
            className="hidden xl:flex xl:absolute xl:top-50 xl:right-0"
          >
            <Image
              src="/hero/plate.png"
              alt="Plate with dish"
              width={756}
              height={682}
            />
          </motion.div>
        </div>
      </div>
      <motion.div
        variants={fadeIn("up", 1.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.1 }}
        className="hidden xl:flex xl:relative xl:-top-36"
      >
        <Image
          src="/hero/coffee.png"
          alt="Cup of coffee"
          width={386}
          height={404}
        />
      </motion.div>
    </section>
  );
};
