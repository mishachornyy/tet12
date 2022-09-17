import React from "react";
import {Link, Route, Routes} from "react-router-dom";
import {Disclosure} from "@headlessui/react";
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/outline";
import "./Menu.css"
import Home from "../page/home";
import Contact from "../page/Contact";
import Application from "../page/Application";
import License from "../page/License";
import Administrative from "../page/Administrative";
import Reports from "../page/Reports";
<Routes>


  <Route path="/contact" element={<Contact />} />
  <Route path="/application" element={<Application />} />
  <Route path="/License" element={<License />} />
  <Route path="/Administrative" element={<Administrative />} />
  <Route path="/Reports" element={<Reports />} />

</Routes>


export default function Example() {
  return (
    <Disclosure as="nav" className="bg-[#839278] nav ">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-[1461px] px-2 sm:px-1 lg:px-8 h-[100px]">
            <div className="relative flex h-[100px] items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-[#839278] hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#839278]">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start logo">
                <div className="flex flex-shrink-0 items-center">
                  <Link to="/">SWO TAX</Link>
                </div>
                <div className="hidden ml-[465px] sm:block">
                  <div className="flex head-info h-[99px] head-text ">


                    <Link to="/Contact">Contact</Link>
                    <Link to="/Application">Application</Link>
                    <Link to="/License">License</Link>
                    <Link to="/Administrative">Administrative</Link>
                    <Link to="/Reports">Reports</Link>


                  </div>
                </div>
              </div>

            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">


              <Link to="/Contact">Contact</Link>
              <Link to="/Application">Application</Link>
              <Link to="/License">License</Link>
              <Link to="/Administrative">Administrative</Link>
              <Link to="/Reports">Reports</Link>

            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
