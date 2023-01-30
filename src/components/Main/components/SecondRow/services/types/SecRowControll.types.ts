interface ISecondRowData {
  child: []
  id: number
  salary: string
  rowName: string
  overheads: string
  equipmentCosts: string
  estimatedProfit: string
}
interface IParentRowData {
  child: ISecondRowData[]
  id: number
  salary: string
  rowName: string
  overheads: string
  equipmentCosts: string
  estimatedProfit: string
}
interface ISecondRowControllProps {
  parentRowID: number
  parentRowData: IParentRowData[]
  setCurrentErrRow: React.Dispatch<React.SetStateAction<number>>
  setCurrentEditingRow: React.Dispatch<React.SetStateAction<number>>
  setParentRowData: React.Dispatch<React.SetStateAction<IParentRowData[]>>
  rowEditingData: {
    rowName: string
    salary: string
    overheads: string
    equipmentCosts: string
    estimatedProfit: string
  }
}

export type { ISecondRowControllProps }
