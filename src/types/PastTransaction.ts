export interface PastTransaction {
    id: number;
    carrierName: string;
    taxID: string;
    invoiceDate: string;
    address: string;
    country: string;
    raw: number;
    net: number;
    reasonCode: number;
}