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

export type { IParentRowData, ISecondRowData }
