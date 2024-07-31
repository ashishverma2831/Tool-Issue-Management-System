import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Signup from './components/Signup'
import Login from './components/Login'
import Home from './pages/Home'
import AdminLogin from './admin/AdminLogin'
import AdminHome from './admin/AdminHome'
import { SnackbarProvider } from 'notistack'
import { AppProvider } from './AppContext'
import AddTool from './admin/AddTool'
import AdminToolList from './admin/AdminToolList'
import IssueRegister from './pages/IssueRegister'

const App = () => {

  return (
    <>
      <SnackbarProvider maxSnack={3} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
        <BrowserRouter>
          <AppProvider>
            <Routes>
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<Home />} />
              <Route path="/admin" element={<AdminLogin />} />
              <Route path="/admin-home" element={<AdminHome />} />
              <Route path="/add-tool" element={<AddTool />} />
              <Route path="/tool-list" element={<AdminToolList />} />
              <Route path="/register-issue" element={<IssueRegister />} />
            </Routes>
          </AppProvider>
        </BrowserRouter>
      </SnackbarProvider>
    </>
  )
}

export default App