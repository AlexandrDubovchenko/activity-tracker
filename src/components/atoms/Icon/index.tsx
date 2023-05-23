import { FC } from "react";
import classNames from "classnames";
import { icons, IconsType } from "./icons";

import styles from './styles.module.scss'

type IconProps = {
  icon: IconsType;
  size?: 'small' | 'normal';
  className?: string;
}

export const Icon: FC<IconProps> = ({
  icon,
  size = 'normal',
  className,
}) => {
  const classList = classNames(styles.root, {
    [styles.normal]: size === 'normal',
    [styles.small]: size === 'small',
  }, className)
  return <span className={classList}>
    {icons[icon]}
  </span>
}
