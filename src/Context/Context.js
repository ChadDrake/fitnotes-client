import React from 'react';

const Context = React.createContext({
  data: {
    labels: [],
    datasets: [
      {
        label: '',
        data: [],
      },
    ],
  },
});

export default Context;
