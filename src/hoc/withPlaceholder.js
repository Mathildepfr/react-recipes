import React from 'react'

const withPlaceholder = WrappedComponent => (props) => (
  <WrappedComponent
    placeholder='Mon HOC'
    {...props}
  />
)

export default withPlaceholder
