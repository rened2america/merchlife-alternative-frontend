"use client";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import React, { useRef, useState } from "react";

type FeaturesProps = {
  name: string;
  description: string;
  logo: React.ReactNode;
};

const CardSpotlight = (props: FeaturesProps) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current || isFocused) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <Card
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative overflow-hidden rounded-xl border bg-white dark:border-gray-800 dark:bg-gradient-to-r dark:from-black dark:to-neutral-950 dark:shadow-2xl"
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,182,255,.1), transparent 40%)`,
        }}
      />
      <div className="pl-6 pt-6">{props.logo}</div>
      <CardHeader className="pb-6">
        <CardTitle className="text-xl">{props.name}</CardTitle>
        <CardDescription>{props.description}</CardDescription>
      </CardHeader>
      <CardFooter className="gap-x-1">
        <Link href="https://tools.usps.com/go/TrackConfirmAction.action?tLabels=9400111105500536700819">
          <Button variant="outline" className="w-full">
            Tracking
          </Button>
        </Link>
        <Link href="https://checkout.stripe.com/c/pay/cs_live_a1nlc8rYgto9eclKXPHLCu7DsYaaJqFrf6D09ZBTDANsnWYLOvAqZUV382#fidkdWxOYHwnPyd1blppbHNgWjA0SjNyVUhCblJnNER1MlBPdlw0VXJiS0NLd2lNbUNLV2dMZ3Q0ME5XdFxCdGBEbXQ9UUFLPHA1am1DRDY8M19sfE9ddzZDNmg3fFxtQ0wzbWBEbzRCNWtRNTVXUW4wZlRRdycpJ2N3amhWYHdzYHcnP3F3cGApJ2lkfGpwcVF8dWAnPyd2bGtiaWBabHFgaCcpJ2BrZGdpYFVpZGZgbWppYWB3dic%2FcXdwYHgl">
          <Button variant="outline" className="w-full">
            Re-order
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default CardSpotlight;
