import { useState } from 'react'
import { ThumbsUp, Trash } from 'phosphor-react'

import { Avatar } from './Avatar'
import styles from './Comment.module.css'

export function Comment({ content, onDeleteComment }) {
  const [likesCount, setLikesCount] = useState(0)

  function handleLikesCount() {
    setLikesCount((state) => state + 1)
  }

  function handleDeleteComment() {
    onDeleteComment(content)
  }

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

            <button title="Deletar comentário" onClick={handleDeleteComment}>
              <Trash siz={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikesCount}>
            <ThumbsUp /> Curtir <span>{likesCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
