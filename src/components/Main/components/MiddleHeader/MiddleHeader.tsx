import styles from './styles/MiddleHeader.module.scss'
import { FC } from 'react'

export const MiddleHeader: FC = (): JSX.Element => {
  return (
    <div className={styles.middleHeaderWrapper}>
      <div className={styles.projectTitleContainer}>
        <div className={styles.projectTitle}>Строительно-монтажные работы</div>
      </div>
      <div className={styles.rowTitleWrapper}>
        <div className={styles.rowTitleContainer}>
          <div className={styles.leftBlock}>
            <div>Уровень</div>
            <div>Наименование работ</div>
          </div>
          <div className={styles.rightBlock}>
            <div>Основная з/п</div>
            <div>Оборудование</div>
            <div>Накладные расходы</div>
            <div>Сметная прибыль</div>
          </div>
        </div>
      </div>
    </div>
  )
}
