import { IRowState } from '../../../../../types/MiddleRow.types'
import axios, { AxiosResponse } from 'axios'
import { eID } from '../MiddleRows'
import { useEffect } from 'react'

export const MiddleRowService = {
  useCurrentEditInputOpen(
    setCurrentEditInputOpen: React.Dispatch<React.SetStateAction<number | undefined>>,
    setRowState: React.Dispatch<React.SetStateAction<IRowState>>,
    rowState: IRowState,
    idNewSubDir?: number
  ) {
    useEffect(() => {
      setCurrentEditInputOpen(idNewSubDir)
      setRowState({
        ...rowState,
        estimatedProfit: '',
        equipmentCosts: '',
        overheads: '',
        rowName: '',
        salary: '',
      })
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [idNewSubDir])
  },
  useIsEditedInputCurrentMoment(
    setIsEditedInputCurrentMoment: React.Dispatch<React.SetStateAction<number | undefined>>,
    currentEditInputOpen?: number
  ) {
    useEffect(() => {
      setIsEditedInputCurrentMoment(currentEditInputOpen)
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentEditInputOpen])
  },
  GetAllData(
    setStateAllRow: React.Dispatch<React.SetStateAction<IRowState[]>>,
    setIsLoadingPage: React.Dispatch<React.SetStateAction<boolean>>
  ) {
    const responseRowSuccess = (res: AxiosResponse): void => {
      setStateAllRow(res.data)
      setIsLoadingPage(false)
    }
    useEffect(() => {
      axios
        .get(`/v1/outlay-rows/entity/${eID}/row/list`)
        .then((res) => responseRowSuccess(res))
        .catch((err) => console.log('err', err))
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
  },
}
