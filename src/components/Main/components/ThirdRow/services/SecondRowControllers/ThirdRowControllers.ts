import { IThirdRowControllProps } from '../../../../../../types/ThirdRowControllers/ThirdRowControll.types'
import { eID, reqDefaultData } from '../../../ParentRow/ParentRow'
import axios, { AxiosResponse } from 'axios'

const ThirdRowControllers = (props: IThirdRowControllProps) => {
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
        .then(
          (res) => successFulChangeData(res),
          () => errChangeData(rID)
        )
    }

    const successFulChangeData = (res: AxiosResponse) => {
      props.setParentRowData((prev) => {
        const currentParentRow = prev.find((parentRow) => parentRow.id === props.parentRowID)
        const currentSecondRow = currentParentRow?.child.find(
          (secondRow) => secondRow.id === props.secondRowID
        )
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const currentThirdRow: any = currentSecondRow?.child.find(
          (thirdRow) => thirdRow.id === res.data.current.id
        )
        if (currentThirdRow !== undefined) {
          const { current } = res.data
          for (const key in current) {
            currentThirdRow[key] = current[key]
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

  const deleteThirdRow = (rID: number) => {
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

  return { onKeyEnter, deleteThirdRow }
}

export default ThirdRowControllers
