interface IThirdRowData {
  child: []
  id: number
  salary: string
  rowName: string
  overheads: string
  equipmentCosts: string
  estimatedProfit: string
}
interface ISecondRowData {
  child: IThirdRowData[]
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
interface IReqDefaultData {
  equipmentCosts: number
  estimatedProfit: number
  machineOperatorSalary: number
  mainCosts: number
  materials: number
  mimExploitation: number
  overheads: number
  parentId: null
  rowName: string
  salary: number
  supportCosts: number
}
interface IRowEditingData {
  rowName: string
  salary: string
  overheads: string
  equipmentCosts: string
  estimatedProfit: string
}

export type { IParentRowData, ISecondRowData, IReqDefaultData, IRowEditingData, IThirdRowData }
