const positions = [
  {
    symbol: 'AAPL',
    product: 'Equity',
    quantity: 120,
    price: 182.34,
    marketValue: 21880.8,
    pnl: 1540.2,
  },
  {
    symbol: 'TSLA',
    product: 'Equity',
    quantity: 45,
    price: 245.76,
    marketValue: 11059.2,
    pnl: -320.5,
  },
  {
    symbol: 'BTC-USD',
    product: 'Crypto',
    quantity: 1.2,
    price: 29450.5,
    marketValue: 35340.6,
    pnl: 4210.3,
  },
  {
    symbol: 'ESU23',
    product: 'Futures',
    quantity: 3,
    price: 4538.5,
    marketValue: 13615.5,
    pnl: 275.0,
  },
];

export const getLivePositionRowData = () => positions;

export const getLivePositionColumnDefs = () => [
  { headerName: 'Symbol', field: 'symbol', sortable: true, filter: true, flex: 1 },
  { headerName: 'Product', field: 'product', sortable: true, filter: true, flex: 1 },
  { headerName: 'Quantity', field: 'quantity', sortable: true, filter: 'agNumberColumnFilter', flex: 1 },
  {
    headerName: 'Price',
    field: 'price',
    sortable: true,
    filter: 'agNumberColumnFilter',
    flex: 1,
    valueFormatter: ({ value }) => `$${value.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
  },
  {
    headerName: 'Market Value',
    field: 'marketValue',
    sortable: true,
    filter: 'agNumberColumnFilter',
    flex: 1,
    valueFormatter: ({ value }) => `$${value.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
  },
  {
    headerName: 'P&L',
    field: 'pnl',
    sortable: true,
    filter: 'agNumberColumnFilter',
    flex: 1,
    cellClass: params => (params.value >= 0 ? 'text-success' : 'text-danger'),
    valueFormatter: ({ value }) => `${value >= 0 ? '+' : '-'}$${Math.abs(value).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
  },
];
