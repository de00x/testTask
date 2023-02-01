import { IRowEditingData } from '../ParentRow/ParentRow.types'

interface IInputRowProps {
  rowEditingData: IRowEditingData
  setRowEditingData: React.Dispatch<React.SetStateAction<IRowEditingData>>
}

export type { IInputRowProps }
