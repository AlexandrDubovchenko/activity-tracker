import { FC, useState } from "react"
import { Modal } from "@/components/atoms/Modal"

import styles from './styles.module.scss'
import { Switch } from "@/components/atoms/Switch"
import { TimerConfig } from "@/models/config"
import { useThemeContext } from "@/context/themeContext"
import { ActivityNames } from "@/models/activity"
import { useNotificationContext } from "@/context/notificationsContext"

type SettingsProps = {
  handleClose: (config: TimerConfig) => void;
  timerConfig: TimerConfig;
}

export const Settings: FC<SettingsProps> = ({ handleClose, timerConfig }) => {
  const [newTimerConfig, setNewTimerConfig] = useState<TimerConfig>(timerConfig)
  const { theme, setTheme } = useThemeContext()
  const { isNotificationsEnabled, setIsNotificationsEnabled } = useNotificationContext()
  const handleDarkMode = (v: boolean) => {
    setTheme(v ? 'dark' : 'light')
  }
  const handleTimerConfig = (key: keyof TimerConfig) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTimerConfig({ ...newTimerConfig, [key]: +e.target.value })
  }

  return (
    <Modal handleClose={() => handleClose(newTimerConfig)} title="Settings">
      <div className={styles.item}>
        <p>Dark mode</p>
        <Switch value={theme === 'dark'} onChange={handleDarkMode} />
      </div>
      <div className={styles.item}>
        <p>Focus length</p>
        <input value={newTimerConfig[ActivityNames.Focus]} onChange={handleTimerConfig(ActivityNames.Focus)} className={styles.input} type="number" />
      </div>
      <div className={styles.item}>
        <p>Short break length</p>
        <input value={newTimerConfig[ActivityNames.Short_Break]} onChange={handleTimerConfig(ActivityNames.Short_Break)} className={styles.input} type="number" />
      </div>
      <div className={styles.item}>
        <p>Long break length</p>
        <input value={newTimerConfig[ActivityNames.Long_Break]} onChange={handleTimerConfig(ActivityNames.Long_Break)} className={styles.input} type="number" />
      </div>
      <div className={styles.item}>
        <p>Notifications</p>
        <Switch value={isNotificationsEnabled} onChange={setIsNotificationsEnabled} />
      </div>
    </Modal>
  )
}
