import { Link } from 'react-router-dom'
import { posts } from '../data/posts'
import CTAButton from '../components/CTAButton'

function Home() {
  // Obtener el post más reciente
  const latestPost = posts[posts.length - 1]
  
  // Obtener los siguientes 2 posts para Featured
  const featuredPosts = posts.slice(-3, -1)
  
  // Obtener el resto de los posts
  const regularPosts = posts.slice(0, -3)

  return (
    <div className="w-full space-y-16">
      {/* Latest Post */}
      <section>
        <h2 className="text-3xl font-bold text-white mb-8">Último Post</h2>
        <article className="bg-primary-bg/30 border border-primary-text/10 p-8 rounded-lg shadow-lg">
          <h2 className="text-4xl font-bold text-white mb-4">
            {latestPost.title}
          </h2>
          <p className="text-primary-text text-xl mb-6">{latestPost.excerpt}</p>
          <div className="flex justify-between items-center">
            <span className="text-sm text-primary-text/70">{latestPost.date}</span>
            <CTAButton onClick={() => window.location.href = `/post/${latestPost.id}`}>
              Leer más
            </CTAButton>
          </div>
        </article>
      </section>

      {/* Featured Posts */}
      <section>
        <h2 className="text-3xl font-bold text-white mb-8">Posts Destacados</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {featuredPosts.map(post => (
            <article key={post.id} className="bg-primary-bg/30 border border-primary-text/10 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-white mb-4">
                {post.title}
              </h2>
              <p className="text-primary-text mb-6">{post.excerpt}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-primary-text/70">{post.date}</span>
                <CTAButton onClick={() => window.location.href = `/post/${post.id}`}>
                  Leer más
                </CTAButton>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* All Posts */}
      <section>
        <h2 className="text-3xl font-bold text-white mb-8">Todos los Posts</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map(post => (
            <article key={post.id} className="bg-primary-bg/30 border border-primary-text/10 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-white mb-4">
                {post.title}
              </h2>
              <p className="text-primary-text mb-6">{post.excerpt}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-primary-text/70">{post.date}</span>
                <CTAButton onClick={() => window.location.href = `/post/${post.id}`}>
                  Leer más
                </CTAButton>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home