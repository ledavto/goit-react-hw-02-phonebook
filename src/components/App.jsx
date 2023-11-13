import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm';
import { Filter } from './Filter';
import { ContactList } from './ContactList';

//rafce

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  handleSubmit = e => {
    e.preventDefault();

    this.setState(prev => {
      const oldState = [...prev.contacts];
      oldState.push({
        id: nanoid(),
        name: e.target.name.value,
        number: e.target.number.value,
      });
      return {
        contacts: oldState,
      };
    });
  };

  handleFilter = e => {
    const filterText = e.target.value;
    this.setState({ filter: filterText });
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onleaveSubmit={this.handleSubmit} />
        {/* <h2>Contacts</h2>
        <Filter />
        <ContactList /> */}

        <ul>
          <h3>Contacts</h3>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Find contact by name
              <input
                type="text"
                name="filter"
                className="form-control"
                id="exampleFormControlInput3"
                onChange={this.handleFilter}
              />
            </label>
          </div>
          {this.state.contacts
            .filter(item =>
              item.name.toLowerCase().includes(this.state.filter.toLowerCase())
            )
            .map(elem => (
              <li key={elem.id}>
                {elem.name} - {elem.number}
              </li>
            ))}
        </ul>
      </div>
    );
  }
}
