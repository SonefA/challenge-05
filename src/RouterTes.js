import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PageReduxDefault from './pageRedux/PageReduxDefault'

export const RouterTes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<PageReduxDefault/>}/>
        </Routes>
    </BrowserRouter>
  )
}
