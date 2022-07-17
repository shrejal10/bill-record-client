import moment from 'moment';

export const USER_PROFILE_COLUMNS = [
    {
      Header: 'Meter No.',
      accessor: 'meterNo.',
    },
    {
      Header: 'Username',
      accessor: 'username',
     
    },
    {
      Header: 'Units',
      accessor: 'units',
     
    },  
    {
      Header: 'Month',
      accessor: 'month',
      Cell: ({ value }) => {
        return moment(value).month();
      },
  },
];
