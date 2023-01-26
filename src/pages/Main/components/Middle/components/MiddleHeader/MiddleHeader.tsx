import styles from './styles/MiddleHeader.module.scss'
import { FC } from 'react'

export const MiddleHeader: FC = (): JSX.Element => {
  return (
    <>
      <div className={styles.middleHeaderContainer}>
        <div>Строительно-монтажные работы</div>
      </div>
      <div className={styles.middleMainContainer}>
        <div className={styles.middleMainHeader}>
          <div className={styles.middleMainHeaderBlockOne}>
            <div>Уровень</div>
            <div>Наименование работ</div>
          </div>
          <div className={styles.middleMainHeaderBlockTwo}>
            <div>Основная з/п</div>
            <div>Оборудование</div>
            <div>Накладные расходы</div>
            <div>Сметная прибыль</div>
          </div>
        </div>
      </div>
    </>
  )
}
