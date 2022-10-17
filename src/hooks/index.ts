import { useEffect, useState } from 'react'

export function useHome() {
  const [data, setData] = useState([])
  const [filteredData, setFilteredData] = useState([])

  useEffect(() => {}, [])

  return {
    data,
    setData,
    filteredData,
    setFilteredData
  }
}
