import { IInputRowProps } from '../types/RowInputs.types'
import { FC } from 'react'

export const InputEquipCosts: FC<IInputRowProps> = (props): JSX.Element => {
  return (
    <input
      type="number"
      value={props.rowEditingData.equipmentCosts}
      onChange={(e) =>
        props.setRowEditingData({ ...props.rowEditingData, equipmentCosts: e.target.value })
      }
    />
  )
}
