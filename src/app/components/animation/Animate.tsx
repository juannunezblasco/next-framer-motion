"use client";

import { PropsWithChildren } from "react";
import { DELAY, useNavigationTransition } from "./context";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { LoadingSpinner } from "./LoadingSpinner";

export default function Animate({ children }: PropsWithChildren) {
  const { pending } = useNavigationTransition();
  const pathname = usePathname();
  return (
    <AnimatePresence mode="popLayout">
      {!pending && (
        <motion.div
          key={pathname}
          className="flex-1"
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 300, opacity: 0 }}
          transition={{ ease: "circInOut", duration: DELAY / 1000 }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}