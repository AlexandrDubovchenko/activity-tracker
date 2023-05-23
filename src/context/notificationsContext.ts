import { createContext, useContext } from "react";

export type NotificationVariants = 'dark' | 'light'

type NotificationContextState = {
  isNotificationsEnabled: boolean,
  setIsNotificationsEnabled: (v: boolean) => void
  sendNotification: (message: string) => void
}

export const NotificationContext = createContext<NotificationContextState>({
  isNotificationsEnabled: false,
  setIsNotificationsEnabled: () => undefined,
  sendNotification: () => undefined,
})

export const useNotificationContext = () => {
  return useContext(NotificationContext)
}
