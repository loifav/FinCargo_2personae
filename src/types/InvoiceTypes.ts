export type Invoice = {
    id: number;
    invoice_amount: number;
    invoice_attached?: boolean;
    carrier_name: string;
    tax_id: string;
    invoice_date: string;
    address?: string;
    country?: string;
    document_download_link?: string;
    status: string;
  };