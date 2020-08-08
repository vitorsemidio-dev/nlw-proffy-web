import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

interface Props {
  teacher: {
    avatar: string;
    bio: string;
    cost: number;
    id: number;
    name: string;
    subject: string;
    user_id: number;
    whatsapp: string;
  }
}

const TeacherItem: React.FC<Props> = ({
  teacher
}) => {
  return (
    <article className="teacher-item">
      <header>
        <img src={teacher.avatar} alt={teacher.name}/>
        <div>
          <strong>{teacher.name}</strong>
          <span>{teacher.subject}</span>
        </div>
      </header>
      <p>
        {teacher.bio}
      </p>

      <footer>
        <p>
          Preço/hora <strong>R${teacher.cost}</strong>
        </p>
        <a
          href={`https://wa.me/${teacher.whatsapp}`} 
          target="_blank"
          rel="noopener noreferrer"
          >
          <img src={whatsappIcon} alt="WhatsApp"/>
          Entrar em contato
        </a>
      </footer>
    </article>
  )
}

export default TeacherItem;