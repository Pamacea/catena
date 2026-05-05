"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState, useRef, type ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
}

/**
 * Wrapper that animates page content on route changes.
 * Detects pathname changes, plays exit animation, swaps content, then enters.
 */
export function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  const [displayChildren, setDisplayChildren] = useState(children);
  const [isExiting, setIsExiting] = useState(false);
  const savedChildren = useRef(children);
  const savedPathname = useRef(pathname);

  // When pathname changes, trigger exit → swap → enter
  useEffect(() => {
    if (savedPathname.current !== pathname) {
      savedPathname.current = pathname;
      setIsExiting(true);

      const timeout = setTimeout(() => {
        savedChildren.current = children;
        setDisplayChildren(children);
        setIsExiting(false);
      }, 180);

      return () => clearTimeout(timeout);
    }
    // Same pathname — just update children (e.g. searchParams)
    savedChildren.current = children;
    setDisplayChildren(children);
  }, [pathname, children]);

  return (
    <div className={isExiting ? "page-exit" : "page-enter"}>
      {displayChildren}
    </div>
  );
}
