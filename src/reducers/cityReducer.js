import { CHANGE_CITY } from '../actions/types';

const initialState = {
    city: "BANGALORE",
    raw: [],
    columns: [
        {
          title: 'IFSC',
          dataIndex: 'ifsc',
          key: 'ifsc',
        },
        {
          title: 'Bank ID',
          dataIndex: 'bank_id',
          key: 'bank_id',
        },
        {
          title: 'Branch',
          dataIndex: 'branch',
          key: 'branch',
        },
        {
          title: 'Address',
          dataIndex: 'address',
          key: 'address',
        },
        {
          title: 'City',
          dataIndex: 'city',
          key: 'city',
        },
        {
          title: 'District',
          dataIndex: 'district',
          key: 'district',
        },
        {
          title: 'State',
          dataIndex: 'state',
          key: 'state',
        },
        {
          title: 'Bank Name',
          dataIndex: 'bank_name',
          key: 'bank_name',
        },
      ]
}

export default function(state = initialState, action) {
    switch(action.type) {
        case CHANGE_CITY:
            return {
                ...state,
                raw: action.payload,
            }
        default:
            return state;
    }
}