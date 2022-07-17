import { gql } from '@apollo/client';

export const SINGLE_BILL_RECORD = gql `

query GetSingleBill($getSingleBillId: ID) {
    getSingleBill(id: $getSingleBillId) {
      address
      id
      meterNo
      month
      units
      username
    }
  }

`;