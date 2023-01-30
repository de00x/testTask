import { IParentRowData } from '../../types/ParentRow.types'

interface IParentRowControllProps {
  setCurrentEditingRow: React.Dispatch<React.SetStateAction<number>>
  setParentRowData: React.Dispatch<React.SetStateAction<IParentRowData[]>>
  rowEditingData: {
    salary: string
    rowName: string
    overheads: string
    equipmentCosts: string
    estimatedProfit: string
  }
  setRowEditingData: React.Dispatch<
    React.SetStateAction<{
      salary: string
      rowName: string
      overheads: string
      equipmentCosts: string
      estimatedProfit: string
    }>
  >
}
interface IUpdateParentRowProps {
  rowEditingData: {
    salary: string
    rowName: string
    overheads: string
    equipmentCosts: string
    estimatedProfit: string
  }
  setCurrentErrRow: React.Dispatch<React.SetStateAction<number>>
  setCurrentEditingRow: React.Dispatch<React.SetStateAction<number>>
  setParentRowData: React.Dispatch<React.SetStateAction<IParentRowData[]>>
}

export type { IParentRowControllProps, IUpdateParentRowProps }
