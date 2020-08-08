import React, { useState } from 'react';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

import warningIcon from '../../assets/images/icons/warning.svg';

import './styles.css';

interface Schedule {
  week_day: number,
  from: string,
  to: string,
}

const TeacherForm: React.FC = () => {
  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [bio, setBio] = useState('');

  const [scheduleItems, setScheduleItems] = useState<Schedule[]>([]);

  function handleAddScheduleItem() {
    setScheduleItems([
      ...scheduleItems, {
      week_day: 0,
      from: '',
      to: '',
    }]);
  }
  return (
    <div id="page-teacher-form" className="container">
      <PageHeader 
        title="Que incrível que você quer dar aulas"
        description="O primeiro passo é preencher este formulário de inscrição"
      />
      <main>
        <fieldset>
          <legend>Seus dados</legend>

          <Input 
            name="name"
            label="Nome completo"
            value={name}
            onChange={(e) => { setName(e.target.value) }}
          />

          <Input 
            name="avatar"
            label="Avatar"
            value={avatar}
            onChange={(e) => { setAvatar(e.target.value) }}
          />
          
          <Input 
            name="whatsapp"
            label="WhastApp"
            value={whatsapp}
            onChange={(e) => { setWhatsapp(e.target.value) }}
          />

          <Textarea 
            label="Biografia"
            name="bio"
            value={bio}
            onChange={(e) => { setBio(e.target.value) }}
          />
          
        </fieldset>

        <fieldset>
          <legend>Sobre a aula</legend>

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

          <Input name="cost" label="Custo da sua hora por aula" />
          
        </fieldset>

        <fieldset>
          <legend>
            Horários disponíveis
            <button type="button" onClick={handleAddScheduleItem}>
              + Novo horário
            </button>
          </legend>

          {scheduleItems.map(scheduleItem => (
            <div key={String(scheduleItem.week_day)} className="schedule-item">
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

              <Input name="from" label="Das" type="time" />
              
              <Input name="to" label="Até" type="time" />
            </div>
          ))}
        </fieldset>

        <footer>
          <p>
            <img src={warningIcon} alt="Aviso importante"/>
            Importante! <br />
            Preencha todos os dados
          </p>

          <button type="button">
            Salvar cadastro
          </button>
        </footer>
      </main>
    </div>
  )
}

export default TeacherForm;