import { HelpSidebarKeys } from "@/lib/enums";
import { useState } from "react";

export const useHelpSidebar = () => {
  const [activeSidebars, setActiveSidebars] = useState<string[]>(
    Object.values(HelpSidebarKeys), // initially show all
  );

  function hide(id: HelpSidebarKeys) {
    setActiveSidebars((prev) => prev.filter((sidebar) => sidebar !== id));
  }

  function show(id: HelpSidebarKeys) {
    setActiveSidebars((prev) => [...prev, id]);
  }

  function isOpen(id: HelpSidebarKeys) {
    return activeSidebars.includes(id);
  }

  function toggle(id: HelpSidebarKeys) {
    setActiveSidebars((prev) => {
      if (prev.includes(id)) {
        return prev.filter((sidebar) => sidebar !== id);
      } else {
        return [...prev, id];
      }
    });
  }

  return {
    hide,
    toggle,
    show,
    activeSidebars,
    isOpen,
  };
};
