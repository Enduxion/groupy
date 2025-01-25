import { useParams } from "react-router-dom"

const Post = () => {

  const { id } = useParams();

  // manipuate the id

  return (
    <div>
      <h1>Post {id}</h1>
    </div>
  )
}

export default Post