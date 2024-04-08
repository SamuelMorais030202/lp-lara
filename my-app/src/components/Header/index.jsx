'use client'

import style from './header.module.css';
import { useEffect } from 'react';

export default function Header() {

  useEffect(() => {
    const handleScroll = () => {
      const scrolledY = window.scrollY * 0.35;
      const header = document.querySelector(`.${style.headerContainer}`);
      if (header) {
        scrolledY <= 10
          ? header.style.backgroundPosition = 'top'
          : header.style.backgroundPosition = `left ${scrolledY}px`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  }, []);

  return (
    <header className={style.headerContainer}>
      <div className={style.container}>
        <h3 className={style.title}>
          <img src="/logo01.png" alt="logo" className={style.logo} />
          Sessão Estratégica Gratuita
        </h3>

        <h2 className={style.subTitle}>
          EM 30 MINUTOS VOU TE MOSTRAR O QUE TE IMPEDE  DE COBRAR
          ATÉ 2X MAIS EM 2024 E FATURAR MUITO MAIS QUE R$10.000
          POR MÊS COMO FISIOTERAPEUTA
        </h2>

        <p className={style.text}>
          Um caminho testado e validado para se posicionar como
          autoridade na fisioterapia, você pode fazer mais dinheiro
          trabalhando menos e ter previsibilidade no seu negócio. 
        </p>

        <p className={style.text}>
          Saiba como aplicar o método validado que me fez ter
          a agenda lotada com menos de 6 meses de formada,
          sem precisar dar retorno e cobrando mais do que as
          minhas concorrentes cobravam.
        </p>

        <p className={style.text}>
          Aperte no botão abaixo para agendar sua sessão.
        </p>

        <button className={style.button}>
          QUERO SER SELECIONADO
        </button>

        <p className={style.attention}>
          Atenção: A Sessão é gratuita, porém, possui limite de horários.
          A agenda pode ser fechada a qualquer momento – sem aviso prévio.
        </p>

      </div>
    </header>
  )
}