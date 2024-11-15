import { lazy, Suspense } from "react";
import LayoutSelector from "@layouts/LayoutSelector";
import ProtectedRoute from "@components/ProtectedRoute";
import { RouteObject } from "react-router-dom";


// Lazy loading des pages
const Dashboard = lazy(() => import("@modules/dashboard/views/dashboard"));
const Invoices = lazy(() => import("@modules/dashboard/views/invoices"));
const InvoiceDetail = lazy(() => import("@modules/invoices/views/show"));
const TransactionDetail = lazy(() => import("@modules/settings/views/show.tsx"));
const InvoiceUpload = lazy(() => import("@modules/invoices/views/invoiceUpload"));
const Settings = lazy(() => import("@modules/settings/views/settings"));
const Login = lazy(() => import("@modules/auth/views/login"));

const Analytics = lazy(() => import("@modules/analytics/views/analytics"));
const Transactions = lazy(() => import("@modules/transactions/views/transactions"));


const routes = (props: {
  darkMode: boolean;
  toggleDarkMode: () => void;
}): RouteObject[] => [
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <LayoutSelector
          darkMode={props.darkMode}
          toggleDarkMode={props.toggleDarkMode}
        >
          <Suspense fallback={<div>Loading...</div>}>
            <Dashboard />
          </Suspense>
        </LayoutSelector>
      </ProtectedRoute>
    ),
  },

  {
    path: "/DueNOverdue",
    element: (
      <ProtectedRoute>
        <LayoutSelector
          darkMode={props.darkMode}
          toggleDarkMode={props.toggleDarkMode}
        >
          <Suspense fallback={<div>Loading...</div>}>
            <Invoices />
          </Suspense>
        </LayoutSelector>
      </ProtectedRoute>
    ),
  },

  {
    path: "/transactions",
    element: (
      <ProtectedRoute>
        <LayoutSelector
          darkMode={props.darkMode}
          toggleDarkMode={props.toggleDarkMode}
        >
          <Suspense fallback={<div>Loading...</div>}>
            <Transactions />
          </Suspense>
        </LayoutSelector>
      </ProtectedRoute>
    ),
  },
  {
    path: "/analytics",
    element: (
      <ProtectedRoute>
        <LayoutSelector
          darkMode={props.darkMode}
          toggleDarkMode={props.toggleDarkMode}
        >
          <Suspense fallback={<div>Loading...</div>}>
            <Analytics/>
          </Suspense>
        </LayoutSelector>
      </ProtectedRoute>
    ),
  },
  
  {
    path: "/invoices/:id",
    element: (
      <ProtectedRoute>
        <LayoutSelector
          darkMode={props.darkMode}
          toggleDarkMode={props.toggleDarkMode}
        >
          <Suspense fallback={<div>Loading...</div>}>
            <InvoiceDetail />
          </Suspense>
        </LayoutSelector>
      </ProtectedRoute>
    ),
  },
    {
        path: "/settings/:id",
        element: (
            <ProtectedRoute>
                <LayoutSelector
                    darkMode={props.darkMode}
                    toggleDarkMode={props.toggleDarkMode}
                >
                    <Suspense fallback={<div>Loading...</div>}>
                        <TransactionDetail/>
                    </Suspense>
                </LayoutSelector>
            </ProtectedRoute>
        ),
    },
  {
    path: "/settings",
    element: (
      <ProtectedRoute>
        <LayoutSelector
          darkMode={props.darkMode}
          toggleDarkMode={props.toggleDarkMode}
        >
          <Suspense fallback={<div>Loading...</div>}>
            <Settings />
          </Suspense>
        </LayoutSelector>
      </ProtectedRoute>
    ),
  },
  {
    path: "/login",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Login />
      </Suspense>
    ),
  },
  { path: "*", element: <div>404 Not Found</div> },
];

export default routes;
