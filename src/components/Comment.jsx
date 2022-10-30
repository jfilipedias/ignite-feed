import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/jfilipedias.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.commentInfo}>
              <strong>Filipe Dias</strong>
              <time
                title="28 de Outubro às 00:13"
                dateTime="2022-10-28T00:13:38.000Z"
              >
                Publicado há 1h
              </time>
            </div>

            <button title="Deletar comentário">
              <Trash siz={24} />
            </button>
          </header>

          <p>Muito bom, parabéns!!! </p>
        </div>

        <footer>
          <button>
            <ThumbsUp /> Curtir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
