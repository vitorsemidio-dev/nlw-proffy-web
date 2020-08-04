import React from 'react';

import PageHeader from '../../components/PageHeader';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

const TeacherList: React.FC = () => {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis" >
        <form id="search-teachers">
          <div className="input-block">
            <label htmlFor="subject">Matéria</label>
            <input type="text" id="subject"/>
          </div>

          <div className="input-block">
            <label htmlFor="week-day">Dia da Semana</label>
            <input type="text" id="week-day"/>
          </div>

          <div className="input-block">
            <label htmlFor="time">Hora</label>
            <input type="text" id="time"/>
          </div>
        </form>
      </PageHeader>

      <main>
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
      </main>
    </div>
  )
}

export default TeacherList;