var arrCust=[];


export function addCustomer(id, name, address, mobile) {
  let newCust = { id: id,
     name: name, 
     address: address, 
     mobile: mobile 
    };
    arrCust.push(newCust);
}

export function searchCustomer(id){
var e =arrCust.find(e=>e.id === id);
return e;
}

export function deleteCustomer(id){
let index = arrCust.findIndex(e=>e.id === id);
arrCust.splice(index, 1);
}

export function modifyCustomer(id,name,address,mobile){
    var e =arrCust.find(e=>e.id === id);
    if(e){
        e.name = name;
        e.address = address;
        e.mobile = mobile;
    }
    }

export function getCustomerList() {
    return [...arrCust];
}
