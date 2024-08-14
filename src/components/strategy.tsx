"use client";
import React from "react";
import Card from "./card";

export default function Strategy() {
  return (
    <div className="py-12 w-full md:max-w-full md:px-24 lg:py-20 bg-[#ffc501]">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        <Card imageUrl="/background.png" altImageText="Strategy" />
      </div>
    </div>
  );
}
