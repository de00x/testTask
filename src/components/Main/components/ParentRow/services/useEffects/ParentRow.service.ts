import { IParentRowData } from '../../types/ParentRow.types'
import { eID } from '../../ParentRow'
import { useEffect } from 'react'
import axios from 'axios'

const ParentRowService = {
  GetAllRows(setParentRowData: React.Dispatch<React.SetStateAction<IParentRowData[]>>) {
    useEffect(() => {
      axios
        .get(`/v1/outlay-rows/entity/${eID}/row/list`)
        .then((res) => setParentRowData(res.data))
        .catch((err) => console.log('err', err))
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
  },
}

export default ParentRowService
