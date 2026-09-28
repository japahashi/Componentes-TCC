import type { ReactNode } from "react";
import "./IconSlot.css";

interface IconSlotProps {
  icon?: ReactNode;
  label?: string;
  size?: number;
  className?: string;
}

function IconSlot({ icon, label = "icon", size = 20, className = "" }: IconSlotProps) {
  return (
    <span className={"icon-slot " + className} style={{ width: size, height: size }}>
      {icon ? icon : <span className="icon-slot-placeholder">{label}</span>}
    </span>
  );
}

export default IconSlot;
