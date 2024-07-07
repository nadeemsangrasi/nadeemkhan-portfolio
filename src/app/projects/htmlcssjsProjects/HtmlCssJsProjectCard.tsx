"use client";
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";
import { motion } from "framer-motion";
import { HtmlCssAndNextjsCardType } from "@/types/type";
export function HtmlCssJsProjectCard({
  title,
  snug,
  img,
  url,
}: HtmlCssAndNextjsCardType): React.JSX.Element {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{
        delay: 0.2,
        y: { type: "spring", stiffness: 60 },
        opacity: { duration: 1 },
        ease: "easeIn",
        duration: 1,
      }}
    >
      <CardContainer className="inter-var">
        <CardBody className=" relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] bg-black  w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.4,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
          >
            <CardItem translateZ="50" className="text-xl font-bold  text-white">
              {title}
            </CardItem>
          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.5,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
          >
            <CardItem
              as="p"
              translateZ="60"
              className=" text-sm max-w-sm mt-2 text-white"
            >
              {snug}
            </CardItem>
          </motion.div>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.6,
              y: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
          >
            <CardItem translateZ="100" className="w-full mt-4">
              <Link href={url}>
                <Image
                  src={img}
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt={title + " image"}
                />
              </Link>
            </CardItem>
          </motion.div>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.7,
              y: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
            className="flex justify-between items-center mt-20"
          >
            <CardItem
              translateZ={20}
              as={Link}
              href={url}
              target="__blank"
              className="px-4 py-2 rounded-xl text-xs font-normal text-white"
            >
              Try now →
            </CardItem>
          </motion.div>
        </CardBody>
      </CardContainer>
    </motion.div>
  );
}
