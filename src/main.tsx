import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.tsx'
import './index.css'
import { ThemeProvider } from './context/ThemeContext.tsx'
import ErrorPage from './components/pages/Error/ErrorPage.tsx';
import { RefsProvider } from './context/RefsContext.tsx';

const router=createBrowserRouter([
   
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage></ErrorPage>
  }

])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RefsProvider>
        <ThemeProvider>
          <RouterProvider router={router} />
        </ThemeProvider>
    </RefsProvider>
  </StrictMode>,
)
