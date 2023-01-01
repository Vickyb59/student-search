import './card.styles.css';

const Card = ({ student }) => {
  const { id, name, email } = student;

  return (
    <div className='card-container'>
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Card;
