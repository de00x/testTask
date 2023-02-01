import { ReactComponent as TrashRow } from '../../../../img/Rows/trashRow.svg'
import { ReactComponent as EditRow } from '../../../../img/Rows/editRow.svg'
import { IThirdRowProps } from '../../../../types/ThirdRow/ThirdRow.types'
import { ParentRowControllers } from '../ParentRow/services'
import styles from './styles/ThirdRow.module.scss'
import { ThirdRowControllers } from './services'
import cn from 'classnames'
import { FC } from 'react'
import {
  InputSalary,
  InputRowName,
  InputOverheads,
  InputEstProfit,
  InputEquipCosts,
} from '../RowInputs'

export const ThirdRow: FC<IThirdRowProps> = ({
  thirdRow,
  isTrashRow,
  parentRowID,
  secondRowID,
  setIsTrashRow,
  currentErrRow,
  rowEditingData,
  setCurrentErrRow,
  setParentRowData,
  setRowEditingData,
  currentEditingRow,
  setCurrentEditingRow,
}): JSX.Element => {
  /// controllers ///
  const { onDoubleClickRow } = ParentRowControllers({
    rowEditingData,
    setParentRowData,
    setCurrentErrRow,
    setRowEditingData,
    currentEditingRow,
    setCurrentEditingRow,
  })
  const { onKeyEnter, deleteThirdRow } = ThirdRowControllers({
    parentRowID,
    secondRowID,
    rowEditingData,
    setParentRowData,
    setCurrentErrRow,
    setCurrentEditingRow,
  })
  /// controllers ///

  return (
    <div className={styles.thirdRowWrapper}>
      <div
        className={cn(styles.thirdRowContainer, {
          [styles.thirdRowInputError]: currentErrRow === thirdRow.id,
        })}
        onDoubleClick={() => onDoubleClickRow(thirdRow)}
      >
        <div className={styles.verticalLine}></div>
        <div className={styles.horizontalLine}></div>
        <div className={styles.leftBlock}>
          <div
            className={cn(styles.svgChoiceContainer, {
              [styles.svgChoiceContainerActive]: thirdRow.id === isTrashRow,
            })}
            onMouseEnter={() => setIsTrashRow(thirdRow.id)}
            onMouseLeave={() => setIsTrashRow(0)}
          >
            <EditRow />
            {thirdRow.id === isTrashRow && <TrashRow onClick={() => deleteThirdRow(thirdRow.id)} />}
          </div>
          <div className={styles.rowNameContainer} onKeyDown={(e) => onKeyEnter(e, thirdRow.id)}>
            {currentEditingRow === thirdRow.id ? (
              <InputRowName rowEditingData={rowEditingData} setRowEditingData={setRowEditingData} />
            ) : (
              <>{thirdRow.rowName}</>
            )}
          </div>
        </div>
        <div className={styles.rightBlock}>
          <div onKeyDown={(e) => onKeyEnter(e, thirdRow.id)}>
            {currentEditingRow === thirdRow.id ? (
              <InputSalary rowEditingData={rowEditingData} setRowEditingData={setRowEditingData} />
            ) : (
              <>{thirdRow.salary}</>
            )}
          </div>
          <div onKeyDown={(e) => onKeyEnter(e, thirdRow.id)}>
            {currentEditingRow === thirdRow.id ? (
              <InputEquipCosts
                rowEditingData={rowEditingData}
                setRowEditingData={setRowEditingData}
              />
            ) : (
              <>{thirdRow.equipmentCosts}</>
            )}
          </div>
          <div onKeyDown={(e) => onKeyEnter(e, thirdRow.id)}>
            {currentEditingRow === thirdRow.id ? (
              <InputOverheads
                rowEditingData={rowEditingData}
                setRowEditingData={setRowEditingData}
              />
            ) : (
              <>{thirdRow.overheads}</>
            )}
          </div>
          <div onKeyDown={(e) => onKeyEnter(e, thirdRow.id)}>
            {currentEditingRow === thirdRow.id ? (
              <InputEstProfit
                rowEditingData={rowEditingData}
                setRowEditingData={setRowEditingData}
              />
            ) : (
              <>{thirdRow.estimatedProfit}</>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
