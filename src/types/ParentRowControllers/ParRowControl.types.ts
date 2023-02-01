import { IParentRowData, IRowEditingData } from '../ParentRow/ParentRow.types'

interface IParentRowControllProps {
  currentEditingRow: number
  parentRowID?: number
  rowEditingData: IRowEditingData
  setCurrentErrRow: React.Dispatch<React.SetStateAction<number>>
  setCurrentEditingRow: React.Dispatch<React.SetStateAction<number>>
  setParentRowData: React.Dispatch<React.SetStateAction<IParentRowData[]>>
  setRowEditingData: React.Dispatch<React.SetStateAction<IRowEditingData>>
}
interface IUpdateParentRowProps {
  rowEditingData: IRowEditingData
  setCurrentErrRow: React.Dispatch<React.SetStateAction<number>>
  setCurrentEditingRow: React.Dispatch<React.SetStateAction<number>>
  setParentRowData: React.Dispatch<React.SetStateAction<IParentRowData[]>>
}

export type { IParentRowControllProps, IUpdateParentRowProps }
