import { useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import { posts } from '../data/posts'

function Post() {
  const { id } = useParams()
  const post = posts.find(p => p.id === parseInt(id))

  if (!post) {
    return <div>Post no encontrado</div>
  }

  return (
    <article className="w-full max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <div className="flex space-x-4 text-primary-text/70 mb-8">
        <span>{post.date}</span>
        <span>•</span>
        <span>{post.author}</span>
        <span>•</span>
        <span>{post.category}</span>
      </div>
      <div className="prose prose-invert lg:prose-xl max-w-none">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>
    </article>
  )
}

export default Post