import { IParentRowData, IRowEditingData } from '../ParentRow/ParentRow.types'

interface ICreateParRowControllProps {
  rowEditingData: IRowEditingData
  parentRowData: IParentRowData[]
  setErrCreatedParentRow: React.Dispatch<React.SetStateAction<boolean>>
  setParentRowData: React.Dispatch<React.SetStateAction<IParentRowData[]>>
}
interface ICreateParentRowProps {
  parentRowData: IParentRowData[]
  setParentRowData: React.Dispatch<React.SetStateAction<IParentRowData[]>>
}

export type { ICreateParRowControllProps, ICreateParentRowProps }
