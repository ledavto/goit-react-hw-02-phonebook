import { Component } from 'react';

export class ContactForm extends Component {
  render() {
    return (
      <form onSubmit={() => this.props.onleaveSubmit()}>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Name
          </label>
          <input
            type="text"
            name="name"
            required
            className="form-control"
            id="exampleFormControlInput1"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Telephone
          </label>
          <input
            type="tel"
            name="number"
            required
            className="form-control"
            id="exampleFormControlInput2"
          />
        </div>

        <button className="btn btn-primary" type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

//   <section className="statistics">
//     {title && <h2 className="title">{title}</h2>}

//     <ul className="stat-list">
//       {stats.map(stat => (
//         <li id={stat.id} className="item">
//           <span className="label">{stat.label}</span>
//           <span className="percentage">{stat.percentage}</span>
//         </li>
//       ))}
//     </ul>
//   </section>
