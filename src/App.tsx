
import { useCallback, useEffect, useState } from 'react'
import { useThemeContext } from './context/themeContext'
import { Chip } from './components/molecules/Chip'
import { Timer } from './components/molecules/Timer'
import { Settings } from './components/organisms/Settings'
import { ControlPanel } from './components/organisms/ControlPanel'
import { TimerConfig, defaultTimerConfig } from './models/config'
import { Activity, FocusActivity } from './models/activity'
import { useNotificationContext } from './context/notificationsContext'

import styles from './App.module.scss'

function App() {
  const { theme } = useThemeContext()
  const { isNotificationsEnabled, sendNotification } = useNotificationContext()
  const [isSettingsOpen, setIsSettingsOpen] = useState(false)
  const [timerConfig, setTimerConfig] = useState<TimerConfig>(defaultTimerConfig)
  const [isTimerActive, setIsTimerActive] = useState(false)
  const [currentActivity, setCurrentActivity] = useState<Activity>(new FocusActivity())

  const timeLength = timerConfig[currentActivity.id]

  const onSettingsClose = (newTimerConfig: TimerConfig) => {
    setIsSettingsOpen(false)
    setTimerConfig(newTimerConfig)
  }

  const changeActivity = useCallback(() => {
    setCurrentActivity(prev => prev.getNextActivity())
    setIsTimerActive(false)
  }, [])

  const onTimeOut = useCallback(() => {
    changeActivity()
    if (isNotificationsEnabled) {
      sendNotification(currentActivity.getNextActivity().notification)
    }
  }, [changeActivity, currentActivity, isNotificationsEnabled, sendNotification])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  return (
    <main>
      <div data-state={currentActivity.id} className={styles.root}>
        <Chip icon={currentActivity.icon} text={currentActivity.title} />
        <Timer onTimeOut={onTimeOut} key={currentActivity.id + timeLength} isActive={isTimerActive} timeLength={timeLength} />
        <ControlPanel
          changeActivity={changeActivity}
          isTimerActive={isTimerActive}
          openSettings={() => setIsSettingsOpen(true)}
          setIsTimerActive={setIsTimerActive}
        />
        {isSettingsOpen && <Settings timerConfig={timerConfig} handleClose={onSettingsClose} />}
      </div>
    </main>
  )
}

export default App;
