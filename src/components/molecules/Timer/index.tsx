import { FC, useEffect, useMemo, useState } from "react";

import styles from './styles.module.scss'
import classNames from "classnames";

type TimerProps = {
  timeLength: number;
  isActive: boolean;
  onTimeOut: () => void
}

export const Timer: FC<TimerProps> = ({
  timeLength,
  isActive,
  onTimeOut,
}) => {
  const [time, setTime] = useState(timeLength)
  const { minutes, seconds } = useMemo(() => {
    const minutes = time / 60
    return {
      minutes: Math.floor(minutes).toLocaleString('en-Us', { minimumIntegerDigits: 2 }),
      seconds: Math.round((minutes % 1) * 60).toLocaleString('en-Us', { minimumIntegerDigits: 2 })
    }
  }, [time])

  useEffect(() => {
    let timer: ReturnType<typeof setInterval>
    if (isActive) {
      timer = setTimeout(() => {
        if (time > 0) {
          setTime(prev => prev - 1)
        } else {
          onTimeOut()
        }
      }, 1000)
    }
    return () => clearTimeout(timer)
  }, [isActive, time, onTimeOut])


  return (
    <div>
      <p className={classNames(styles.time, {
        [styles.active]: isActive,
      })}>
        <span>
          {minutes}
        </span>
        <span>
          {seconds}
        </span>
      </p>
    </div>
  )
}
