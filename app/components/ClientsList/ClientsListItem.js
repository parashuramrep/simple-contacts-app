import React from 'react';
import Item from './elements/Item';
import Avatar from './elements/Avatar';
import Contact from './elements/Contact';
import Title from './elements/Title';

export default function ClientsListItem({ active, item, onClick }) {
  const person = item.get('general');
  const address = item.get('address');
  const name = `${person.get('firstName')} ${person.get('lastName')}`;

  return (
    <Item onClick={onClick} active={active}>
      <Avatar
        src={person.get('avatar')}
        alt={`avatar of ${name}`}
      />
      <Title>
        <strong>{name}</strong>
        <Contact>
          {address.get('city')}, {address.get('country')}
        </Contact>
      </Title>
    </Item>
  );
}

ClientsListItem.propTypes = {
  active: React.PropTypes.bool,
  item: React.PropTypes.object,
};
