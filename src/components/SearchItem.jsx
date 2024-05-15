import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import Product from './Product'
import {items} from './Data'

const SearchItem = () => {
  const {term} = useParams()
  const [filterData, setFilterData] = useState([])

  useEffect(()=>{
    const filteredData = () =>{
      const data = items.filter((p)=>p.title.toLowerCase().includes(term.toLowerCase()));
      setFilterData(data)
    }
    filteredData();
  },[term])

  return (
      <Product items={filterData}/>
  )
}

export default SearchItem
