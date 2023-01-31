import { IParentRowData, ISecondRowData } from '../../../types/ParentRow.types'

interface ISecondRowProps {
  parentRowID: number
  currentEditingRow: number
  secondRow: ISecondRowData
  setCurrentEditingRow: React.Dispatch<React.SetStateAction<number>>
  setParentRowData: React.Dispatch<React.SetStateAction<IParentRowData[]>>
}

export type { ISecondRowProps }
