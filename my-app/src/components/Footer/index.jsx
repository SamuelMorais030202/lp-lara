import style from './footer.module.css';

export default function Footer() {
  return (
    <footer className={style.footerCard}>

      <div className={style.footerContainerText}>
        <p className={style.footerText}>
          Este site NÃO é do Facebook: Este site não faz parte do site do Facebook ou do
          Facebook Inc. Além disso, este site NÃO é endossado pelo Facebook de nenhuma maneira.
          FACEBOOK é uma marca comercial independente da FACEBOOK, Inc.
          Nós NÃO compartilharemos seu endereço de e-mail com ninguém. Você pode cancelar sua
          inscrição a qualquer momento. Ao se cadastrar você está aceitando receber comunicações
          informativas e promocionais.
        </p>

        <div className={style.footerAlert}>
          
          <p>Política de Privacidade  |  Termos de Uso</p>

          <p>Copyright © Clínica Lara Oliveira  2024 - Todos direitos reservados.</p>

        </div>
      </div>
    </footer>
  )
}