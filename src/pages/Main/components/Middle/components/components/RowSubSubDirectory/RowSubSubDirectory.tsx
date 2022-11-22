import { IChildren, IRowState, ISubChildren } from '../../MiddleRow.types'
import { ReactComponent as DeleteRow } from '../../../img/deleteRow.svg'
import { ReactComponent as EditRow } from '../../../img/editRow.svg'
import React, { FC, useState } from 'react'
import cn from 'classnames'
import styles from '../MidSubComp.module.scss'
import useKeyDownEnter from './hooks/useKeyDownEnter'
import RowSubSubDirService from './RowSubSubDir.service'
import useRowSubSubControls from './hooks/rowSubSubControls'

interface IRowSubSubProps {
  firstChildren: IChildren
  inputErrColorRed: boolean
  idNewSubSubDir: number | undefined
  isEditedInputCurrentMoment: number | undefined
  setStateAllRow: React.Dispatch<React.SetStateAction<IRowState[]>>
  setInputErrColorRed: React.Dispatch<React.SetStateAction<boolean>>
  setIsEditedInputCurrentMoment: React.Dispatch<React.SetStateAction<number | undefined>>
}

export const RowSubSubDirectory: FC<IRowSubSubProps> = ({
  firstChildren,
  setStateAllRow,
  idNewSubSubDir,
  inputErrColorRed,
  setInputErrColorRed,
  isEditedInputCurrentMoment,
  setIsEditedInputCurrentMoment,
}): JSX.Element => {
  const [currentControllerActive, setCurrentControllerActive] = useState<number | undefined>(0)
  const [currentEditInputOpen, setCurrentEditInputOpen] = useState<number | undefined>(0)
  const [rowSubSubState, setRowSubSubState] = useState<ISubChildren>({
    estimatedProfit: '',
    equipmentCosts: '',
    overheads: '',
    rowName: '',
    salary: '',
  })

  /// useEffects ///
  RowSubSubDirService.useCurrentEditInputOpen(
    setCurrentEditInputOpen,
    setRowSubSubState,
    idNewSubSubDir,
    rowSubSubState
  )

  RowSubSubDirService.useIsEditedInputCurrentMoment(
    setIsEditedInputCurrentMoment,
    currentEditInputOpen
  )
  /// useEffects ///

  /// functions ///
  const { openEditInput, deleteCurrentRow } = useRowSubSubControls({
    isEditedInputCurrentMoment,
    setCurrentEditInputOpen,
    setRowSubSubState,
    rowSubSubState,
    setInputErrColorRed,
    setStateAllRow,
  })

  const inputKeyEnter = useKeyDownEnter({
    rowSubSubState,
    setCurrentEditInputOpen,
    setStateAllRow,
  })
  /// functions ///

  return (
    <div className={styles.rowSubDirectoryWrapper}>
      {firstChildren.child?.map((secondChildren) => (
        <div key={secondChildren.id} className={styles.rowSubDirectoryContainer}>
          <div
            className={cn(styles.middleRowSubDirectory, {
              [styles.inputErrColorRed]: inputErrColorRed,
            })}
          >
            <div className={styles.verticalLineSubSubDir}></div>
            <div className={styles.horizontalLineSubSubDir}></div>
            <div className={styles.subDirectoryBlockOne}>
              <div
                className={cn(styles.subSubRowImgControllers, {
                  [styles.subSubRowImgControllersActive]:
                    secondChildren.id === currentControllerActive,
                })}
                onMouseLeave={() => setCurrentControllerActive(0)}
              >
                <>
                  <EditRow onMouseOver={() => setCurrentControllerActive(secondChildren.id)} />
                  {secondChildren.id === currentControllerActive && (
                    <DeleteRow onClick={() => deleteCurrentRow(secondChildren)} />
                  )}
                </>
              </div>
              <div
                onDoubleClick={() => openEditInput(secondChildren)}
                className={styles.rowNameTextContainer}
              >
                <div className={styles.rowNameText}>
                  {currentEditInputOpen === secondChildren.id ? (
                    <input
                      value={rowSubSubState.rowName}
                      onChange={(e) =>
                        setRowSubSubState({
                          ...rowSubSubState,
                          rowName: e.target.value,
                        })
                      }
                      onKeyDown={(e) => inputKeyEnter(e, secondChildren)}
                      className={styles.inputRowName}
                    />
                  ) : (
                    <>{secondChildren.rowName}</>
                  )}
                </div>
              </div>
            </div>
            <div className={styles.subDirectoryBlockTwo}>
              <div className={styles.rowBlockSalary}>
                <div className={styles.rowSalaryText}>
                  {currentEditInputOpen === secondChildren.id ? (
                    <input
                      type="number"
                      value={rowSubSubState.salary}
                      onChange={(e) =>
                        setRowSubSubState({
                          ...rowSubSubState,
                          salary: e.target.value,
                        })
                      }
                      onKeyDown={(e) => inputKeyEnter(e, secondChildren)}
                      className={styles.inputSalary}
                      placeholder="0"
                    />
                  ) : (
                    <>{secondChildren.salary}</>
                  )}
                </div>
              </div>
              <div className={styles.rowBlockEquipmentCosts}>
                <div className={styles.equipmentText}>
                  {currentEditInputOpen === secondChildren.id ? (
                    <input
                      type="number"
                      value={rowSubSubState.equipmentCosts}
                      onChange={(e) =>
                        setRowSubSubState({
                          ...rowSubSubState,
                          equipmentCosts: e.target.value,
                        })
                      }
                      onKeyDown={(e) => inputKeyEnter(e, secondChildren)}
                      className={styles.inputEquipmentCosts}
                      placeholder="0"
                    />
                  ) : (
                    <>{secondChildren.equipmentCosts}</>
                  )}
                </div>
              </div>
              <div className={styles.rowBlockOverheads}>
                <div className={styles.overheadsText}>
                  {currentEditInputOpen === secondChildren.id ? (
                    <input
                      type="number"
                      value={rowSubSubState.overheads}
                      onChange={(e) =>
                        setRowSubSubState({
                          ...rowSubSubState,
                          overheads: e.target.value,
                        })
                      }
                      onKeyDown={(e) => inputKeyEnter(e, secondChildren)}
                      className={styles.inputOverheads}
                      placeholder="0"
                    />
                  ) : (
                    <>{secondChildren.overheads}</>
                  )}
                </div>
              </div>
              <div className={styles.rowBlockEstimatedProfit}>
                <div className={styles.profitText}>
                  {currentEditInputOpen === secondChildren.id ? (
                    <input
                      type="number"
                      value={rowSubSubState.estimatedProfit}
                      onChange={(e) =>
                        setRowSubSubState({
                          ...rowSubSubState,
                          estimatedProfit: e.target.value,
                        })
                      }
                      onKeyDown={(e) => inputKeyEnter(e, secondChildren)}
                      className={styles.inputEstimatedProfit}
                      placeholder="0"
                    />
                  ) : (
                    <>{secondChildren.estimatedProfit}</>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
