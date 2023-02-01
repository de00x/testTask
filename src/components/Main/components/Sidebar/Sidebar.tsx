import { ReactComponent as SidebarSquare } from '../../../../img/Sidebar/sidebarSquare.svg'
import { ReactComponent as ArrowBot } from '../../../../img/Sidebar/arrowBot.svg'
import styles from './styles/Sidebar.module.scss'
import { FC } from 'react'

const sidebarItems = [
  'По проекту',
  'Объекты',
  'РД',
  'МТО',
  'СМР',
  'График',
  'Мим',
  'Рабочие',
  'Капвложения',
  'Бюджет',
  'Финансирование',
  'Панорамы',
  'Камеры',
  'Поручения',
  'Контрагенты',
]

export const Sidebar: FC = (): JSX.Element => {
  return (
    <div className={styles.sidebarContainer}>
      <div className={styles.headerContainer}>
        <div>
          <div className={styles.titleProject}>Название проекта</div>
          <div className={styles.abbreviationText}>Аббревиатура</div>
        </div>
        <ArrowBot />
      </div>
      <div className={styles.mainContainer}>
        <ul>
          {sidebarItems.map((sidebarItem) => (
            <li key={sidebarItem}>
              <SidebarSquare /> {sidebarItem}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
