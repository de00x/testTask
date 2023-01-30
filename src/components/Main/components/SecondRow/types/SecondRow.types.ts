import { IParentRowData, ISecondRowData } from '../../ParentRow/types/ParentRow.types'

interface ISecondRowProps {
  parentRowID: number
  secondRow: ISecondRowData
  parentRowData: IParentRowData[]
  setParentRowData: React.Dispatch<React.SetStateAction<IParentRowData[]>>
}

export type { ISecondRowProps }
