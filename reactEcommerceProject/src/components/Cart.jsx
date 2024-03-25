import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import data from '../data'
import Loading from './Loading'
export default function Cart() {
  let {id} = useParams()
  let [products, setProducts] = useState([])
  useEffect(() => {
    let foundProduct = data.find(item => item.id === parseInt(id))
    if (foundProduct) {
      setProducts(foundProduct)
    }else(
      console.log('No product found')
    )
  }, [id])

  if(!products){
    return <Loading/>
  }
  return (
    <>
      
    </>
  )
}
