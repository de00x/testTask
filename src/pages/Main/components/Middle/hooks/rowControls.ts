import axios, { AxiosResponse } from 'axios'
import { IRowState } from '../../../types/MiddleRow.types'

interface IUseRowControls {
  eID: string
  rowState: IRowState
  currentEditInputOpen?: number
  isEditedInputCurrentMoment?: number
  setRowState: React.Dispatch<React.SetStateAction<IRowState>>
  setIsLoadingPage: React.Dispatch<React.SetStateAction<boolean>>
  setStateAllRow: React.Dispatch<React.SetStateAction<IRowState[]>>
  setInputErrColorRed: React.Dispatch<React.SetStateAction<boolean>>
  setIdNewSubDir: React.Dispatch<React.SetStateAction<number | undefined>>
  setCurrentEditInputOpen: React.Dispatch<React.SetStateAction<number | undefined>>
}

const useRowControls = ({
  eID,
  rowState,
  setRowState,
  setStateAllRow,
  setIdNewSubDir,
  setIsLoadingPage,
  setInputErrColorRed,
  currentEditInputOpen,
  setCurrentEditInputOpen,
  isEditedInputCurrentMoment,
}: IUseRowControls) => {
  const successCreateNewRow = (res: AxiosResponse): void => {
    setIdNewSubDir(res.data.current.id)
    axios
      .get(`/v1/outlay-rows/entity/${eID}/row/list`)
      .then((res) => responseRowSuccess(res))
      .catch((err) => console.log('err', err))
  }

  const createNewParentRow = (): void => {
    if (isEditedInputCurrentMoment === 0) {
      axios
        .post(`/v1/outlay-rows/entity/${eID}/row/create`, {
          equipmentCosts: 0,
          estimatedProfit: 0,
          machineOperatorSalary: 0,
          mainCosts: 0,
          materials: 0,
          mimExploitation: 0,
          overheads: 0,
          parentId: null,
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

  const deleteCurrentRow = (parentRow: IRowState): void => {
    const rID = parentRow.id !== undefined ? parentRow.id : 0
    if (currentEditInputOpen === 0 && isEditedInputCurrentMoment === 0) {
      axios
        .delete(`/v1/outlay-rows/entity/${eID}/row/${rID}/delete`)
        .then(successUpdateRow)
        .catch((err) => console.log('err', err))
    } else {
      setInputErrColorRed(true)
      setTimeout(() => {
        setInputErrColorRed(false)
      }, 5000)
    }
  }

  const createNewSubDirectory = (firstChildren: IRowState): void => {
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

  const openEditInput = (parentRow: IRowState): void => {
    if (isEditedInputCurrentMoment === 0) {
      setCurrentEditInputOpen(parentRow.id)
      setRowState({ ...rowState, ...parentRow })
    } else {
      setInputErrColorRed(true)
      setTimeout(() => {
        setInputErrColorRed(false)
      }, 5000)
    }
  }

  return { deleteCurrentRow, createNewParentRow, createNewSubDirectory, openEditInput }
}

export default useRowControls
