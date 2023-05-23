import { FC } from 'react';
import { ControlButton } from '@/components/molecules/ControlButton'
import styles from './styles.module.scss'

type ControlPanelProps = {
  isTimerActive: boolean;
  setIsTimerActive: (v: boolean) => void;
  openSettings: () => void;
  changeActivity: () => void
}

export const ControlPanel: FC<ControlPanelProps> = ({
  isTimerActive,
  setIsTimerActive,
  openSettings,
  changeActivity,
}) => {
  const toggleTimer = () => setIsTimerActive(!isTimerActive)
  return (
    <div className={styles.root}>
      <ControlButton className={styles.control} icon='settings' onClick={openSettings} />
      <ControlButton className={styles.play} icon={isTimerActive ? 'pause' : 'play'} size='large' onClick={toggleTimer} />
      <ControlButton className={styles.control} icon='rewind' onClick={changeActivity} />
    </div>
  )
}
