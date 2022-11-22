import { ReactComponent as FolderGreen } from '../img/folderGreen.svg'
import { ReactComponent as FolderBlue } from '../img/folderBlue.svg'
import { ReactComponent as DeleteRow } from '../img/deleteRow.svg'
import { MiddleRowsClear, RowSubDirectory } from './components'
import { ReactComponent as EditRow } from '../img/editRow.svg'
import { MiddleRowService } from './MiddleRow.service'
import useKeyDownEnter from './hooks/useKeyDownEnter'
import { IRowState } from './MiddleRow.types'
import { FC, useState } from 'react'
import cn from 'classnames'
import styles from './MiddleComp.module.scss'
import useRowControls from './hooks/rowControls'
export const eID = process.env.REACT_APP_ID as string

export const MiddleRows: FC = (): JSX.Element => {
  const [currentEditInputOpen, setCurrentEditInputOpen] = useState<number | undefined>(0)
  const [currentControllerActive, setCurrentControllerActive] = useState<number | undefined>(0)
  const [isEditedInputCurrentMoment, setIsEditedInputCurrentMoment] = useState<number | undefined>(
    currentEditInputOpen
  )
  const [idNewSubDir, setIdNewSubDir] = useState<number | undefined>(0)
  const [stateAllRow, setStateAllRow] = useState<IRowState[]>([])
  const [inputErrColorRed, setInputErrColorRed] = useState(false)
  const [isLoadingPage, setIsLoadingPage] = useState(true)
  const [rowState, setRowState] = useState<IRowState>({
    estimatedProfit: '',
    equipmentCosts: '',
    overheads: '',
    rowName: '',
    salary: '',
  })

  /// useEffects ///

  MiddleRowService.useCurrentEditInputOpen(
    setCurrentEditInputOpen,
    setRowState,
    rowState,
    idNewSubDir
  )
  MiddleRowService.useIsEditedInputCurrentMoment(
    setIsEditedInputCurrentMoment,
    currentEditInputOpen
  )

  MiddleRowService.GetAllData(setStateAllRow, setIsLoadingPage)
  /// useEffects ///

  /// functions ///
  const inputKeyEnter = useKeyDownEnter({
    rowState,
    setStateAllRow,
    setIsLoadingPage,
    setCurrentEditInputOpen,
  })

  const { deleteCurrentRow, createNewParentRow, createNewSubDirectory, openEditInput } =
    useRowControls({
      eID,
      rowState,
      setRowState,
      setStateAllRow,
      setIdNewSubDir,
      setIsLoadingPage,
      setInputErrColorRed,
      currentEditInputOpen,
      setCurrentEditInputOpen,
      isEditedInputCurrentMoment,
    })
  /// functions ///

  return (
    <div className={styles.middleRowsWrapper}>
      {stateAllRow.length > 0 ? (
        <>
          {stateAllRow.map((parentRow) => (
            <div key={parentRow.id} className={styles.middleRowsContainer}>
              <div
                className={cn(styles.middleRow, {
                  [styles.inputErrColorRed]: inputErrColorRed,
                })}
              >
                <>
                  <div className={styles.middleRowBlockOne}>
                    <div
                      className={cn(styles.parentRowImgControllers, {
                        [styles.parentRowImgControllersActive]:
                          parentRow.id === currentControllerActive,
                      })}
                      onMouseLeave={() => setCurrentControllerActive(0)}
                    >
                      <FolderBlue
                        onClick={createNewParentRow}
                        onMouseOver={() => setCurrentControllerActive(parentRow.id)}
                      />
                      {parentRow.id === currentControllerActive && (
                        <>
                          <FolderGreen onClick={() => createNewSubDirectory(parentRow)} />
                          <EditRow />
                          <DeleteRow onClick={() => deleteCurrentRow(parentRow)} />
                        </>
                      )}
                    </div>
                    <div
                      onDoubleClick={() => openEditInput(parentRow)}
                      className={styles.rowNameTextContainer}
                    >
                      <div className={styles.rowNameText}>
                        {currentEditInputOpen === parentRow.id ? (
                          <input
                            value={rowState.rowName}
                            onChange={(e) =>
                              setRowState({
                                ...rowState,
                                rowName: e.target.value,
                              })
                            }
                            onKeyDown={(e) => inputKeyEnter(e, parentRow)}
                            className={styles.inputRowName}
                          />
                        ) : (
                          <>{parentRow.rowName}</>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className={styles.middleRowBlockTwo}>
                    <div className={styles.rowBlockSalary}>
                      <div className={styles.rowSalaryText}>
                        {currentEditInputOpen === parentRow.id ? (
                          <input
                            value={rowState.salary}
                            onChange={(e) =>
                              setRowState({
                                ...rowState,
                                salary: e.target.value,
                              })
                            }
                            onKeyDown={(e) => inputKeyEnter(e, parentRow)}
                            className={styles.inputSalary}
                            placeholder="0"
                            type="number"
                          />
                        ) : (
                          <>{parentRow.salary}</>
                        )}
                      </div>
                    </div>
                    <div className={styles.rowBlockEquipmentCosts}>
                      <div className={styles.equipmentText}>
                        {currentEditInputOpen === parentRow.id ? (
                          <input
                            value={rowState.equipmentCosts}
                            onChange={(e) =>
                              setRowState({
                                ...rowState,
                                equipmentCosts: e.target.value,
                              })
                            }
                            onKeyDown={(e) => inputKeyEnter(e, parentRow)}
                            className={styles.inputEquipmentCosts}
                            placeholder="0"
                            type="number"
                          />
                        ) : (
                          <>{parentRow.equipmentCosts}</>
                        )}
                      </div>
                    </div>
                    <div className={styles.rowBlockOverheads}>
                      <div className={styles.overheadsText}>
                        {currentEditInputOpen === parentRow.id ? (
                          <input
                            value={rowState.overheads}
                            onChange={(e) =>
                              setRowState({
                                ...rowState,
                                overheads: e.target.value,
                              })
                            }
                            onKeyDown={(e) => inputKeyEnter(e, parentRow)}
                            className={styles.inputOverheads}
                            placeholder="0"
                            type="number"
                          />
                        ) : (
                          <>{parentRow.overheads}</>
                        )}
                      </div>
                    </div>
                    <div className={styles.rowBlockEstimatedProfit}>
                      <div className={styles.profitText}>
                        {currentEditInputOpen === parentRow.id ? (
                          <input
                            value={rowState.estimatedProfit}
                            onChange={(e) =>
                              setRowState({
                                ...rowState,
                                estimatedProfit: e.target.value,
                              })
                            }
                            onKeyDown={(e) => inputKeyEnter(e, parentRow)}
                            className={styles.inputEstimatedProfit}
                            placeholder="0"
                            type="number"
                          />
                        ) : (
                          <>{parentRow.estimatedProfit}</>
                        )}
                      </div>
                    </div>
                  </div>
                </>
              </div>
              <RowSubDirectory
                parentRow={parentRow}
                idNewSubDir={idNewSubDir}
                setStateAllRow={setStateAllRow}
                inputErrColorRed={inputErrColorRed}
                setInputErrColorRed={setInputErrColorRed}
                isEditedInputCurrentMoment={isEditedInputCurrentMoment}
                setIsEditedInputCurrentMoment={setIsEditedInputCurrentMoment}
              />
            </div>
          ))}
        </>
      ) : (
        <MiddleRowsClear setStateAllRow={setStateAllRow} isLoadingPage={isLoadingPage} />
      )}
    </div>
  )
}
