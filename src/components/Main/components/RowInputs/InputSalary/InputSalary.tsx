import { IInputRowProps } from '../types/RowInputs.types'
import { FC } from 'react'

export const InputSalary: FC<IInputRowProps> = (props): JSX.Element => {
  return (
    <input
      type="number"
      value={props.rowEditingData.salary}
      onChange={(e) => props.setRowEditingData({ ...props.rowEditingData, salary: e.target.value })}
    />
  )
}
