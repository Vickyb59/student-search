import Card from '../card/card.component';
import './card-list.styles.css';

const CardList = ({ students }) => (
  <div className='card-list'>
    {students.map((student) => {
      return <Card key={student.id} student={student} />;
    })}
  </div>
);

export default CardList;
