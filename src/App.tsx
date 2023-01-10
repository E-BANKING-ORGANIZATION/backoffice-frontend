import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import { Header } from "./shared/header/header";

import { AppRoutes } from "./routes/AppRoutes";
import { ReactKeycloakProvider } from "@react-keycloak/web";
import keycloak from "./config/keycloak";
import ErrorBoundary from "./shared/error/errorBoundy";

import { Suspense } from "react";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
      retry: 0,
    },
  },
});
function App() {
  return (
    <ReactKeycloakProvider authClient={keycloak}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <ErrorBoundary>
            <div className="min-h-full">
              <Suspense fallback={<></>}>
                <Header />
              </Suspense>
              <AppRoutes></AppRoutes>
            </div>
          </ErrorBoundary>
        </BrowserRouter>
      </QueryClientProvider>
    </ReactKeycloakProvider>
  );
}

export default App;
