import { Component, createContext } from 'react';
import { nanoid } from 'nanoid';

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
    console.log(e);
    console.log(`Signed up as: ${e.target.name.value}`);
    this.setState(
      prev =>
        console.log([
          ...prev.contacts,
          {
            id: nanoid(),
            name: e.target.name.value,
            number: e.target.number.value,
          },
        ])
      //   const contactObj = { ...prev.contacts, id=nanoid() }
      //[...prev.contacts]{ nanoid(), [e.target.name]: e.target.value }
    );
  };

  handleChange = e => {
    //console.log(e.target.value);
    //this.setState({ [e.target.name]: e.target.value });
    // this.setState({ login: e.target.value });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              required
              onChange={this.handleChange}
            />
          </label>
          <label>
            Telephone
            <input type="tel" name="number" required />
          </label>

          <button type="submit">Add contact{this.state.name}</button>
        </form>
        <ul>
          {this.state.contacts.map(elem => (
            <li>
              {elem.name} - {elem.number}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

// const INITIAL_STATE = {
//   login: '',
//   email: '',
//   password: '',
// };

// export class App extends Component {
//   state = { ...INITIAL_STATE };

//   // Для всіх інпутів створюємо один обробник
//   // Розрізняти інпути будемо за атрибутом name
//   handleChange = evt => {
//     const { name, value } = evt.target;
//     this.setState({ [name]: value });
//   };

//   handleSubmit = evt => {
//     evt.preventDefault();
//     const { login, email, password } = this.state;
//     console.log(`Login: ${login}, Email: ${email}, Password: ${password}`);
//     this.props.onSubmit({ ...this.state });
//     this.reset();
//   };

//   reset = () => {
//     this.setState({ ...INITIAL_STATE });
//   };

//   render() {
//     const { login, email, password } = this.state;

//     return (
// <form onSubmit={this.handleSubmit}>
//   <label>
//     Name
//     <input
//       type="text"
//       placeholder="Enter login"
//       name="login"
//       value={login}
//       onChange={this.handleChange}
//     />
//   </label>
//   <label>
//     Email
//     <input
//       type="email"
//       placeholder="Enter email"
//       name="email"
//       value={email}
//       onChange={this.handleChange}
//     />
//   </label>
//   <label>
//     Password
//     <input
//       type="password"
//       placeholder="Enter password"
//       name="password"
//       value={password}
//       onChange={this.handleChange}
//     />
//   </label>

//   <button type="submit">Sign up as {login}</button>
// </form>
//     );
//   }
// }
