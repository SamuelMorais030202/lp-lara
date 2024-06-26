'use client'

import style from './header.module.css';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Header() {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const router = useRouter();

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

    const updateWindowSize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener('resize', updateWindowSize);

    updateWindowSize();

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateWindowSize);
    };

  }, []);

  const navigate = () => {
    router.push('/forms');
  }

  if (Number(windowSize.width) > 700) {
    return (
      <header className={style.headerDescktop}>
        <div className={style.descktopImage}>

        </div>

        <div className={style.descktopContainer}>
          <div className={style.container}>
            <h3 className={style.descktopTitle}>
              <img src="/logo01.png" alt="logo" className={style.logo} />
              Sessão Estratégica Gratuita
            </h3>

            <h2 className={style.descktopSubTitle}>
              EM 30 MINUTOS VOU IDENTIFICAR O QUE TE IMPEDE  DE COBRAR ATÉ 2X MAIS
              EM 2024 E FATURAR MUITO MAIS QUE R$10.000 POR MÊS COMO FISIOTERAPEUTa
            </h2>

            <p className={style.descktopText}>
              <span>Aperte no botão abaixo</span> para agendar sua sessão.
            </p>

            <button className={style.button} onClick={() => navigate()}>
              QUERO SER SELECIONADO
            </button>

            <p className={style.attention}>
              Atenção: A Sessão é gratuita, porém, possui limite de horários.
              A agenda pode ser fechada a qualquer momento – sem aviso prévio.
            </p>
          </div>
        </div>
      </header>
    )
  }

  return (
    <header className={style.headerContainer}>
      <div className={style.container}>
        <h3 className={style.title}>
          <img src="/logo01.png" alt="logo" className={style.logo} />
          Sessão Estratégica Gratuita
        </h3>

        <h2 className={style.subTitle}>
          EM 30 MINUTOS VOU IDENTIFICAR O QUE TE IMPEDE  DE COBRAR ATÉ 2X MAIS
          EM 2024 E FATURAR MUITO MAIS QUE R$10.000 POR MÊS COMO FISIOTERAPEUTA
        </h2>

        <p className={style.text}>
          Aperte no botão abaixo para agendar sua sessão.
        </p>

        <button className={style.button} onClick={() => navigate()}>
          QUERO SER SELECIONADO
        </button>

        <p className={style.attention}>
          Atenção: A Sessão é gratuita, porém, possui limite de horários.
          A agenda pode ser fechada a qualquer momento – sem aviso prévio.
        </p>

      </div>

      <div className={style.headerContainerImage}></div>
    </header>
  )
}