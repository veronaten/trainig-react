const List = (props) => {

  const number = props.number
  const listsOfNumber = number.map((number) => 
    <li key={number.toString()}>{number}</li>
  )
  return (
    <ul>
      {listsOfNumber}
    </ul>
  )
}

export default List