'use client'

import { useState, useEffect } from "react"
import style from './benefits.module.css';

export default function Benefits() {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateWindowSize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener('resize', updateWindowSize);

    updateWindowSize();

    return () => window.removeEventListener('resize', updateWindowSize);
  }, []);

  if (Number(windowSize.width) < 900) {
    return (
      <section className={style.beneficieCardMobile}>
        <h1 className={style.beneficieCardMobileTitle}>Prazer, Lara Oliveira</h1>

        <section className={style.sectionTexts}>
          <p className={style.textMobile}>
            Sou Fisioterapeuta há 9 anos, Mentora das Fisios de Negócios
            e criadora da Mentoria Cactus. Ao longo de 8 anos, estive dedicada
            à fisioterapia em minha clínica em São Paulo, transformando vidas
            e construindo um negócio sólido.
          </p>

          <p className={style.textMobile}>
            Há 4 anos, mergulhei no mundo digital, explorando novas fronteiras
            para a fisioterapia no digital. E agora, através dos meus cursos e
            mentorias, irei te passar todos os direcionamentos e estratégias
            necessárias para escalar seu negócio — e, assim, tornar-se uma
            Fisioterapeuta Empresária, sendo a protagonista do seu negócio. 
          </p>

          <p className={style.textMobile}>
            Como mentora, minha missão é  te guiar na construção de um 
            negócio sólido e ser valorizada.
          </p>

          <div className={style.informations}>
            <p className={style.textMobile}><span className={style.spanText}>Aperte no botão abaixo</span> para agendar sua sessão.</p>

            <button className={style.buttonMobile}>
              QUERO SER SELECIONADO
            </button>

            <p className={style.textAlert}>
              Atenção: A Sessão é gratuita, porém, possui limite de horários.
              A agenda pode ser fechada a qualquer momento – sem aviso prévio.
            </p>
          </div>

        </section>
      </section>
    )
  }

  return (
    <section>
      <h1>Prazer, Lara Oliveira</h1>

      <div>
          <p>
            Sou Fisioterapeuta há 9 anos, Mentora das Fisios de Negócios
            e criadora da Mentoria Cactus. Ao longo de 8 anos, estive dedicada
            à fisioterapia em minha clínica em São Paulo, transformando vidas
            e construindo um negócio sólido.
          </p>
      </div>

      <div>
          <p>
            Há 4 anos, mergulhei no mundo digital, explorando novas fronteiras
            para a fisioterapia no digital. E agora, através dos meus cursos e
            mentorias, irei te passar todos os direcionamentos e estratégias
            necessárias para escalar seu negócio — e, assim, tornar-se uma
            Fisioterapeuta Empresária, sendo a protagonista do seu negócio. 
          </p>
      </div>

      <p>
        Como mentora, minha missão é  te guiar na construção de um 
        negócio sólido e ser valorizada.
      </p>


      <div>
        <p><span>Aperte no botão abaixo</span> para agendar sua sessão.</p>

        <button>
          QUERO SER SELECIONADO
        </button>

        <p>
          Atenção: A Sessão é gratuita, porém, possui limite de horários.
          A agenda pode ser fechada a qualquer momento – sem aviso prévio.
        </p>
      </div>
    </section>
  )
}