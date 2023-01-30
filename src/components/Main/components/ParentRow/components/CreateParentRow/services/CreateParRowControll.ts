import { ICreateParRowControllProps } from '../types/CreateParentRow.types'
import { eID } from '../../../ParentRow'
import axios from 'axios'

const CreateParRowControllers = (props: ICreateParRowControllProps) => {
  const onKeyEnter = (e: React.KeyboardEvent) => {
    if (e.code === 'Enter') {
      axios
        .post(`/v1/outlay-rows/entity/${eID}/row/create`, {
          equipmentCosts: props.rowEditingData.equipmentCosts,
          estimatedProfit: props.rowEditingData.estimatedProfit,
          machineOperatorSalary: 0,
          mainCosts: 0,
          materials: 0,
          mimExploitation: 0,
          overheads: props.rowEditingData.overheads,
          parentId: null,
          rowName: props.rowEditingData.rowName,
          salary: props.rowEditingData.salary,
          supportCosts: 0,
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
