import { UPDATE_CURR_INVOICE } from "../constants/actionTypes"; 

const initialState = {
    title: "", 
    logo: "", 
    sender: {
        name: "", 
        company: "", 
        email: "", 
        taxRegNo: "", 
        address: "", 
        phone: "", 
        country: "", 
        others: "", 
    }, 
    recipient: {
        name: "", 
        company: "", 
        email: "", 
        taxRegNo: "", 
        address: "", 
        phone: "", 
        country: "", 
        others: "", 
    }, 
    details: {
        invoiceNo: "", 
        invoiceDate: "", 
        invoiceDueDate: "", 
    }, 
    billItems: [], 
    summary: {
        subtotal: "", 
        tax: "", 
        discount: "", 
        vat: "", 
        total: "", 
    },  
		currency: "", 
    additional: "", 
}; 

const invoiceReducer = (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_CURR_INVOICE: 
            state[action.payload.field] = action.payload.value; 
            return state; 

        default: 
            return state; 
    }
}

export default invoiceReducer; 
