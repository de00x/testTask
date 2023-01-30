import { ISecondRowControllProps } from '../types/SecRowControll.types'
import axios, { AxiosResponse } from 'axios'

const eID = process.env.REACT_APP_ID as string

const UpdateSecondRow = (props: ISecondRowControllProps) => {
  const onKeyEnter = (e: React.KeyboardEvent, rID: number) => {
    if (e.code === 'Escape') props.setCurrentEditingRow(0)
    if (e.code === 'Enter') {
      axios
        .post(`/v1/outlay-rows/entity/${eID}/row/${rID}/update`, {
          equipmentCosts: props.rowEditingData.equipmentCosts,
          estimatedProfit: props.rowEditingData.estimatedProfit,
          machineOperatorSalary: 0,
          mainCosts: 0,
          materials: 0,
          mimExploitation: 0,
          overheads: props.rowEditingData.overheads,
          rowName: props.rowEditingData.rowName,
          salary: props.rowEditingData.salary,
          supportCosts: 0,
        })
        .then((res) => {
          successFulChangeData(res)
        })
        .catch(() => errChangeData(rID))
    }
    const successFulChangeData = (res: AxiosResponse) => {
      const currentParentRow = props.parentRowData.find(
        (parentRow) => parentRow.id === props.parentRowID
      )
      const newSecondRow = currentParentRow?.child.map((secondRow) =>
        secondRow.id === res.data.current.id
          ? {
              ...secondRow,
              rowName: res.data.current.rowName,
              salary: res.data.current.salary,
              equipmentCosts: res.data.current.equipmentCosts,
              overheads: res.data.current.overheads,
              estimatedProfit: res.data.current.estimatedProfit,
            }
          : secondRow
      )
      const newSecondRowToObject = newSecondRow?.find(
        (newSecondRow) => newSecondRow.id === res.data.current.id
      )

      // console.log('currentParentRow', currentParentRow)
      console.log('newSecondRow', newSecondRow)
      console.log('newSecondRowToObject', newSecondRowToObject)

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

export default UpdateSecondRow
