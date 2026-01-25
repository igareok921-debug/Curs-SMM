import type { HTMLMotionProps } from "framer-motion";
import { easeOut, motion } from "framer-motion";

type Variant = "primary" | "secondary" | "ghost";

type Props = HTMLMotionProps<"button"> & {
  variant?: Variant;
  hoverScale?: number;
};

const base =
  "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition-colors duration-200 ease-out " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2 focus-visible:ring-offset-bg";

const variants: Record<Variant, string> = {
  primary: "bg-burgundy text-bg hover:bg-burgundy/95",
  secondary: "bg-burgundy text-bg hover:bg-burgundy/95",
  ghost: "bg-transparent text-burgundy hover:bg-burgundy/10",
};

export function Button({ variant = "primary", className = "", hoverScale, ...props }: Props) {
  const classes = `${base} ${variants[variant]} ${className}`;
  const motionProps = hoverScale
    ? { whileHover: { scale: hoverScale }, transition: { duration: 0.18, ease: easeOut } }
    : {};

  return <motion.button className={classes} {...motionProps} {...props} />;
}
