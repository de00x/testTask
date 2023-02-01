import { IInputRowProps } from '../../../../../types/RowInputs/RowInputs.types'
import { FC } from 'react'

export const InputOverheads: FC<IInputRowProps> = (props): JSX.Element => {
  return (
    <input
      type="number"
      value={props.rowEditingData.overheads}
      onChange={(e) =>
        props.setRowEditingData({ ...props.rowEditingData, overheads: e.target.value })
      }
    />
  )
}
