import React from 'react'
import Auxillary from '../../../hoc/Auxiliary/Auxillary'
import Layout from '../../../hoc/Layout/Layout'

const nqueenLayout = (props) => {
  //console.log("binarysearchlayout")
  return (
    <Auxillary>
      <Layout visualizer="nqueen" />
    </Auxillary>
  )
}
export default nqueenLayout
