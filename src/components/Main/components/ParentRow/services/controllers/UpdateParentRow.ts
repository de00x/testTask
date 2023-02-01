import { IUpdateParentRowProps } from '../../../../../../types/ParentRowControllers/ParRowControl.types'
import { eID, reqDefaultData } from '../../ParentRow'
import axios, { AxiosResponse } from 'axios'

const UpdateParentRow = (props: IUpdateParentRowProps) => {
  const onKeyEnter = (e: React.KeyboardEvent, rID: number) => {
    if (e.code === 'Escape') props.setCurrentEditingRow(0)
    if (e.code === 'Enter') {
      axios
        .post(`/v1/outlay-rows/entity/${eID}/row/${rID}/update`, {
          ...reqDefaultData,
          equipmentCosts: props.rowEditingData.equipmentCosts,
          estimatedProfit: props.rowEditingData.estimatedProfit,
          overheads: props.rowEditingData.overheads,
          rowName: props.rowEditingData.rowName,
          salary: props.rowEditingData.salary,
        })
        .then((res) => {
          successFulChangeData(res)
        })
        .catch(() => errChangeData(rID))
    }
    const successFulChangeData = (res: AxiosResponse) => {
      const { current } = res.data
      props.setParentRowData((prev) =>
        prev.map((parentRow) =>
          parentRow.id === current.id
            ? {
                ...parentRow,
                rowName: current.rowName,
                salary: current.salary,
                equipmentCosts: current.equipmentCosts,
                overheads: current.overheads,
                estimatedProfit: current.estimatedProfit,
              }
            : parentRow
        )
      )
      props.setCurrentEditingRow(0)
      props.setCurrentErrRow(0)
    }
    const errChangeData = (rID: number) => {
      props.setCurrentErrRow(rID)
      setTimeout(() => {
        props.setCurrentErrRow(0)
      }, 5000)
    }
  }
  return { onKeyEnter }
}

export default UpdateParentRow
