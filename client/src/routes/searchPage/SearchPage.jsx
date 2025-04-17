import React from 'react'
import './SearchPage.css'
import Gallary from '../../components/gallary/Gallary'
import { useSearchParams } from 'react-router'

const SearchPage = () => {
  let [searchParams] = useSearchParams();

  const search = searchParams.get("search");
  const boardId = searchParams.get("boardId");

  return (
    <Gallary search ={search} boardId={boardId}/>
  )
}

export default SearchPage