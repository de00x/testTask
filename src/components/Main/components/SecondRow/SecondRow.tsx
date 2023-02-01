import { ReactComponent as TrashRow } from '../../../../img/Rows/trashRow.svg'
import { ISecondRowProps } from '../../../../types/SecondRow/SecondRow.types'
import { ReactComponent as EditRow } from '../../../../img/Rows/editRow.svg'
import { ParentRowControllers } from '../ParentRow/services'
import styles from './styles/SecondRow.module.scss'
import { SecondRowControllers } from './services'
import { ThirdRow } from '../'
import cn from 'classnames'
import { FC } from 'react'
import {
  InputSalary,
  InputRowName,
  InputOverheads,
  InputEstProfit,
  InputEquipCosts,
} from '../RowInputs'

export const SecondRow: FC<ISecondRowProps> = ({
  secondRow,
  isTrashRow,
  parentRowID,
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
  const { onDoubleClickRow, createThirdRow } = ParentRowControllers({
    parentRowID,
    rowEditingData,
    setParentRowData,
    setCurrentErrRow,
    setRowEditingData,
    currentEditingRow,
    setCurrentEditingRow,
  })
  const { onKeyEnter, deleteSecondRow } = SecondRowControllers({
    parentRowID,
    rowEditingData,
    setParentRowData,
    setCurrentErrRow,
    currentEditingRow,
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
        <div className={styles.verticalLine}></div>
        <div className={styles.horizontalLine}></div>
        <div className={styles.leftBlock}>
          <div
            className={cn(styles.svgChoiceContainer, {
              [styles.svgChoiceContainerActive]: secondRow.id === isTrashRow,
            })}
            onMouseEnter={() => setIsTrashRow(secondRow.id)}
            onMouseLeave={() => setIsTrashRow(0)}
          >
            <EditRow onClick={() => createThirdRow(secondRow.id)} />
            {secondRow.id === isTrashRow && (
              <TrashRow onClick={() => deleteSecondRow(secondRow.id)} />
            )}
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
      {secondRow?.child?.map((thirdRow) => (
        <ThirdRow
          key={thirdRow.id}
          thirdRow={thirdRow}
          isTrashRow={isTrashRow}
          parentRowID={parentRowID}
          secondRowID={secondRow.id}
          setIsTrashRow={setIsTrashRow}
          currentErrRow={currentErrRow}
          rowEditingData={rowEditingData}
          setCurrentErrRow={setCurrentErrRow}
          setParentRowData={setParentRowData}
          setRowEditingData={setRowEditingData}
          currentEditingRow={currentEditingRow}
          setCurrentEditingRow={setCurrentEditingRow}
        />
      ))}
    </div>
  )
}
