import { IParentRowData, IRowEditingData } from '../../../../types/ParentRow/ParentRow.types'
import { ParentRowControllers, ParentRowService, UpdateParentRow } from './services'
import { ReactComponent as TrashRow } from '../../../../img/Rows/trashRow.svg'
import { ReactComponent as EditRow } from '../../../../img/Rows/editRow.svg'
import styles from './styles/ParentRow.module.scss'
import { CreateParentRow, SecondRow } from '../'
import { FC, useState } from 'react'
import cn from 'classnames'
import {
  InputSalary,
  InputRowName,
  InputOverheads,
  InputEstProfit,
  InputEquipCosts,
} from '../RowInputs'

export const reqDefaultData = {
  equipmentCosts: 0,
  estimatedProfit: 0,
  machineOperatorSalary: 0,
  mainCosts: 0,
  materials: 0,
  mimExploitation: 0,
  overheads: 0,
  parentId: null,
  rowName: '',
  salary: 0,
  supportCosts: 0,
}
export const eID = process.env.REACT_APP_ID as string

export const ParentRow: FC = (): JSX.Element => {
  const [isTrashRow, setIsTrashRow] = useState(0)
  const [currentErrRow, setCurrentErrRow] = useState(0)
  const [currentEditingRow, setCurrentEditingRow] = useState(0)
  const [parentRowData, setParentRowData] = useState<IParentRowData[]>([])
  const [rowEditingData, setRowEditingData] = useState<IRowEditingData>({
    rowName: '',
    salary: '0',
    overheads: '0',
    equipmentCosts: '0',
    estimatedProfit: '0',
  })

  /// useEffects ///
  ParentRowService.GetAllRows(setParentRowData)
  /// useEffects ///

  /// controllers ///
  const { deleteRow, onDoubleClickRow, createSecondRow } = ParentRowControllers({
    rowEditingData,
    setCurrentErrRow,
    setParentRowData,
    setRowEditingData,
    currentEditingRow,
    setCurrentEditingRow,
  })
  const { onKeyEnter } = UpdateParentRow({
    rowEditingData,
    setCurrentErrRow,
    setParentRowData,
    setCurrentEditingRow,
  })
  /// controllers ///

  return (
    <>
      {parentRowData.length !== 0 ? (
        <>
          {parentRowData.map((parentRow) => (
            <div className={styles.parentRowWrapper} key={parentRow.id}>
              <div
                className={cn(styles.parentRowContainer, {
                  [styles.parentRowInputError]: currentErrRow === parentRow.id,
                })}
                onDoubleClick={() => onDoubleClickRow(parentRow)}
              >
                <div className={styles.leftBlock}>
                  <div
                    className={cn(styles.svgChoiceContainer, {
                      [styles.svgChoiceContainerActive]: parentRow.id === isTrashRow,
                    })}
                    onMouseEnter={() => setIsTrashRow(parentRow.id)}
                    onMouseLeave={() => setIsTrashRow(0)}
                  >
                    <EditRow onClick={() => createSecondRow(parentRow.id)} />
                    {parentRow.id === isTrashRow && (
                      <TrashRow onClick={() => deleteRow(parentRow.id)} />
                    )}
                  </div>
                  <div
                    className={styles.rowNameContainer}
                    onKeyDown={(e) => onKeyEnter(e, parentRow.id)}
                  >
                    {currentEditingRow === parentRow.id ? (
                      <InputRowName
                        rowEditingData={rowEditingData}
                        setRowEditingData={setRowEditingData}
                      />
                    ) : (
                      <>{parentRow.rowName}</>
                    )}
                  </div>
                </div>
                <div className={styles.rightBlock}>
                  <div onKeyDown={(e) => onKeyEnter(e, parentRow.id)}>
                    {currentEditingRow === parentRow.id ? (
                      <InputSalary
                        rowEditingData={rowEditingData}
                        setRowEditingData={setRowEditingData}
                      />
                    ) : (
                      <>{parentRow.salary}</>
                    )}
                  </div>
                  <div onKeyDown={(e) => onKeyEnter(e, parentRow.id)}>
                    {currentEditingRow === parentRow.id ? (
                      <InputEquipCosts
                        rowEditingData={rowEditingData}
                        setRowEditingData={setRowEditingData}
                      />
                    ) : (
                      <>{parentRow.equipmentCosts}</>
                    )}
                  </div>
                  <div onKeyDown={(e) => onKeyEnter(e, parentRow.id)}>
                    {currentEditingRow === parentRow.id ? (
                      <InputOverheads
                        rowEditingData={rowEditingData}
                        setRowEditingData={setRowEditingData}
                      />
                    ) : (
                      <>{parentRow.overheads}</>
                    )}
                  </div>
                  <div onKeyDown={(e) => onKeyEnter(e, parentRow.id)}>
                    {currentEditingRow === parentRow.id ? (
                      <InputEstProfit
                        rowEditingData={rowEditingData}
                        setRowEditingData={setRowEditingData}
                      />
                    ) : (
                      <>{parentRow.estimatedProfit}</>
                    )}
                  </div>
                </div>
              </div>
              {parentRow?.child?.map((secondRow) => (
                <SecondRow
                  key={secondRow.id}
                  secondRow={secondRow}
                  isTrashRow={isTrashRow}
                  parentRowID={parentRow.id}
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
          ))}
        </>
      ) : (
        <CreateParentRow parentRowData={parentRowData} setParentRowData={setParentRowData} />
      )}
    </>
  )
}
