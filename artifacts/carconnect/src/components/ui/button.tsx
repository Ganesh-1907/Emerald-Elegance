import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "link" | "glass";
  size?: "default" | "sm" | "lg" | "icon";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95",
          
          // Variants
          variant === "default" && "bg-primary text-primary-foreground shadow-[0_0_15px_rgba(74,222,128,0.3)] hover:shadow-[0_0_25px_rgba(74,222,128,0.6)] hover:bg-primary/90",
          variant === "outline" && "border-2 border-primary text-primary hover:bg-primary/10 shadow-[inset_0_0_10px_rgba(74,222,128,0),0_0_10px_rgba(74,222,128,0)] hover:shadow-[inset_0_0_15px_rgba(74,222,128,0.2),0_0_15px_rgba(74,222,128,0.3)]",
          variant === "ghost" && "hover:bg-primary/10 hover:text-primary text-foreground",
          variant === "link" && "text-primary underline-offset-4 hover:underline",
          variant === "glass" && "glass-panel text-foreground hover:border-primary/50 hover:bg-black/60",
          
          // Sizes
          size === "default" && "h-11 px-6 py-2",
          size === "sm" && "h-9 px-4 text-xs",
          size === "lg" && "h-14 px-8 text-base",
          size === "icon" && "h-11 w-11",
          className
        )}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
