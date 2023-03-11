import { useState, useEffect } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

const App = () => {
  const [searchField, setSearchField] = useState('');
  const [students, setStudents] = useState([]);
  const [FilteredStudents, setFilterStudents] = useState(students);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setStudents(users));
  }, []);

  useEffect(() => {
    const newFilteredStudents = students.filter((student) => {
      return student.name.toLocaleLowerCase().includes(searchField);
    });

    setFilterStudents(newFilteredStudents);
  }, [students, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className='App'>
      <h1 className='app-title'>Student Name Search</h1>

      <SearchBox
        className='students-search-box'
        onChangeHandler={onSearchChange}
        placeholder='search student'
      />
      <CardList students={FilteredStudents} />
    </div>
  );
};

export default App;