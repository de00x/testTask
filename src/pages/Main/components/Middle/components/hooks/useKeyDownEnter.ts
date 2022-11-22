import { IRowState } from '../MiddleRow.types'
import axios, { AxiosResponse } from 'axios'
import { eID } from '../MiddleRows'

interface IUseKeyDownEnter {
  rowState: IRowState
  setIsLoadingPage: React.Dispatch<React.SetStateAction<boolean>>
  setStateAllRow: React.Dispatch<React.SetStateAction<IRowState[]>>
  setCurrentEditInputOpen: React.Dispatch<React.SetStateAction<number | undefined>>
}

const useKeyDownEnter = ({
  rowState,
  setCurrentEditInputOpen,
  setStateAllRow,
  setIsLoadingPage,
}: IUseKeyDownEnter) => {
  const responseRowSuccess = (res: AxiosResponse): void => {
    setStateAllRow(res.data)
    setIsLoadingPage(false)
  }

  const successUpdateRow = (): void => {
    setCurrentEditInputOpen(0)
    axios
      .get(`/v1/outlay-rows/entity/${eID}/row/list`)
      .then((res) => responseRowSuccess(res))
      .catch((err) => console.log('err', err))
  }

  const inputKeyEnter = (e: React.KeyboardEvent, parentRow: IRowState): void => {
    const rID = parentRow.id !== undefined ? parentRow.id : 0

    if (e.key === 'Enter') {
      axios
        .post(`/v1/outlay-rows/entity/${eID}/row/${rID}/update`, {
          equipmentCosts: rowState.equipmentCosts === '' ? 0 : rowState.equipmentCosts,
          estimatedProfit: rowState.estimatedProfit === '' ? 0 : rowState.estimatedProfit,
          machineOperatorSalary: 0,
          mainCosts: 0,
          materials: 0,
          mimExploitation: 0,
          overheads: rowState.overheads === '' ? 0 : rowState.overheads,
          rowName: rowState.rowName,
          salary: rowState.salary === '' ? 0 : rowState.salary,
          supportCosts: 0,
        })
        .then(() => successUpdateRow())
        .catch((err) => console.log('err', err))
    } else if (e.key === 'Escape') setCurrentEditInputOpen(0)
  }

  return inputKeyEnter
}

export default useKeyDownEnter
