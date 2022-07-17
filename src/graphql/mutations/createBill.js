import { gql } from '@apollo/client';

export const ADD_RECORD_MUTATION = gql `

mutation CreateBill($record: RecordInput) {
    createBill(record: $record) {
      message
    }
  }

`;