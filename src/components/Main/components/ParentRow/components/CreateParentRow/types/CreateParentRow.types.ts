import { IParentRowData } from '../../../types/ParentRow.types'

interface ICreateParRowControllProps {
  rowEditingData: {
    rowName: string
    salary: string
    overheads: string
    equipmentCosts: string
    estimatedProfit: string
  }
  parentRowData: IParentRowData[]
  setErrCreatedParentRow: React.Dispatch<React.SetStateAction<boolean>>
  setParentRowData: React.Dispatch<React.SetStateAction<IParentRowData[]>>
}
interface ICreateParentRowProps {
  parentRowData: IParentRowData[]
  setParentRowData: React.Dispatch<React.SetStateAction<IParentRowData[]>>
}

export type { ICreateParRowControllProps, ICreateParentRowProps }
