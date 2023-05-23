import { FC } from "react";
import { Icon } from "@/components/atoms/Icon"
import { IconsType } from "@/components/atoms/Icon/icons"

import styles from './styles.module.scss'
import classNames from "classnames";

type ChipProps = {
  icon?: IconsType;
  text?: string;
  className?: string;
  textClassName?: string;
}

export const Chip: FC<ChipProps> = ({
  icon,
  text,
  className,
  textClassName,
}) => {
  return (
    <div className={classNames(styles.root, className)}>
      {icon && <Icon icon={icon} />}
      {text && <p className={classNames(styles.text, textClassName)}>{text}</p>}
    </div>
  )
}
