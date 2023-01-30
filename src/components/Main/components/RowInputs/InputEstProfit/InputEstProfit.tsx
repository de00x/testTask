import { IInputRowProps } from '../types/RowInputs.types'
import { FC } from 'react'

export const InputEstProfit: FC<IInputRowProps> = (props): JSX.Element => {
  return (
    <input
      type="number"
      value={props.rowEditingData.estimatedProfit}
      onChange={(e) =>
        props.setRowEditingData({ ...props.rowEditingData, estimatedProfit: e.target.value })
      }
    />
  )
}
