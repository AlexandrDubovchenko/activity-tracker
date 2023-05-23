import { toast } from "react-toastify"
import { FC, PropsWithChildren, useState } from "react"

import { NotificationContext } from "@/context/notificationsContext"

export const NotificationProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(false)

  return <NotificationContext.Provider
    value={{
      isNotificationsEnabled,
      setIsNotificationsEnabled,
      sendNotification: (m: string) => toast(m)
    }}
  >
    {children}
  </NotificationContext.Provider>
}
