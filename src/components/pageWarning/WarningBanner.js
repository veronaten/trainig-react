const WarningBanner = (props) => {

  if (!props.warn) {
    return null
  }
  return (
    <h2>Warning</h2>
  )
}

export default WarningBanner