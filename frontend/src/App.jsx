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
import ViewIssues from './admin/ViewIssues'
import BrowseTools from './pages/BrowseTools'
import UserAddTool from './pages/UserAddTool'
import ToolInventory from './pages/ToolInventory'
import ErrorPage from './pages/ErrorPage'

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
              <Route path="/user-add-tool" element={<UserAddTool />} />
              <Route path="/tool-list" element={<AdminToolList />} />
              <Route path="/register-issue" element={<IssueRegister />} />
              <Route path="/view-issues" element={<ViewIssues />} />
              <Route path="/browse-tools" element={<BrowseTools />} />
              <Route path="/tool-inventory" element={<ToolInventory />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </AppProvider>
        </BrowserRouter>
      </SnackbarProvider>
    </>
  )
}

export default App