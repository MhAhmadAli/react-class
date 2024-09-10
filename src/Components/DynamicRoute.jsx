import React from 'react'
import { useParams } from 'react-router-dom';

function DynamicRoute() {
  let params = useParams();

  return (
    <div>{params.value} {params.id} {params.email}</div>
  )
}

export default DynamicRoute