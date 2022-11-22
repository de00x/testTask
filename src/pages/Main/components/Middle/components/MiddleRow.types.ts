interface ISubChildren {
  estimatedProfit: string
  equipmentCosts: string
  overheads: string
  rowName: string
  salary: string
  child?: object[]
  id?: number
}
interface IChildren {
  estimatedProfit: string
  equipmentCosts: string
  overheads: string
  rowName: string
  salary: string
  child?: ISubChildren[]
  id?: number
}
interface IRowState {
  estimatedProfit: string
  equipmentCosts: string
  overheads: string
  rowName: string
  salary: string
  child?: IChildren[]
  id?: number
}

export type { IRowState, IChildren, ISubChildren }
