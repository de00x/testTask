import { useEffect } from 'react'
import { IChildren } from '../../../../../../types/MiddleRow.types'

const RowSubDirService = {
  useCurrentEditInputOpen(
    setCurrentEditInputOpen: React.Dispatch<React.SetStateAction<number | undefined>>,
    setRowSubState: React.Dispatch<React.SetStateAction<IChildren>>,
    idNewSubDir: number | undefined,
    rowSubState: IChildren
  ) {
    useEffect(() => {
      setCurrentEditInputOpen(idNewSubDir)
      setRowSubState({
        ...rowSubState,
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
}

export default RowSubDirService
