"use client";
import React from "react";
import { PinContainer } from "@/components/ui/3d-pin";
import Image from "next/image";
import { motion } from "framer-motion";
import { HtmlCssAndNextjsCardType } from "@/types/type";
export function NextProjectCard({
  title,
  snug,
  img,
  url,
}: HtmlCssAndNextjsCardType): JSX.Element {
  return (
    <motion.div
      initial={{ x: 140, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{
        delay: 0.3,
        x: { type: "spring", stiffness: 60 },
        opacity: { duration: 1 },
        ease: "easeIn",
        duration: 1,
      }}
      className="h-[20rem] w-full flex items-center justify-center my-16   "
    >
      <PinContainer title={title} href={url}>
        <div className=" flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <motion.h3
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.4,
              y: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
            className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100"
          >
            {title}
          </motion.h3>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.5,
              y: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
            className="text-base !m-0 !p-0 font-normal"
          >
            <span className="text-white ">{snug}</span>
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
            className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500"
          >
            <Image src={img} alt="image" />
          </motion.div>
        </div>
      </PinContainer>
    </motion.div>
  );
}
