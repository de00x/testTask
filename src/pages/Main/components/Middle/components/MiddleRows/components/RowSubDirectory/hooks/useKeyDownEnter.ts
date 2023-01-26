import { IChildren, IRowState } from '../../../../../../../types/MiddleRow.types'
import axios, { AxiosResponse } from 'axios'
import { eID } from '../../../MiddleRows'

interface IUseKeyDownEnter {
  rowSubState: IChildren
  setStateAllRow: React.Dispatch<React.SetStateAction<IRowState[]>>
  setCurrentEditInputOpen: React.Dispatch<React.SetStateAction<number | undefined>>
}

const useKeyDownEnter = ({
  rowSubState,
  setStateAllRow,
  setCurrentEditInputOpen,
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

  const inputKeyEnter = (e: React.KeyboardEvent, firstChildren: IChildren): void => {
    const rID = firstChildren.id !== undefined ? firstChildren.id : 0
    if (e.key === 'Enter') {
      axios
        .post(`/v1/outlay-rows/entity/${eID}/row/${rID}/update`, {
          equipmentCosts: rowSubState.equipmentCosts === '' ? 0 : rowSubState.equipmentCosts,
          estimatedProfit: rowSubState.estimatedProfit === '' ? 0 : rowSubState.estimatedProfit,
          machineOperatorSalary: 0,
          mainCosts: 0,
          materials: 0,
          mimExploitation: 0,
          overheads: rowSubState.overheads === '' ? 0 : rowSubState.overheads,
          rowName: rowSubState.rowName === '' ? '' : rowSubState.rowName,
          salary: rowSubState.salary === '' ? 0 : rowSubState.salary,
          supportCosts: 0,
        })
        .then(successResponse)
        .catch((err) => console.log('err', err))
    } else if (e.key === 'Escape') setCurrentEditInputOpen(0)
  }
  return inputKeyEnter
}

export default useKeyDownEnter
