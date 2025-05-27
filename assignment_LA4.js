// Simple Queueing System for Customer Service

// Initialize an empty queue
let customerQueue = [];

// Function to add a customer to the queue
function addCustomer(name) {
    customerQueue.push(name);
    console.log(Customer ${name} added to the queue. Number: ${customerQueue.length});
}

// Function to service a customer
function serviceCustomer(number) {
    if (number > 0 && number <= customerQueue.length) {
        const servicedCustomer = customerQueue[number - 1];
        console.log(Servicing customer: ${servicedCustomer});
        customerQueue.splice(number - 1, 1); // Remove serviced customer
        console.log(Updated Queue: ${customerQueue});
    } else {
        console.log("Invalid customer number.");
    }
}

// Example usage
addCustomer("Elaine");
addCustomer("Althea");
addCustomer("Angelo");
addCustomer("Lito");
addCustomer("Engelbert");

// Simulate servicing customers
serviceCustomer(1); // Servicing Elaine
serviceCustomer(2); // Servicing Althea
