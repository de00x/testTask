import { IParentRowData, IRowEditingData } from '../ParentRow/ParentRow.types'

interface ISecondRowControllProps {
  parentRowID: number
  currentEditingRow: number
  rowEditingData: IRowEditingData
  setCurrentErrRow: React.Dispatch<React.SetStateAction<number>>
  setCurrentEditingRow: React.Dispatch<React.SetStateAction<number>>
  setParentRowData: React.Dispatch<React.SetStateAction<IParentRowData[]>>
}

export type { ISecondRowControllProps }
