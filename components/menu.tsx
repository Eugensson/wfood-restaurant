"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { IoIosArrowRoundForward } from "react-icons/io";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { fadeIn } from "@/lib/variants";
import { MENU_ITEMS } from "@/constants";
import { formatCurrency } from "@/lib/utils";

export const Menu = () => {
  return (
    <section className="relative py-12 xl:py-24 bg-menu" id="menu">
      <div className="container mx-auto">
        <motion.div
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="max-w-[570px] mx-auto text-center xl:text-right"
        >
          <h2 className="mb-3 capitalize">Favorite menu</h2>
          <Link
            href="#"
            className="text-green flex items-center justify-center xl:justify-end mb-16"
          >
            View all
            <IoIosArrowRoundForward size={30} />
          </Link>
        </motion.div>
        <motion.ul
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-7 md:gap-5 shadow-primary"
        >
          {MENU_ITEMS.map(({ id, img, title, price }) => (
            <li key={id} className="group bg-white">
              <Card className="pt-0 w-full rounded-none border-none">
                <CardContent className="relative p-0 w-full overflow-hidden">
                  <Image
                    src={img}
                    alt={title}
                    width={290}
                    height={290}
                    className="aspect-square object-cover w-full h-full group-hover:scale-110 transition-all duration-300"
                  />
                </CardContent>
                <CardHeader>
                  <CardTitle>
                    <Link href="/">
                      <h3 className="min-h-9 md:min-h-18 line-clamp-2 font-poppins text-black">
                        {title}
                      </h3>
                    </Link>
                  </CardTitle>
                  <CardDescription className="text-2xl font-poppins font-semibold text-orange">
                    {formatCurrency(price, "USD")}
                  </CardDescription>
                </CardHeader>
              </Card>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};

//  mx-auto xl:mx-0 group
