import React, { useState } from 'react';

// export class Categories extends Component {
//   state = {
//     activeItem: 3,
//   };

//   onSelectItem = (key) => {
//     this.setState({
//       activeItem: key,
//     });
//   };

//   render() {
//     const { items, onClickItem } = this.props;
//     return (
//       <div className="categories">
//         <ul>
//           <li>Все</li>
//           {items.map((item, key) => (
//             <li
//               className={this.state.activeItem === key ? 'active' : ''}
//               onClick={() => this.onSelectItem(key)}
//               key={`${item}_${key}`}>
//               {item}
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }

// export default Categories;

const Categories = ({ items, onClickItem }) => {
  const [activeItem, setActiveItem] = useState(null);

  const onSelectItem = (index) => {
    setActiveItem(index);
  };

  return (
    <div className="categories">
      <ul>
        <li className={activeItem === null ? 'active' : ''} onClick={() => onSelectItem(null)}>
          Все
        </li>
        {items &&
          items.map((name, index) => (
            <li
              className={activeItem === index ? 'active' : ''}
              onClick={() => onSelectItem(index)}
              key={`${name}_${index}`}>
              {name}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Categories;
