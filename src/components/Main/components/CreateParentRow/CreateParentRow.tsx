import { ICreateParentRowProps } from '../../../../types/CreateParentRow/CreateParentRow.types'
import { IRowEditingData } from '../../../../types/ParentRow/ParentRow.types'
import { ReactComponent as EditRow } from '../../../../img/Rows/editRow.svg'
import styles from './styles/CreateParentRow.module.scss'
import { CreateParRowControllers } from './services'
import { FC, useState } from 'react'
import cn from 'classnames'
import {
  InputSalary,
  InputRowName,
  InputEstProfit,
  InputOverheads,
  InputEquipCosts,
} from '../RowInputs'

export const CreateParentRow: FC<ICreateParentRowProps> = ({
  parentRowData,
  setParentRowData,
}): JSX.Element => {
  const [errCreatedParentRow, setErrCreatedParentRow] = useState(false)
  const [rowEditingData, setRowEditingData] = useState<IRowEditingData>({
    rowName: '',
    salary: '0',
    overheads: '0',
    equipmentCosts: '0',
    estimatedProfit: '0',
  })

  /// controllers ///
  const { onKeyEnter } = CreateParRowControllers({
    parentRowData,
    rowEditingData,
    setParentRowData,
    setErrCreatedParentRow,
  })
  /// controllers ///

  return (
    <div className={styles.parentRowWrapper} onKeyDown={onKeyEnter}>
      <div
        className={cn(styles.parentRowContainer, {
          [styles.parentRowInputError]: errCreatedParentRow,
        })}
      >
        <div className={styles.leftBlock}>
          <div className={styles.svgChoiceContainer}>
            <EditRow />
          </div>
          <div className={styles.rowNameContainer}>
            <InputRowName rowEditingData={rowEditingData} setRowEditingData={setRowEditingData} />
          </div>
        </div>
        <div className={styles.rightBlock}>
          <div>
            <InputSalary rowEditingData={rowEditingData} setRowEditingData={setRowEditingData} />
          </div>
          <div>
            <InputEquipCosts
              rowEditingData={rowEditingData}
              setRowEditingData={setRowEditingData}
            />
          </div>
          <div>
            <InputOverheads rowEditingData={rowEditingData} setRowEditingData={setRowEditingData} />
          </div>
          <div>
            <InputEstProfit rowEditingData={rowEditingData} setRowEditingData={setRowEditingData} />
          </div>
        </div>
      </div>
    </div>
  )
}
