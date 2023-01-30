import { ReactComponent as TrashRow } from './img/trashRow.svg'
import { ReactComponent as EditRow } from './img/editRow.svg'
import { ISecondRowProps } from './types/SecondRow.types'
import styles from './styles/SecondRow.module.scss'
import { FC, useState } from 'react'
import cn from 'classnames'
import {
  InputSalary,
  InputRowName,
  InputOverheads,
  InputEstProfit,
  InputEquipCosts,
} from '../RowInputs'
import { ParentRowControllers } from '../ParentRow/services'
import { UpdateSecondRow } from './services'

export const SecondRow: FC<ISecondRowProps> = ({
  secondRow,
  parentRowID,
  parentRowData,
  setParentRowData,
}): JSX.Element => {
  const [currentEditingRow, setCurrentEditingRow] = useState(0)
  const [currentErrRow, setCurrentErrRow] = useState(0)
  const [isTrashRow, setIsTrashRow] = useState(0)
  const [rowEditingData, setRowEditingData] = useState({
    rowName: '',
    salary: '0',
    overheads: '0',
    equipmentCosts: '0',
    estimatedProfit: '0',
  })

  /// controllers ///
  const { deleteRow, onDoubleClickRow } = ParentRowControllers({
    rowEditingData,
    setParentRowData,
    setRowEditingData,
    setCurrentEditingRow,
  })
  const { onKeyEnter } = UpdateSecondRow({
    parentRowID,
    parentRowData,
    rowEditingData,
    setParentRowData,
    setCurrentErrRow,
    setCurrentEditingRow,
  })
  /// controllers ///

  return (
    <div className={styles.secondRowWrapper}>
      <div
        className={cn(styles.secondRowContainer, {
          [styles.secondRowInputError]: currentErrRow === secondRow.id,
        })}
        onDoubleClick={() => onDoubleClickRow(secondRow)}
      >
        <div className={styles.leftBlock}>
          <div
            className={cn(styles.svgChoiceContainer, {
              [styles.svgChoiceContainerActive]: secondRow.id === isTrashRow,
            })}
            onMouseEnter={() => setIsTrashRow(secondRow.id)}
            onMouseLeave={() => setIsTrashRow(0)}
          >
            <EditRow />
            {secondRow.id === isTrashRow && <TrashRow onClick={() => deleteRow(secondRow.id)} />}
          </div>
          <div className={styles.rowNameContainer} onKeyDown={(e) => onKeyEnter(e, secondRow.id)}>
            {currentEditingRow === secondRow.id ? (
              <InputRowName rowEditingData={rowEditingData} setRowEditingData={setRowEditingData} />
            ) : (
              <>{secondRow.rowName}</>
            )}
          </div>
        </div>
        <div className={styles.rightBlock}>
          <div onKeyDown={(e) => onKeyEnter(e, secondRow.id)}>
            {currentEditingRow === secondRow.id ? (
              <InputSalary rowEditingData={rowEditingData} setRowEditingData={setRowEditingData} />
            ) : (
              <>{secondRow.salary}</>
            )}
          </div>
          <div onKeyDown={(e) => onKeyEnter(e, secondRow.id)}>
            {currentEditingRow === secondRow.id ? (
              <InputEquipCosts
                rowEditingData={rowEditingData}
                setRowEditingData={setRowEditingData}
              />
            ) : (
              <>{secondRow.equipmentCosts}</>
            )}
          </div>
          <div onKeyDown={(e) => onKeyEnter(e, secondRow.id)}>
            {currentEditingRow === secondRow.id ? (
              <InputOverheads
                rowEditingData={rowEditingData}
                setRowEditingData={setRowEditingData}
              />
            ) : (
              <>{secondRow.overheads}</>
            )}
          </div>
          <div onKeyDown={(e) => onKeyEnter(e, secondRow.id)}>
            {currentEditingRow === secondRow.id ? (
              <InputEstProfit
                rowEditingData={rowEditingData}
                setRowEditingData={setRowEditingData}
              />
            ) : (
              <>{secondRow.estimatedProfit}</>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
