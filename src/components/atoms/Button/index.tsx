import classNames from "classnames";
import { FC, PropsWithChildren } from "react"

import styles from './styles.module.scss'

export type ButtonProps = PropsWithChildren<{
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
  className?: string;
}>

export const Button: FC<ButtonProps> = ({
  children,
  onClick,
  className,
}) => {

  return (
    <button type="button" onClick={onClick} className={classNames(styles.root, className)}>
      {children}
    </button>
  )
}
