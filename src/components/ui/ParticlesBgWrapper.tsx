"use client";

import { FC } from "react";

import ParticlesBackground from "@/components/ui/ParticlesBackground";

const ParticlesBgWrapper: FC<{ children: React.ReactNode }> = ({
  children,
}): JSX.Element => {
  return (
    <div className="overflow-hidden overflow-y-hidden">
      <ParticlesBackground>{children}</ParticlesBackground>
    </div>
  );
};

export default ParticlesBgWrapper;
