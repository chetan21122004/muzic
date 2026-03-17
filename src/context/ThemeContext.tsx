import { useEffect } from "react";

// Always-dark: apply once on mount, no toggle needed
export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return <>{children}</>;
};

// Kept for compatibility if imported elsewhere — no-op
export const useTheme = () => ({ theme: "dark" as const, toggleTheme: () => {} });
