import { Post } from './components/Post'
import './global.css'
import { Header } from './components/header'
import styles from './App.module.css'
import { Sidebar } from './components/sidebar'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/marcosousadev.png',
      name: 'Marco Sousa',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋 ' },

      {
        type: 'paragraph',
        content:
          'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projetoé DoctorCare 🚀'
      },
      { type: 'link', content: '<a href=""> jane.design/doctorcare</a>' }
    ],
    publishedAt: new Date('2025-01-08 23:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/batzsh.png',
      name: 'Henrique Balmant',
      role: 'Software Engenieer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋 ' },

      {
        type: 'paragraph',
        content:
          'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projetoé DoctorCare 🚀'
      },
      { type: 'link', content: '<a href=""> jane.design/doctorcare</a>' }
    ],
    publishedAt: new Date('2025-01-09 23:00:00')
  }
]

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                author={post.author}
                content={post.content}
                date={post.pubishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}
