import CircleLoader from "react-spinners/CircleLoader";
import ClipLoader from "react-spinners/ClipLoader";

const override = {
  display: 'block',
  margin: '100px auto',
}

import React from 'react'

const Spinner = ( { loading } ) => {
  return (
    <CircleLoader 
      color='#4338ca'
      loading={loading}
      cssOverride={override}
      size={50}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  )
}

export default Spinner