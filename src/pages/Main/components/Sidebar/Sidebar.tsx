import { SidebarHeader, SidebarProjects } from './components'
import styles from './styles/Sidebar.module.scss'
import { FC } from 'react'

export const Sidebar: FC = (): JSX.Element => {
  return (
    <div className={styles.sidebarContainer}>
      <SidebarHeader />
      <SidebarProjects />
    </div>
  )
}
