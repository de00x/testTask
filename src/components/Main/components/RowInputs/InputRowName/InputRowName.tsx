import { IInputRowProps } from '../../../../../types/RowInputs/RowInputs.types'
import { FC } from 'react'

export const InputRowName: FC<IInputRowProps> = (props): JSX.Element => {
  return (
    <input
      value={props.rowEditingData.rowName}
      onChange={(e) =>
        props.setRowEditingData({ ...props.rowEditingData, rowName: e.target.value })
      }
    />
  )
}
