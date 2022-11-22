import axios, { AxiosResponse } from 'axios'
import { IRowState, ISubChildren } from '../../../MiddleRow.types'
import { eID } from '../../../MiddleRows'

interface IUseKeyDownEnter {
  rowSubSubState: ISubChildren
  setStateAllRow: React.Dispatch<React.SetStateAction<IRowState[]>>
  setCurrentEditInputOpen: React.Dispatch<React.SetStateAction<number | undefined>>
}

const useKeyDownEnter = ({
  rowSubSubState,
  setCurrentEditInputOpen,
  setStateAllRow,
}: IUseKeyDownEnter) => {
  const responseRowSuccess = (res: AxiosResponse): void => {
    setStateAllRow(res.data)
  }

  const successResponse = (): void => {
    setCurrentEditInputOpen(0)
    axios
      .get(`/v1/outlay-rows/entity/${eID}/row/list`)
      .then((res) => responseRowSuccess(res))
      .catch((err) => console.log('err', err))
  }

  const inputKeyEnter = (e: React.KeyboardEvent, secondChildren: ISubChildren): void => {
    const rID = secondChildren.id !== undefined ? secondChildren.id : 0
    if (e.key === 'Enter') {
      axios
        .post(`/v1/outlay-rows/entity/${eID}/row/${rID}/update`, {
          equipmentCosts: rowSubSubState.equipmentCosts === '' ? 0 : rowSubSubState.equipmentCosts,
          estimatedProfit:
            rowSubSubState.estimatedProfit === '' ? 0 : rowSubSubState.estimatedProfit,
          machineOperatorSalary: 0,
          mainCosts: 0,
          materials: 0,
          mimExploitation: 0,
          overheads: rowSubSubState.overheads === '' ? 0 : rowSubSubState.overheads,
          rowName: rowSubSubState.rowName === '' ? '' : rowSubSubState.rowName,
          salary: rowSubSubState.salary === '' ? 0 : rowSubSubState.salary,
          supportCosts: 0,
        })
        .then(successResponse)
        .catch((err) => console.log('err', err))
    } else if (e.key === 'Escape') setCurrentEditInputOpen(0)
  }
  return inputKeyEnter
}

export default useKeyDownEnter
