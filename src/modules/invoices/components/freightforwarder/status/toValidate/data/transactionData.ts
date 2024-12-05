export const transactionData = [
    {
        id: "1",
        amount: 1500,
        invoiceUrl: "#",
        actions: [
            { label: "Accepter", onClick: () => console.log("Accepter") },
            { label: "Rejeter", onClick: () => console.log("Rejeter") },
        ],
        status: "toValidate",
    },
    {
        id: "2",
        amount: 2000,
        invoiceUrl: "#",
        actions: [
            { label: "Accepter", onClick: () => console.log("Accepter") },
            { label: "Rejeter", onClick: () => console.log("Rejeter") },
        ],
        status: "toValidate",
    },
];
