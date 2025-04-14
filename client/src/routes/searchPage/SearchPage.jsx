import React from 'react'
import './SearchPage.css'
import Gallary from '../../components/gallary/Gallary'
import { useSearchParams } from 'react-router'

const SearchPage = () => {
  let [searhcParams] = useSearchParams();

  const search = searhcParams.get("search");
  return (
    <Gallary search ={search}/>
  )
}

export default SearchPage