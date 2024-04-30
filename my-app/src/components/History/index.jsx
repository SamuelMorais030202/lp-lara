'use client';

import { useRouter } from 'next/navigation';
import style from './history.module.css';

export default function History() {
  const router = useRouter();

  return (
    <section className={style.cardHistory}>
      <div className={style.divHistory}>
        <h1 className={style.titleHistory}>
          O QUE VOCÊ VAI RECEBER 
        </h1>

        <p className={style.text}>
          Em uma consultoria gratuita de 30 minutos, vou analisar o que te impede
          de faturar R$10.000,00 ou mais  como fisioterapeuta, identificar os erros,
          melhorias e oportunidades de crescimento
        </p>

        {/* <p className={style.topic}>
          1º Diagnóstico do seu estado atual
        </p>

        <p className={style.text}>
          Vou analisar o seu posicionamento, o seu processo de vendas,
          a sua consulta e como funciona a gestão da sua empresa hoje
          para entender o seu cenário atual.
        </p>

        <p className={style.topic}>
          2º Plano Estratégico de Crescimento Personalizado para você
        </p> */}

        <p className={style.text}>
          Com clareza do seu momento atual, vamos montar o seu plano de ação, te mostrando
          o caminho para cobrar o valor justo, escalar o seu faturamento e levar o seu
          negócio para o próximo nível.
        </p>

        <button className={style.buttonHistory} onClick={() => router.push('/forms')}>
          QUERO ME TORNAR UMA FISIO VALORIZADA
        </button>
      </div>
    </section>
  )
}