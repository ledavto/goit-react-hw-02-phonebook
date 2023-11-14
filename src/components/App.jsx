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
  };

  addContacts = newCont => {
    // if (newCont.name ===) alert()
    //includes(value);

    const contObj = { id: nanoid(), ...newCont };

    this.setState(prev => {
      //Массив имен из объекта
      const arrName = [];
      for (const contacts of prev.contacts) {
        arrName.push(contacts.name);
      }

      //Проверка на наличие уже такого имени
      if (arrName.includes(newCont.name)) {
        alert(`${newCont.name} is already in contacts`);
        return;
      }

      return {
        contacts: [...prev.contacts, contObj],
      };
    });
  };

  filterContacts = e => {
    //console.log(e);
    this.setState({ filter: e });
  };

  deleteCont = id => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(el => el.id !== id),
    }));
  };

  render() {
    return (
      <div className="container">
        <h1>Phonebook</h1>
        <ContactForm addCont={this.addContacts} />
        <h2>Contacts</h2>
        <Filter filterStr={this.filterContacts} />
        <ContactList
          listCont={this.state.contacts}
          filter={this.state.filter}
          deleteCont={this.deleteCont}
        />
      </div>
    );
  }
}
