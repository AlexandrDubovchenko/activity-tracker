import { FC } from 'react'
import classNames from 'classnames'

import styles from './styles.module.scss'

type SwitchProps = {
  onChange: (v: boolean) => void;
  value: boolean;
}

export const Switch: FC<SwitchProps> = ({ onChange, value }) => {
  const id = Math.random()
  return (
    <label htmlFor={id.toString()} className={classNames(styles.root, { [styles.active]: value })}>
      <div className={styles.indicator} />
      <input id={id.toString()} onChange={e => onChange(e.target.checked)} checked={value} type="checkbox" hidden />
    </label>
  )
}
