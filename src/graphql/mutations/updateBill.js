import { gql } from '@apollo/client';


export const UPDATE_BILL_MUTATION = gql `

mutation CreateBill($updateRecordId: ID, $record: RecordInput) {
    updateRecord(id: $updateRecordId, record: $record) {
      message
    }
  }

`;