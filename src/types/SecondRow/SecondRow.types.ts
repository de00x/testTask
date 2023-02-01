import { IParentRowData, IRowEditingData, ISecondRowData } from '../ParentRow/ParentRow.types'

interface ISecondRowProps {
  isTrashRow: number
  parentRowID: number
  currentErrRow: number
  currentEditingRow: number
  secondRow: ISecondRowData
  rowEditingData: IRowEditingData
  setIsTrashRow: React.Dispatch<React.SetStateAction<number>>
  setCurrentErrRow: React.Dispatch<React.SetStateAction<number>>
  setCurrentEditingRow: React.Dispatch<React.SetStateAction<number>>
  setParentRowData: React.Dispatch<React.SetStateAction<IParentRowData[]>>
  setRowEditingData: React.Dispatch<React.SetStateAction<IRowEditingData>>
}

export type { ISecondRowProps }
