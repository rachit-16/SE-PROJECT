import React from 'react'
import Auxillary from '../../../../hoc/Auxiliary/Auxillary'
import Layout from '../../../../hoc/Layout/Layout'

const binarySearchLayout = (props) => {
  console.log('binarysearchlayout')
  return (
    <Auxillary>
      <Layout visualizer="binarySearch" />
    </Auxillary>
  )
}

export default binarySearchLayout
