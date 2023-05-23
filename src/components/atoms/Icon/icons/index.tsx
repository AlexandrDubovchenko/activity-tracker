import Close from '@assets/icons/close.svg'
import Play from '@assets/icons/play.svg'
import Settings from '@assets/icons/settings.svg'
import Rewind from '@assets/icons/rewind.svg'
import Brain from '@assets/icons/brain.svg'
import Cup from '@assets/icons/cup.svg'
import Pause from '@assets/icons/pause.svg'

export const icons = {
  close: <Close />,
  play: <Play />,
  settings: <Settings />,
  rewind: <Rewind />,
  brain: <Brain />,
  cup: <Cup />,
  pause: <Pause />,
} as const

export type IconsType = keyof typeof icons
