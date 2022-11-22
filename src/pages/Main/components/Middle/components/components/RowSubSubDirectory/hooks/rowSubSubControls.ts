import axios, { AxiosResponse } from 'axios'
import { IRowState, ISubChildren } from '../../../MiddleRow.types'
import { eID } from '../../../MiddleRows'

interface IUseRowSubSubControls {
  isEditedInputCurrentMoment?: number
  setCurrentEditInputOpen: React.Dispatch<React.SetStateAction<number | undefined>>
  setRowSubSubState: React.Dispatch<React.SetStateAction<ISubChildren>>
  rowSubSubState: ISubChildren
  setInputErrColorRed: React.Dispatch<React.SetStateAction<boolean>>
  setStateAllRow: React.Dispatch<React.SetStateAction<IRowState[]>>
}

const useRowSubSubControls = ({
  isEditedInputCurrentMoment,
  setCurrentEditInputOpen,
  rowSubSubState,
  setRowSubSubState,
  setInputErrColorRed,
  setStateAllRow,
}: IUseRowSubSubControls) => {
  const openEditInput = (secondChildren: ISubChildren): void => {
    if (isEditedInputCurrentMoment === 0) {
      setCurrentEditInputOpen(secondChildren.id)
      setRowSubSubState({ ...rowSubSubState, ...secondChildren })
    } else {
      setInputErrColorRed(true)
      setTimeout(() => {
        setInputErrColorRed(false)
      }, 5000)
    }
  }

  const successResponse = (): void => {
    setCurrentEditInputOpen(0)
    axios
      .get(`/v1/outlay-rows/entity/${eID}/row/list`)
      .then((res) => responseRowSuccess(res))
      .catch((err) => console.log('err', err))
  }

  const responseRowSuccess = (res: AxiosResponse): void => {
    setStateAllRow(res.data)
  }

  const deleteCurrentRow = (secondChildren: ISubChildren): void => {
    const rID = secondChildren.id !== undefined ? secondChildren.id : 0
    if (isEditedInputCurrentMoment === 0) {
      axios
        .delete(`/v1/outlay-rows/entity/${eID}/row/${rID}/delete`)
        .then(successResponse)
        .catch((err) => console.log('err', err))
    } else {
      setInputErrColorRed(true)
      setTimeout(() => {
        setInputErrColorRed(false)
      }, 5000)
    }
  }
  return { openEditInput, deleteCurrentRow }
}

export default useRowSubSubControls
