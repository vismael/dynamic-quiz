
import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Header from '@components/header';
import { Footer } from '@components/footer';
import { getRouterJSX } from 'router.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <body className='flex flex-col h-screen'>
      <Header />
      <main className='flex-grow'>
        <RouterProvider router={getRouterJSX()} />
      </main>
      <Footer />
    </body>
)
