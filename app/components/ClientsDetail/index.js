import React from 'react';
import Box from './elements/Box';
import Avatar from './elements/Avatar';
import Address from './elements/Address';
import Occupation from './elements/Occupation';
import Content from './elements/Content';
import Contact from './elements/Contact';

export default function ClientsDetail({ client }) {
  const person = client.get('general');
  const job = client.get('job');
  const contact = client.get('contact');
  const address = client.get('address');
  const fullName = `${person.get('firstName')} ${person.get('lastName')}`;

  return (
    <Box>
      <Avatar src={person.get('avatar')} alt={fullName} />
      <Content>
        <h1>{fullName}</h1>
        <Occupation>{job.get('title')} at {job.get('company')}</Occupation>
        <div>
          <Contact href={`mailto:${contact.get('email')}`}>
            <span className="fa fa-envelope" />
            {contact.get('email')}
          </Contact>
          <Contact href={`tel:${contact.get('phone')}`}>
            <span className="fa fa-phone" />
            {contact.get('phone')}
          </Contact>
        </div>

        <Address>
          <h3>Address</h3>
          <address>
            {address.get('street')}<br />
            {address.get('zipCode')}, {address.get('city')}<br />
            {address.get('country')}
          </address>
        </Address>
      </Content>
    </Box>
  );
}

ClientsDetail.propTypes = {
  client: React.PropTypes.object,
};
