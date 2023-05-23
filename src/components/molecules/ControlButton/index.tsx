import { FC } from "react"
import classNames from "classnames"
import { Button, ButtonProps } from "@components/atoms/Button"
import { Icon } from "@components/atoms/Icon"
import { IconsType } from "@components/atoms/Icon/icons"

import styles from './styles.module.scss'

type ControlButtonProps = Omit<ButtonProps, 'children'> & {
  icon: IconsType,
  size?: 'normal' | 'large'
}

export const ControlButton: FC<ControlButtonProps> = ({
  icon,
  onClick,
  className,
  size = 'normal',
}) => {
  const classList = classNames(styles.root, {
    [styles.normal]: size === 'normal',
    [styles.large]: size === 'large'
  }, className)
  return (
    <Button onClick={onClick} className={classList}>
      <Icon icon={icon} />
    </Button>
  )
}
