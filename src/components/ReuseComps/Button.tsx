import React from "react";
import * as RemixIcon from "remixicon-react";

interface ButtonProps {
  style?: string;
  content: string;
  icon?: keyof typeof RemixIcon; // Only valid icon names
  iconPosition?: "left" | "right";
}

const Button: React.FC<ButtonProps> = ({
  style = "",
  content,
  icon,
  iconPosition = "left",
}) => {
  const IconComponent = icon ? RemixIcon[icon] : null;

  return (
    <button className={`flex items-center gap-2 ${style} px-4 py-2 rounded-md`}>
      {iconPosition === "left" && IconComponent && <IconComponent size={20} />}
      <span>{content}</span>
      {iconPosition === "right" && IconComponent && <IconComponent size={20} />}
    </button>
  );
};

export default Button;
