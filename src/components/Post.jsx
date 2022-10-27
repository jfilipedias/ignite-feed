import styles from './Post.module.css'

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/jfilipedias.png"
          />

          <div className={styles.authorInfo}>
            <strong>Filipe Dias</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time dateTime="">Publicado há 1h</time>
      </header>
    </article>
  )
}
