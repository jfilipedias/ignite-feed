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

        <time
          title="28 de Outubro às 00:13"
          dateTime="2022-10-28T00:13:38.000Z"
        >
          Publicado há 1h
        </time>

        <div className={styles.content}>
          <p>Fala galeraa 👋</p>

          <p>
            Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
            no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare
            🚀
          </p>

          <p>
            👉<a href="">jane.design/doctorcare</a>
          </p>

          <p>
            <a href="">#novoprojeto #nlw #rocketseat</a>
          </p>
        </div>
      </header>
    </article>
  )
}
