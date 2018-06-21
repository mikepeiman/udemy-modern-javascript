document.getElementById('button-customer').addEventListener('click', loadCustomer)
document.getElementById('button-customers').addEventListener('click', loadCustomers)

const UIcustomer = document.getElementById('customer')
const UIcustomers = document.getElementById('customers')

function loadCustomer(e) {
  const xhr = new XMLHttpRequest()
  xhr.open('GET','customer.json', true)

  xhr.onload = function() {
    if(this.status === 200) {
      console.log(this.responseText)
      const customerData = JSON.parse(this.responseText)
      UIcustomer.innerHTML = `
        <h3>Name: ${customerData.name}</h3>
        <ul>
          <li>Age: ${customerData.age}</li>
          <li>Work: ${customerData.company}</li>
          <li>Phone: ${customerData.phone}</li>
        </ul>`
    }
  }

  xhr.send()
}

function loadCustomers(e) {
  const xhr = new XMLHttpRequest()
  xhr.open('GET','customers.json', true)

  xhr.onload = function() {
    if(this.status === 200) {
      console.log(this.responseText)
      const customersData = JSON.parse(this.responseText)
      customersData.forEach(function(customer) {
        UIcustomers.innerHTML += `
        <h3>Name: ${customer.name}</h3>
        <ul>
          <li>Age: ${customer.age}</li>
          <li>Work: ${customer.company}</li>
          <li>Phone: ${customer.phone}</li>
        </ul>`
      })

    }
  }

  xhr.send()
}