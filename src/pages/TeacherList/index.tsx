import React from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';

import './styles.css';

const TeacherList: React.FC = () => {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis" >
        <form id="search-teachers">
          <Select 
            name="subject"
            label="Matéria"
            optionTextDefault="Selecione uma matéria"
            options={[
              { value: 'Artes', label: 'Artes'},
              { value: 'Biologia', label: 'Biologia'},
              { value: 'Educação Física', label: 'Educação Física'},
              { value: 'Filosofia', label: 'Filosofia'},
              { value: 'Física', label: 'Física'},
              { value: 'Informática', label: 'Informática'},
              { value: 'História', label: 'História'},
              { value: 'Matemática', label: 'Matemática'},
              { value: 'Português', label: 'Português'},
              { value: 'Química', label: 'Química'},
              { value: 'Sociologia', label: 'Sociologia'},
            ]}
          />

          <Select
            name="week-day"
            label="Dia da semana"
            optionTextDefault="Selecione um dia"
            options={[
              { value: '0', label: 'Domingo' },
              { value: '1', label: 'Segunda-feira' },
              { value: '2', label: 'Terça-feira' },
              { value: '3', label: 'Quarta-feira' },
              { value: '4', label: 'Quinta-feira' },
              { value: '5', label: 'Sexta-feira' },
              { value: '6', label: 'Sábado' },
            ]}
          />

          <Input type="time" label="Hora" name="time"/>

        </form>
      </PageHeader>

      <main>
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </main>
    </div>
  )
}

export default TeacherList;