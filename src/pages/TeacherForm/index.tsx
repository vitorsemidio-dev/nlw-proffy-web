import React from 'react';
import PageHeader from '../../components/PageHeader';

import './styles.css';

const TeacherForm: React.FC = () => {
  return (
    <div id="page-teacher-form" className="container">
      <PageHeader title="Que incrível que você quer dar aulas">
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
    </div>
  )
}

export default TeacherForm;