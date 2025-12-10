import React from "react";
import cn from "classnames";
import s from "./Btn.module.scss";

type BtnProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  isDisabled?: boolean;
  isLoading?: boolean;
  onClick?: () => void;
  className?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  type?: "button" | "submit" | "reset";
};

const Btn: React.FC<BtnProps> = ({
  children,
  variant = "primary",
  size = "md",
  isDisabled,
  isLoading,
  onClick,
  className,
  leftIcon,
  rightIcon,
  type = "button",
}) => {
  return (
    <button
      type={type}
      className={cn(s.root, s[variant], s[size], className, {
        [s.disabled]: isDisabled || isLoading,
      })}
      disabled={isDisabled || isLoading}
      onClick={onClick}
    >
      {isLoading && <span className={s.loader}></span>}

      {leftIcon && <span className={s.icon}>{leftIcon}</span>}

      <span className={s.text}>{children}</span>

      {rightIcon && <span className={s.icon}>{rightIcon}</span>}
    </button>
  );
};

export default Btn;
