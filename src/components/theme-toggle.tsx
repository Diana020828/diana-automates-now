import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";
import { motion } from "framer-motion";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleTheme}
      className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full p-0 hover:bg-secondary/80 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      <motion.div
        initial={false}
        animate={{ 
          rotate: theme === "dark" ? 0 : 180,
          scale: theme === "dark" ? 1 : 0,
          opacity: theme === "dark" ? 1 : 0
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <Moon className="h-4 w-4 sm:h-5 sm:w-5" />
      </motion.div>
      <motion.div
        initial={false}
        animate={{ 
          rotate: theme === "light" ? 0 : 180,
          scale: theme === "light" ? 1 : 0,
          opacity: theme === "light" ? 1 : 0
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <Sun className="h-4 w-4 sm:h-5 sm:w-5" />
      </motion.div>
    </Button>
  );
}