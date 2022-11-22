import { RowSubSubDirectory } from '../RowSubSubDirectory/RowSubSubDirectory'
import { ReactComponent as FolderGreen } from '../../../img/folderGreen.svg'
import { ReactComponent as DeleteRow } from '../../../img/deleteRow.svg'
import { ReactComponent as EditRow } from '../../../img/editRow.svg'
import { IChildren, IRowState } from '../../MiddleRow.types'
import RowSubDirService from './RowSubDir.service'
import useRowSubControls from './hooks/rowSubControls'
import useKeyDownEnter from './hooks/useKeyDownEnter'
import React, { FC, useState } from 'react'
import cn from 'classnames'
import styles from '../MidSubComp.module.scss'

interface IRowSubProps {
  setInputErrColorRed: React.Dispatch<React.SetStateAction<boolean>>
  setStateAllRow: React.Dispatch<React.SetStateAction<IRowState[]>>
  isEditedInputCurrentMoment: number | undefined
  idNewSubDir: number | undefined
  inputErrColorRed: boolean
  parentRow: IRowState
  setIsEditedInputCurrentMoment: React.Dispatch<React.SetStateAction<number | undefined>>
}

export const RowSubDirectory: FC<IRowSubProps> = ({
  parentRow,
  idNewSubDir,
  setStateAllRow,
  inputErrColorRed,
  setInputErrColorRed,
  isEditedInputCurrentMoment,
  setIsEditedInputCurrentMoment,
}): JSX.Element => {
  const [idNewSubSubDir, setIdNewSubSubDir] = useState<number | undefined>(0)
  const [currentControllerActive, setCurrentControllerActive] = useState<number | undefined>(0)
  const [currentEditInputOpen, setCurrentEditInputOpen] = useState<number | undefined>(0)
  const [rowSubState, setRowSubState] = useState<IChildren>({
    estimatedProfit: '',
    equipmentCosts: '',
    overheads: '',
    rowName: '',
    salary: '',
  })

  /// useEffects ///
  RowSubDirService.useCurrentEditInputOpen(
    setCurrentEditInputOpen,
    setRowSubState,
    idNewSubDir,
    rowSubState
  )

  RowSubDirService.useIsEditedInputCurrentMoment(
    setIsEditedInputCurrentMoment,
    currentEditInputOpen
  )
  /// useEffects ///

  /// functions ///
  const inputKeyEnter = useKeyDownEnter({
    setCurrentEditInputOpen,
    setStateAllRow,
    rowSubState,
  })

  const { createNewSubSubDirectory, deleteCurrentRow, openEditInput } = useRowSubControls({
    isEditedInputCurrentMoment,
    setCurrentEditInputOpen,
    setInputErrColorRed,
    setIdNewSubSubDir,
    setStateAllRow,
    setRowSubState,
    rowSubState,
  })
  /// functions ///

  return (
    <div className={styles.rowSubDirectoryWrapper}>
      {parentRow.child?.map((firstChildren) => (
        <div key={firstChildren.id} className={styles.rowSubDirectoryContainer}>
          <div
            className={cn(styles.middleRowSubDirectory, {
              [styles.inputErrColorRed]: inputErrColorRed,
            })}
          >
            <div className={styles.verticalLineSubDir}></div>
            <div className={styles.horizontalLineSubDir}></div>
            <div className={styles.subDirectoryBlockOne}>
              <div
                className={cn(styles.subRowImgControllers, {
                  [styles.subRowImgControllersActive]: firstChildren.id === currentControllerActive,
                })}
                onMouseLeave={() => setCurrentControllerActive(0)}
              >
                <FolderGreen onMouseOver={() => setCurrentControllerActive(firstChildren.id)} />
                {firstChildren.id === currentControllerActive && (
                  <>
                    <EditRow onClick={() => createNewSubSubDirectory(firstChildren)} />
                    <DeleteRow onClick={() => deleteCurrentRow(firstChildren)} />
                  </>
                )}
              </div>
              <div
                onDoubleClick={() => openEditInput(firstChildren)}
                className={styles.rowNameTextContainer}
              >
                <div className={styles.rowNameText}>
                  {currentEditInputOpen === firstChildren.id ? (
                    <input
                      value={rowSubState.rowName}
                      onChange={(e) =>
                        setRowSubState({
                          ...rowSubState,
                          rowName: e.target.value,
                        })
                      }
                      onKeyDown={(e) => inputKeyEnter(e, firstChildren)}
                      className={styles.inputRowName}
                    />
                  ) : (
                    <>{firstChildren.rowName}</>
                  )}
                </div>
              </div>
            </div>
            <div className={styles.subDirectoryBlockTwo}>
              <div className={styles.rowBlockSalary}>
                <div className={styles.rowSalaryText}>
                  {currentEditInputOpen === firstChildren.id ? (
                    <input
                      value={rowSubState.salary}
                      onChange={(e) =>
                        setRowSubState({
                          ...rowSubState,
                          salary: e.target.value,
                        })
                      }
                      onKeyDown={(e) => inputKeyEnter(e, firstChildren)}
                      className={styles.inputSalary}
                      placeholder="0"
                    />
                  ) : (
                    <>{firstChildren.salary}</>
                  )}
                </div>
              </div>
              <div className={styles.rowBlockEquipmentCosts}>
                <div className={styles.equipmentText}>
                  {currentEditInputOpen === firstChildren.id ? (
                    <input
                      value={rowSubState.equipmentCosts}
                      onChange={(e) =>
                        setRowSubState({
                          ...rowSubState,
                          equipmentCosts: e.target.value,
                        })
                      }
                      onKeyDown={(e) => inputKeyEnter(e, firstChildren)}
                      className={styles.inputEquipmentCosts}
                      placeholder="0"
                    />
                  ) : (
                    <>{firstChildren.equipmentCosts}</>
                  )}
                </div>
              </div>
              <div className={styles.rowBlockOverheads}>
                <div className={styles.overheadsText}>
                  {currentEditInputOpen === firstChildren.id ? (
                    <input
                      value={rowSubState.overheads}
                      onChange={(e) =>
                        setRowSubState({
                          ...rowSubState,
                          overheads: e.target.value,
                        })
                      }
                      onKeyDown={(e) => inputKeyEnter(e, firstChildren)}
                      className={styles.inputOverheads}
                      placeholder="0"
                    />
                  ) : (
                    <>{firstChildren.overheads}</>
                  )}
                </div>
              </div>
              <div className={styles.rowBlockEstimatedProfit}>
                <div className={styles.profitText}>
                  {currentEditInputOpen === firstChildren.id ? (
                    <input
                      value={rowSubState.estimatedProfit}
                      onChange={(e) =>
                        setRowSubState({
                          ...rowSubState,
                          estimatedProfit: e.target.value,
                        })
                      }
                      onKeyDown={(e) => inputKeyEnter(e, firstChildren)}
                      className={styles.inputEstimatedProfit}
                      placeholder="0"
                    />
                  ) : (
                    <>{firstChildren.estimatedProfit}</>
                  )}
                </div>
              </div>
            </div>
          </div>
          <RowSubSubDirectory
            firstChildren={firstChildren}
            setStateAllRow={setStateAllRow}
            idNewSubSubDir={idNewSubSubDir}
            inputErrColorRed={inputErrColorRed}
            setInputErrColorRed={setInputErrColorRed}
            isEditedInputCurrentMoment={isEditedInputCurrentMoment}
            setIsEditedInputCurrentMoment={setIsEditedInputCurrentMoment}
          />
        </div>
      ))}
    </div>
  )
}
