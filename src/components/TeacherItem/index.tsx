import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars2.githubusercontent.com/u/52754546?s=460&u=beb81a6de4cfbea7677783e3ab2527e30582478d&v=4" alt="Emidio"/>
        <div>
          <strong>Vitor Emidio</strong>
          <span>Matemática</span>
        </div>
      </header>
      <p>
        Amante por números e adora ensinar o que há de melhor com conhecimentos em geometria e trigonometria
      </p>

      <footer>
        <p>
          Preço/hora <strong>R$100,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="WhatsApp"/>
          Entrar em contato
        </button>
      </footer>
    </article>
  )
}

export default TeacherItem;