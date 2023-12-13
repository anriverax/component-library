"use client";

// Import React and required components
import React from "react";
import Link from "next/link";

import { buttonsCollection } from "@/components/buttonPage/buttons-collection";
import TabLayout from "@/components/layout/tab-layout";

/* eslint-disable */
const ButtonPage = (): React.JSX.Element => {
  return (
    <div>
      <h1 className="font-bold text-3xl mb-6">Button</h1>
      <article>
        <h2 className="font-bold text-2xl mb-3">Import</h2>
        <p>If you want to use this component, you need the following packages:</p>
        <ul>
          <li>
            <Link href="https://github.com/framer/motion/tree/main/packages/framer-motion">
              framer-motion
            </Link>
          </li>
        </ul>
        <p>Then, you must copy the following folders:</p>
        <ul>
          <li></li>
        </ul>
      </article>
      <TabLayout items={buttonsCollection} />
    </div>
  );
};

// Export the ButtonPage component as the default export
export default ButtonPage;
