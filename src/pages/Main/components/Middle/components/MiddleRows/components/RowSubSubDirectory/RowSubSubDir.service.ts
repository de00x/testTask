import { useEffect } from 'react'
import { ISubChildren } from '../../../../../../types/MiddleRow.types'

const RowSubSubDirService = {
  useCurrentEditInputOpen(
    setCurrentEditInputOpen: React.Dispatch<React.SetStateAction<number | undefined>>,
    setRowSubSubState: React.Dispatch<React.SetStateAction<ISubChildren>>,
    idNewSubSubDir: number | undefined,
    rowSubSubState: ISubChildren
  ) {
    useEffect(() => {
      setCurrentEditInputOpen(idNewSubSubDir)
      setRowSubSubState({
        ...rowSubSubState,
        estimatedProfit: '',
        equipmentCosts: '',
        overheads: '',
        rowName: '',
        salary: '',
      })
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [idNewSubSubDir])
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

export default RowSubSubDirService
