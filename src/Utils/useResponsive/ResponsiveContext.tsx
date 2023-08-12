import React, { createContext, useContext, ReactNode } from "react";
import useResponsive from "../useResponsive";

interface ResponsiveState {
  isMobile: boolean;
  isTablet: boolean;
  isPc: boolean;
}

const ResponsiveContext = createContext<ResponsiveState | undefined>(undefined);

export function useResponsiveContext(): ResponsiveState {
  const context = useContext(ResponsiveContext);

  if (context === undefined) {
    throw new Error("useResponsiveContext must be used within a ResponsiveProvider");
  }

  return context;
}

interface ResponsiveProviderProps {
  children: ReactNode;
}

export function ResponsiveProvider({ children }: ResponsiveProviderProps) {
  const responsiveState = useResponsive();

  return <ResponsiveContext.Provider value={responsiveState}>{children}</ResponsiveContext.Provider>;
}
