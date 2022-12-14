import { ReactComponent as ProjectLogo } from '../img/projectLogo.svg'
import { FC } from 'react'
import styles from '../Sidebar.module.scss'

export const SidebarProjects: FC = (): JSX.Element => {
  const arrayProjects = [
    'По проекту',
    'Объекты',
    'РД',
    'МТО',
    'СМР',
    'График',
    'МиМ',
    'Рабочие',
    'Капвложения',
    'Бюджет',
    'Финансирование',
    'Панорамы',
    'Камеры',
    'Поручения',
    'Контрагенты',
  ]

  return (
    <div className={styles.sidebarProjectsContainer}>
      <ul>
        {arrayProjects.map((projects, i) => (
          <li key={i} className={styles.projectsItem}>
            <ProjectLogo />
            {projects}
          </li>
        ))}
      </ul>
    </div>
  )
}
