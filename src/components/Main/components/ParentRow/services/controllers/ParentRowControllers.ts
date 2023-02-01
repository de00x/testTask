import { IParentRowControllProps } from '../../../../../../types/ParentRowControllers/ParRowControl.types'
import { IParentRowData } from '../../../../../../types/ParentRow/ParentRow.types'
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

  const createSecondRow = (parentId: number) => {
    if (props.currentEditingRow === 0) {
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
        const { current } = res.data

        props.setParentRowData((prev) => {
          prev.find((parentRow) => parentRow.id === parentId)?.child.push(current)
          onDoubleClickRow(current)

          return prev
        })
      }
    } else props.setCurrentErrRow(props.currentEditingRow)
  }

  const createThirdRow = (parentId: number) => {
    if (props.currentEditingRow === 0) {
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
        const { current } = res.data
        props.setParentRowData((prev) => {
          prev
            .find((parentRow) => parentRow.id === props.parentRowID)
            ?.child.find((secondRow) => secondRow.id === parentId)
            ?.child.push(current)
          onDoubleClickRow(current)

          return prev
        })
      }
    } else props.setCurrentErrRow(props.currentEditingRow)
  }

  return { deleteRow, onDoubleClickRow, createSecondRow, createThirdRow }
}

export default ParentRowControllers
