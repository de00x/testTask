import { IThirdRowData, IParentRowData, IRowEditingData } from '../ParentRow/ParentRow.types'

interface IThirdRowProps {
  isTrashRow: number
  parentRowID: number
  secondRowID: number
  currentErrRow: number
  thirdRow: IThirdRowData
  currentEditingRow: number
  rowEditingData: IRowEditingData
  setIsTrashRow: React.Dispatch<React.SetStateAction<number>>
  setCurrentErrRow: React.Dispatch<React.SetStateAction<number>>
  setCurrentEditingRow: React.Dispatch<React.SetStateAction<number>>
  setParentRowData: React.Dispatch<React.SetStateAction<IParentRowData[]>>
  setRowEditingData: React.Dispatch<React.SetStateAction<IRowEditingData>>
}

export type { IThirdRowProps }
