import { useState } from 'react'


import { Routes, Route } from 'react-router-dom'

import LayoutDrawerMini from "./layout/LayoutDrawerMini/LayoutDrawerMini"
import LayoutMinimal from "./layout/LayoutMinimal/LayoutMinimal"
import LayoutDrawerResponsive from "./layout/LayoutDrawerResponsive/LayoutDrawerResponsive"



import  DashboardContent  from './features/dashboard/DashboardContent';
// auth
import  Login  from './features/auth/Login';
import  ProfileForm  from './features/profile/ProfileForm';
import  ProfilePasswordForm  from './features/profile/ProfilePasswordForm';
import UserList from "./features/user/UserList"



function App() {


  return (
    <>
     <Routes>
     <Route path="/" element={<LayoutMinimal />}>
        <Route path="login" element={<Login />} />
   
      </Route>
      <Route path="/" element={<LayoutDrawerResponsive />}>
        <Route index element={<DashboardContent />} />
        <Route path="/profile" element={<ProfileForm />} />
        <Route path="/profile/password" element={<ProfilePasswordForm />} />
        <Route path="/user" element={<UserList />} />

        {/* <Route path="/profile" element={<ProfileForm />} />
        <Route path="/profile/password" element={<ProfilePasswordForm />} />
        <Route path="/user" element={<UserList />} /> */}

      </Route>

      <Route path="/" element={<LayoutDrawerMini />}>
        {/* <Route index element={<DashboardContent />} /> */}
    
      </Route>
    </Routes>
    </>
  )
   
}

export default App
