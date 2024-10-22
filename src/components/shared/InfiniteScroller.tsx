"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const InfiniteScroller = ({ text }: { text: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationFrameId: number | null = null;
    let lastTimestamp = performance.now();
    let scrollPosition = 0;

    const animateScroll = (timestamp: number) => {
      const delta = timestamp - lastTimestamp;
      lastTimestamp = timestamp;

      // Adjust scroll speed as needed
      const scrollSpeed = 0.2;

      if (containerRef.current) {
        scrollPosition += scrollSpeed * delta;
        const width = containerRef.current.scrollWidth;
        const x = scrollPosition % width;
        containerRef.current.style.transform = `translate3d(-${x}px, 0, 0)`;

        // Reset scroll position to start when reaching end
        if (x >= width / 2) {
          scrollPosition = 0;
        }
      }

      animationFrameId = requestAnimationFrame(animateScroll);
    };

    animationFrameId = requestAnimationFrame(animateScroll);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

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
      className="overflow-hidden whitespace-nowrap mb-16"
    >
      <motion.div ref={containerRef} className="flex space-x-4 ">
        {[...Array(2)].map((_, i) => (
          <span
            key={i}
            className="uppercase text-6xl sm:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 dark:from-blue-500 via-purple-500 to-pink-600 dark:to-pink-500"
          >
            {text}
          </span>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default InfiniteScroller;
