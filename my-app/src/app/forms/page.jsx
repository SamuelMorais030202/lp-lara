'use client';

import { useRouter } from "next/navigation";
import { useState } from "react";
import { TextField } from "@mui/material";
import style from '../../styles/forms-page.module.css';

export default function Forms() {
  const [data, setData] = useState({
    name: '',
    email: '',
    whatsApp: '',
  });

  const router = useRouter;

  const handleChange = ({ target }) => {
    const { name, value } = target;

    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  const handleClick = () => {
    console.log(data);
  }

  return (
    <section className={style.formsPage}>
      <div className={style.imageFormsPage}>

      </div>

      <div className={style.textFormPage}>
        <div className={style.conternerFormsPage}>
          <h1 className={style.titleFormsPage}>
            <img src="/e5c32e96_1.png" alt="logo" className={style.logoFormsPage} />
            MENTÓRIA CACTUS
          </h1>
          <p className={style.paragraphFormsPage}>
            EM 30 MINUTOS VOU TE MOSTRAR O QUE TE IMPEDE  DE COBRAR
            ATÉ 2X MAIS EM 2024 E FATURAR MUITO MAIS QUE R$10.000
            POR MÊS COMO FISIOTERAPEUTA
          </p>

          <form className={style.formsFormPage}>
            <TextField
              id="name"
              variant="outlined"
              label="Digite seu Nome"
              name="name"
              value={data.name}
              onChange={(e) => handleChange(e)}
              required
              className={style.inputForms}
            />
            <TextField
              id="email"
              variant="outlined"
              label="E-mail"
              name="email"
              value={data.email}
              onChange={(e) => handleChange(e)}
              required
              className={style.inputForms}
            />
            <TextField
              id="whatsApp"
              variant="outlined"
              label="Seu
              WhatsApp"
              name="whatsApp"
              value={data.whatsApp}
              onChange={(e) => handleChange(e)}
              required
              className={style.inputForms}
            />
            <button type="button" onClick={() => handleClick()}>GARANTA SEU LUGAR AGORA!</button>
          </form> 
        </div>
      </div>
    </section>
  )
}