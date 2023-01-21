import PropTypes from 'prop-types';
import { Item, Button } from './ContactList.styled';

export const ContactList = ({ listContacts, onDelete }) => (
  <ul>
    {listContacts.map(({ id, name, number }) => (
      <Item key={id}>
        {name}: {number}
        <Button onClick={() => onDelete(id)}>Видалити</Button>
      </Item>
    ))}
  </ul>
);

ContactList.propTypes = {
  listContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDelete: PropTypes.func.isRequired,
};

export default ContactList;
