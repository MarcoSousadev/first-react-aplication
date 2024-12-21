import styles from '../components/Post.module.css'
import { Comment } from './Comment'
//import { Comment } from './Comment'

export function Post() {
  return (
    <article className={styles.Post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/marcosousadev.png"
          />
          <div className={styles.authorInfo}>
            <strong>Marco Sousa</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time
          title="18 de dezembro às 08:13h"
          dateTime='datetime="2024-05-12 08:13:30'
        >
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋 </p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projetoé DoctorCare 🚀
        </p>
        <p>
          <a href=""> jane.design/doctorcare</a>
        </p>
        <p>
          <a href="">#novoprojeto</a> <a href=""> #nlw </a>{' '}
          <a href=""> #rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="Deixe um comentário" />

        <footer>
          <button type="submit">Comentar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        <Comment />
      </div>
    </article>
  )
}
