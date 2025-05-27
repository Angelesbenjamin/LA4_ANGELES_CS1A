// Simple Queueing System using Hash Function

// Initialize a hashed table
let customerHashTable = {};

// Hash function to generate a simple hash
function hash(name) {
    return name.length % 5; // Simple hash based on name length
}

// Function to add a customer to the hashed table
function addCustomer(name) {
    const index = hash(name);
    customerHashTable[index] = name;
    console.log(Customer ${name} added to the hashed table. Index: ${index});
}

// Function to service a customer
function serviceCustomer(index) {
    if (customerHashTable[index]) {
        const servicedCustomer = customerHashTable[index];
        console.log(Servicing customer: ${servicedCustomer});
        delete customerHashTable[index]; // Remove serviced customer
        console.log(Updated Hash Table: ${JSON.stringify(customerHashTable)});
    } else {
        console.log("Invalid customer index.");
    }
}

// Example usage
addCustomer("Elaine");
addCustomer("Althea");
addCustomer("Angelo");
addCustomer("Lito");
addCustomer("Engelbert");

// Simulate servicing customers
serviceCustomer(0); // Servicing customer at index 0
serviceCustomer(1); // Servicing customer at index 1

