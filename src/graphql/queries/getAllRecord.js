import { gql } from '@apollo/client';

export const ALL_BILL_RECORD = gql `

query GetAllRecords {
    getAllRecords {
      address
      id
      meterNo
      month
      units
      username
    }
  }

`;