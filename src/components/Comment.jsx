import { ThumbsUp, Trash } from 'phosphor-react'
import styles from '../components/Comment.modules.css'

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/marcosousadev.png" alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Marco Sousa</strong>

              <time
                title="18 de dezembro às 08:13h"
                dateTime='datetime="2024-05-12 08:13:30'
              >
                Cerca de 1h atrás
              </time>
            </div>

            <button title="Deletar comentário">
              <Trash size={20} />
            </button>
          </header>
          <p>Muito bom Devon, parabéns</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
