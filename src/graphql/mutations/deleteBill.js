import { gql } from '@apollo/client';


export const DELETE_BILL_MUTATION = gql `

mutation DeleteRecord($deleteRecordId: ID) {
    deleteRecord(id: $deleteRecordId) {
      message
    }
  }

`;