import style from './call.module.css';

export default function Call() {
  return (
    <section className={style.callCard}>
      <h2 className={style.callTitle}>
        Pra quem é a Sessão Estratégica
      </h2>

      <div className={style.cards}>

        <div className={style.card}>
          <img src="/icon-verify.png" alt="icon" />
          <p className={style.callText}>
            Você que não sabe colocar valor nos seus atendimentos 
          </p>
        </div>

        <div className={style.card}>
          <img src="/icon-verify.png" alt="icon" />
          <p className={style.callText}>
            Você que tem uma carga horária de trabalho exaustiva 
          </p>
        </div>

        <div className={style.card}>
          <img src="/icon-verify.png" alt="icon" />
          <p className={style.callText}>
            Você que dar desconto para seus pacientes porque tem
            pena deles ficar sem tratamento
          </p>
        </div>

        <div className={style.card}>
          <img src="/icon-verify.png" alt="icon" />
          <p className={style.callText}>
            Você que trabalha demais e no final não tem tempo para
            fazer a gestão administrativa e hoje está tudo um “CAOS”
          </p>
        </div>

        <div className={style.card}>
          <img src="/icon-verify.png" alt="icon" />
          <p className={style.callText}>
            Você que ama o que faz mas está cansada e não sabe como se organizar 
          </p>
        </div>
      </div>

    </section>
  )
}