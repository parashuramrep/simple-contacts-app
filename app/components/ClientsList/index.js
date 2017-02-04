import React from 'react';

export default function ClientsList(props) {
  const { clients } = props;

  return (
    <div>
      {clients && clients.map((item) => (
        <div key={item}>{item}</div>
      ))}
    </div>
  );
}

ClientsList.propTypes = {
  clients: React.PropTypes.array,
};
