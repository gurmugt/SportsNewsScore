import * as React from "react"
import { Outlet } from "react-router-dom"
import NavBar from "./NavBar"

const AppLayout = () => {
  return (
    <>
      <NavBar />
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <Outlet />
        </div>
      </main>
    </>
  )
}

export default AppLayout;