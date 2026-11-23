import React, { useEffect } from "react";
import { NavigationType, useLocation, useNavigationType } from "react-router";

/**
 * Scrolls to the element named by the URL hash (or to the top) after each in-app link
 * navigation, replacing react-router-hash-link. Back/forward and the initial page load are
 * left to the browser's own scroll restoration.
 */
export const ScrollToHash: React.FC = () => {
  const { hash, key } = useLocation();
  const navigationType: NavigationType = useNavigationType();

  useEffect(() => {
    if (navigationType === NavigationType.Pop) {
      return;
    }
    const target: HTMLElement | null = hash.length > 1 ? document.getElementById(decodeURIComponent(hash.slice(1))) : null;
    if (target) {
      target.scrollIntoView();
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash, key, navigationType]);

  return null;
};
