import React from 'react';
import './BookCard.css';

const imgDefault = 'https://www2.camara.leg.br/atividade-legislativa/comissoes/comissoes-permanentes/cindra/imagens/sem.jpg.gif/image'

function BookCard({ book: {
  volumeInfo: { title, imageLinks: { thumbnail = imgDefault } = {} } } }) {
  return (
    <div className="book-card">
      <span>{ title }</span>
      <img src={ thumbnail } alt="" />
    </div>
  );
}

export default BookCard;
