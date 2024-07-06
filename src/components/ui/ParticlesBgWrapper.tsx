"use client";

import { FC } from "react";

import ParticlesBackground from "@/components/ui/ParticlesBackground";

const ParticlesBgWrapper: FC<{ children: React.ReactNode }> = ({
  children,
}): JSX.Element => {
  return <ParticlesBackground>{children}</ParticlesBackground>;
};

export default ParticlesBgWrapper;
