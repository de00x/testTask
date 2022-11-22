import { IChildren, IRowState } from '../../../MiddleRow.types'
import axios, { AxiosResponse } from 'axios'
import { eID } from '../../../MiddleRows'

interface IUseRowSubControls {
  rowSubState: IChildren
  currentEditInputOpen?: number
  isEditedInputCurrentMoment?: number
  setRowSubState: React.Dispatch<React.SetStateAction<IChildren>>
  setStateAllRow: React.Dispatch<React.SetStateAction<IRowState[]>>
  setInputErrColorRed: React.Dispatch<React.SetStateAction<boolean>>
  setIdNewSubSubDir: React.Dispatch<React.SetStateAction<number | undefined>>
  setCurrentEditInputOpen: React.Dispatch<React.SetStateAction<number | undefined>>
}

const useRowSubControls = ({
  rowSubState,
  setRowSubState,
  setStateAllRow,
  setIdNewSubSubDir,
  currentEditInputOpen,
  setInputErrColorRed,
  setCurrentEditInputOpen,
  isEditedInputCurrentMoment,
}: IUseRowSubControls) => {
  const openEditInput = (firstChildren: IChildren): void => {
    if (currentEditInputOpen === 0 && isEditedInputCurrentMoment === 0) {
      setCurrentEditInputOpen(firstChildren.id)
      setRowSubState({ ...rowSubState, ...firstChildren })
    } else {
      setInputErrColorRed(true)
      setTimeout(() => {
        setInputErrColorRed(false)
      }, 5000)
    }
  }

  const createNewSubSubDirectory = (firstChildren: IChildren): void => {
    if (currentEditInputOpen === 0 && isEditedInputCurrentMoment === 0) {
      axios
        .post(`/v1/outlay-rows/entity/${eID}/row/create`, {
          equipmentCosts: 0,
          estimatedProfit: 0,
          machineOperatorSalary: 0,
          mainCosts: 0,
          materials: 0,
          mimExploitation: 0,
          overheads: 0,
          parentId: firstChildren.id,
          rowName: '',
          salary: 0,
          supportCosts: 0,
        })
        .then((res) => successCreateNewRow(res))
        .catch((err) => console.log('err', err))
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

  const deleteCurrentRow = (firstChildren: IChildren): void => {
    const rID = firstChildren.id !== undefined ? firstChildren.id : 0
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

  const responseRowSuccess = (res: AxiosResponse): void => {
    setStateAllRow(res.data)
  }

  const successCreateNewRow = (res: AxiosResponse): void => {
    setIdNewSubSubDir(res.data.current.id)
    axios
      .get(`/v1/outlay-rows/entity/${eID}/row/list`)
      .then((res) => responseRowSuccess(res))
      .catch((err) => console.log('err', err))
  }
  return { createNewSubSubDirectory, deleteCurrentRow, responseRowSuccess, openEditInput }
}

export default useRowSubControls
