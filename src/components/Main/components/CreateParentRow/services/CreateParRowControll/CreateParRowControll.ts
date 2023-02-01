import { ICreateParRowControllProps } from '../../../../../../types/CreateParentRow/CreateParentRow.types'
import { eID, reqDefaultData } from '../../../ParentRow/ParentRow'
import axios from 'axios'

const CreateParRowControllers = (props: ICreateParRowControllProps) => {
  const onKeyEnter = (e: React.KeyboardEvent) => {
    if (e.code === 'Enter') {
      axios
        .post(`/v1/outlay-rows/entity/${eID}/row/create`, {
          ...reqDefaultData,
          equipmentCosts: props.rowEditingData.equipmentCosts,
          estimatedProfit: props.rowEditingData.estimatedProfit,
          overheads: props.rowEditingData.overheads,
          parentId: null,
          rowName: props.rowEditingData.rowName,
          salary: props.rowEditingData.salary,
        })
        .then((res) => props.setParentRowData([...props.parentRowData, res.data.current]))
        .catch(() => errCreatedParentRow())
    }
    const errCreatedParentRow = () => {
      props.setErrCreatedParentRow(true)
      setTimeout(() => {
        props.setErrCreatedParentRow(false)
      }, 5000)
    }
  }
  return { onKeyEnter }
}

export default CreateParRowControllers
