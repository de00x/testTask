import { SidebarHeader, SidebarProjects } from './components'
import { FC } from 'react'
import styles from './Sidebar.module.scss'

export const Sidebar: FC = (): JSX.Element => {
  return (
    <div className={styles.sidebarContainer}>
      <SidebarHeader />
      <SidebarProjects />
    </div>
  )
}
