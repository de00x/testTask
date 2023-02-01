import { ISecondRowControllProps } from '../types/SecRowControll.types'
import { eID, reqDefaultData } from '../../../../ParentRow'
import axios, { AxiosResponse } from 'axios'

const SecondRowControllers = (props: ISecondRowControllProps) => {
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
      props.setParentRowData((prev) => {
        const currentParentRow = prev.find((parentRow) => parentRow.id === props.parentRowID)
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const currentSecondRow: any = currentParentRow?.child.find(
          (secondRow) => secondRow.id === res.data.current.id
        )
        if (currentSecondRow !== undefined) {
          const { current } = res.data
          for (const key in current) {
            currentSecondRow[key] = current[key]
          }
        }
        return prev
      })
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
  const deleteSecondRow = (rID: number) => {
    axios.delete(`/v1/outlay-rows/entity/${eID}/row/${rID}/delete`).then(
      () => successFulDeleteRow(),
      (err) => console.log('err', err)
    )
    const successFulDeleteRow = () => {
      props.setParentRowData((prev) =>
        prev.map((parentRow) =>
          parentRow.id === props.parentRowID
            ? { ...parentRow, child: parentRow.child.filter((secondRow) => secondRow.id !== rID) }
            : parentRow
        )
      )
    }
  }
  return { onKeyEnter, deleteSecondRow }
}

export default SecondRowControllers
