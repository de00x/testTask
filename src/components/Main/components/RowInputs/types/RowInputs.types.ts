interface IInputRowProps {
  rowEditingData: {
    rowName: string
    salary: string
    equipmentCosts: string
    overheads: string
    estimatedProfit: string
  }
  setRowEditingData: React.Dispatch<
    React.SetStateAction<{
      rowName: string
      salary: string
      equipmentCosts: string
      overheads: string
      estimatedProfit: string
    }>
  >
}

export type { IInputRowProps }
