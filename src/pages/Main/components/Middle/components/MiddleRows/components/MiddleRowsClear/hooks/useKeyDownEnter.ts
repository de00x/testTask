import { IRowState } from '../../../../../../../types/MiddleRow.types'
import { eID } from '../../../MiddleRows'
import axios from 'axios'

interface IUseKeyDownEnter {
  rowState: IRowState
  setStateAllRow: React.Dispatch<React.SetStateAction<IRowState[]>>
}

const useKeyDownEnter = ({ rowState, setStateAllRow }: IUseKeyDownEnter) => {
  const inputKeyEnter = (e: React.KeyboardEvent): void => {
    if (e.key === 'Enter') {
      axios
        .post(`/v1/outlay-rows/entity/${eID}/row/create`, {
          equipmentCosts: rowState.equipmentCosts === '' ? 0 : rowState.equipmentCosts,
          estimatedProfit: rowState.estimatedProfit === '' ? 0 : rowState.estimatedProfit,
          machineOperatorSalary: 0,
          mainCosts: 0,
          materials: 0,
          mimExploitation: 0,
          overheads: rowState.overheads === '' ? 0 : rowState.overheads,
          parentId: null,
          rowName: rowState.rowName === '' ? '' : rowState.rowName,
          salary: rowState.salary === '' ? 0 : rowState.salary,
          supportCosts: 0,
        })
        .then(successCreateFirstEntity)
        .catch((err) => console.log('err', err))
    }
  }
  const successCreateFirstEntity = (): void => {
    axios
      .get(`/v1/outlay-rows/entity/${eID}/row/list`)
      .then((res) => setStateAllRow(res.data))
      .catch((err) => console.log('err', err))
  }
  return inputKeyEnter
}

export default useKeyDownEnter
