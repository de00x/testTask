import { MiddleRowsLoadingPage } from '../MiddleRowsLoadingPage/MiddleRowsLoadingPage'
import { ReactComponent as FolderBlue } from '../../../img/folderBlue.svg'
import { IRowState } from '../../MiddleRow.types'
import React, { FC, useState } from 'react'
import styles from '../MidSubComp.module.scss'
import useKeyDownEnter from './hooks/useKeyDownEnter'

interface IRowsClearProps {
  setStateAllRow: React.Dispatch<React.SetStateAction<IRowState[]>>
  isLoadingPage: boolean
}

export const MiddleRowsClear: FC<IRowsClearProps> = ({
  setStateAllRow,
  isLoadingPage,
}): JSX.Element => {
  const [rowState, setRowState] = useState<IRowState>({
    estimatedProfit: '',
    equipmentCosts: '',
    overheads: '',
    rowName: '',
    salary: '',
  })

  /// functions ///

  const inputKeyEnter = useKeyDownEnter({ rowState, setStateAllRow })

  /// functions ///

  return (
    <>
      {isLoadingPage ? (
        <MiddleRowsLoadingPage />
      ) : (
        <>
          <div className={styles.middleRowsContainer}>
            <div className={styles.middleRow}>
              <div className={styles.middleRowBlockOne}>
                <div className={styles.parentRowImgControllers}>
                  <div className={styles.folderBluedisabled}>
                    <FolderBlue />
                  </div>
                </div>
                <div className={styles.rowNameTextContainer}>
                  <div className={styles.rowNameText}>
                    <input
                      value={rowState.rowName}
                      onChange={(e) => setRowState({ ...rowState, rowName: e.target.value })}
                      onKeyDown={(e) => inputKeyEnter(e)}
                      className={styles.inputRowName}
                    />
                  </div>
                </div>
              </div>
              <div className={styles.middleRowBlockTwo}>
                <div className={styles.rowBlockSalary}>
                  <div className={styles.rowSalaryText}>
                    <input
                      value={rowState.salary}
                      onChange={(e) => setRowState({ ...rowState, salary: e.target.value })}
                      onKeyDown={(e) => inputKeyEnter(e)}
                      className={styles.inputSalary}
                    />
                  </div>
                </div>
                <div className={styles.rowBlockEquipmentCosts}>
                  <div className={styles.equipmentText}>
                    <input
                      value={rowState.equipmentCosts}
                      onChange={(e) =>
                        setRowState({
                          ...rowState,
                          equipmentCosts: e.target.value,
                        })
                      }
                      onKeyDown={(e) => inputKeyEnter(e)}
                      className={styles.inputEquipmentCosts}
                    />
                  </div>
                </div>
                <div className={styles.rowBlockOverheads}>
                  <div className={styles.overheadsText}>
                    <input
                      value={rowState.overheads}
                      onChange={(e) => setRowState({ ...rowState, overheads: e.target.value })}
                      onKeyDown={(e) => inputKeyEnter(e)}
                      className={styles.inputOverheads}
                    />
                  </div>
                </div>
                <div className={styles.rowBlockEstimatedProfit}>
                  <div className={styles.profitText}>
                    <input
                      value={rowState.estimatedProfit}
                      onChange={(e) =>
                        setRowState({
                          ...rowState,
                          estimatedProfit: e.target.value,
                        })
                      }
                      onKeyDown={(e) => inputKeyEnter(e)}
                      className={styles.inputEstimatedProfit}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}
