import { IParentRowControllProps } from '../types/ParRowControl.types'
import { IParentRowData } from '../../types/ParentRow.types'
import { eID, reqDefaultData } from '../../ParentRow'
import axios, { AxiosResponse } from 'axios'

const ParentRowControllers = (props: IParentRowControllProps) => {
  const deleteRow = (rID: number) => {
    axios.delete(`/v1/outlay-rows/entity/${eID}/row/${rID}/delete`).then(
      () => successFulDeleteRow(),
      (err) => console.log('err', err)
    )
    const successFulDeleteRow = () => {
      props.setParentRowData((prev) => prev.filter((rows) => rows.id !== rID))
    }
  }
  const onDoubleClickRow = (currentRow: IParentRowData) => {
    if (props.setCurrentEditingRow !== undefined) props.setCurrentEditingRow(currentRow.id)
    props.setRowEditingData({
      ...props.rowEditingData,
      rowName: currentRow.rowName,
      salary: currentRow.salary,
      equipmentCosts: currentRow.equipmentCosts,
      overheads: currentRow.overheads,
      estimatedProfit: currentRow.estimatedProfit,
    })
  }
  const createSecondRow = (parentId: number) => {
    axios
      .post(`/v1/outlay-rows/entity/${eID}/row/create`, {
        ...reqDefaultData,
        parentId,
      })
      .then(
        (res) => successFulChangeData(res),
        (err) => console.log('err', err)
      )
    const successFulChangeData = (res: AxiosResponse) => {
      props.setParentRowData((prev) => {
        prev.find((parentRow) => parentRow.id === parentId)?.child.push(res.data.current)
        onDoubleClickRow(res.data.current)

        return prev
      })
    }
  }
  return { deleteRow, onDoubleClickRow, createSecondRow }
}

export default ParentRowControllers
