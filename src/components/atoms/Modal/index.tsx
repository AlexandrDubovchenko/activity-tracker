import { FC, PropsWithChildren } from 'react'
import { Button } from '../Button'
import { Icon } from '../Icon'
import styles from './styles.module.scss'

type ModalProps = PropsWithChildren<{
  handleClose: () => void;
  title: string;
}>

export const Modal: FC<ModalProps> = ({ children, title, handleClose }) => {
  return (
    <>
      <div className={styles.overlay} onClick={handleClose} />
      <div className={styles.root}>
        <div className={styles.wrapper}>
          <header className={styles.header}>
            <p>{title}</p>
            <Button onClick={handleClose}>
              <Icon icon='close' size='small' />
            </Button>
          </header>
          <div>
            {children}
          </div>
        </div>
      </div>
    </>
  )
}
