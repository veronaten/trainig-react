const Blog = (props) => {
  const sidebar = (
    <ul>
      {props.value.map((post) => <li key={post.id}>{post.title}</li>)}
    </ul>
  )

  const content = props.value.map((post) => 
    <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  )

  return (
    <div>
      {sidebar}
      <hr />
      {content}
    </div>
  )
}

export default Blog