// routes.tsx
import { lazy, Suspense } from "react";
import { ProtectedLayout } from "@components/ProtectedLayout";
import LoadingSpinner from "@components/LoadingSpinner";
import { RouteObject } from "react-router-dom";

// Lazy loading of pages
const Dashboard = lazy(() => import("@modules/dashboard/views/dashboard"));
const Invoices = lazy(() => import("@modules/invoices/views/overview"));
const InvoiceDetail = lazy(() => import("@modules/invoices/views/show"));
const InvoiceUpload = lazy(() => import("@modules/invoices/views/invoiceUpload"))
const Home = lazy(() => import("@modules/home/views/dashboard"));
const TransactionDetail = lazy(
  () => import("@modules/transactions/views/transactionMainPage/show.tsx")
);
const PastTransaction = lazy(
  () =>
    import(
      "@modules/transactions/views/transactionMainPage/pastTransaction.tsx"
    )
);
const Login = lazy(() => import("@modules/auth/views/login"));
const Analytics = lazy(() => import("@modules/analytics/views/analytics"));
const Transactions = lazy(
  () => import("@modules/transactions/views/transactions")
);
const transactionDetailsPage = lazy(
  () =>
    import(
      "@modules/transactions/views/transactionDetails/transactionDetailsPage"
    )
);

const Settings = lazy(() => import("@modules/settings/views/settings"));
const NotFound = () => <div>404 - Page non trouvée</div>;

const LazyLoader = (Component: React.FC) => (
  <Suspense fallback={<LoadingSpinner />}>
    <Component />
  </Suspense>
);

const routes: RouteObject[] = [
  {
    path: "/",
    element: <ProtectedLayout>{LazyLoader(Dashboard)}</ProtectedLayout>,
  },
  {
    path: "/invoices",
    element: <ProtectedLayout>{LazyLoader(Invoices)}</ProtectedLayout>,
  },
  {
    path: "/invoices/upload",
    element: <ProtectedLayout>{LazyLoader(InvoiceUpload)}</ProtectedLayout>,
  },
  {
    path: "/invoices/:id",
    element: <ProtectedLayout>{LazyLoader(InvoiceDetail)}</ProtectedLayout>,
  },
  {
    path: "/transactions",
    element: <ProtectedLayout>{LazyLoader(Transactions)}</ProtectedLayout>,
  },
  {
    path: "/analytics",
    element: <ProtectedLayout>{LazyLoader(Analytics)}</ProtectedLayout>,
  },
  {
    path: "/pastTransaction",
    element: <ProtectedLayout>{LazyLoader(PastTransaction)}</ProtectedLayout>,
  },
  {
    path: "/pastTransaction/:id",
    element: <ProtectedLayout>{LazyLoader(TransactionDetail)}</ProtectedLayout>,
  },
  {
    path: "/transactions/:id",
    element: (
      <ProtectedLayout>{LazyLoader(transactionDetailsPage)}</ProtectedLayout>
    ),
  },
  {
    path: "/settings",
    element: <ProtectedLayout>{LazyLoader(Settings)}</ProtectedLayout>,
  },
  {
    path: "/login",
    element: LazyLoader(Login),
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
