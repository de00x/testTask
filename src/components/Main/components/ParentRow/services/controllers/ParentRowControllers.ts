import { IParentRowControllProps } from '../types/ParRowControl.types'
import { IParentRowData } from '../../types/ParentRow.types'
import { eID } from '../../ParentRow'
import axios from 'axios'

const ParentRowControllers = (props: IParentRowControllProps) => {
  const deleteRow = (rID: number) => {
    axios
      .delete(`/v1/outlay-rows/entity/${eID}/row/${rID}/delete`)
      .then(() => successFulDeleteRow())
      .catch((err) => console.log('err', err))
    const successFulDeleteRow = () => {
      props.setParentRowData((prev) => prev.filter((rows) => rows.id !== rID))
    }
  }
  const onDoubleClickRow = (currentRow: IParentRowData) => {
    props.setCurrentEditingRow(currentRow.id)
    props.setRowEditingData({
      ...props.rowEditingData,
      rowName: currentRow.rowName,
      salary: currentRow.salary,
      equipmentCosts: currentRow.equipmentCosts,
      overheads: currentRow.overheads,
      estimatedProfit: currentRow.estimatedProfit,
    })
  }
  return { deleteRow, onDoubleClickRow }
}

export default ParentRowControllers
