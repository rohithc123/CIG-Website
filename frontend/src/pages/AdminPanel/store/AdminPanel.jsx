import React from 'react';
import { Route, Routes, NavLink, Navigate } from 'react-router-dom';
import { useAuth } from './auth';
import Loading from '../../../assets/loading.gif';
import { AdminUsers } from '../AdminUser';
import { AdminUpdate } from '../AminUptade'
import AdminPatron from '../AdminPatron';
import AdminHead from '../AdminHead';
import AdminTeam from '../AdminTeam';
import AdminTestimonial from '../AdminTestimonial';
import AdminFeatured from '../AdminFeatured';
import AdminCollab from '../AdminCollab';
import AdminBlog from '../AdminBlog';
import AdminEvent from '../AdminEvent';

const Sidebar = () => {

  return (
    <div className="w-64 bg-gray-800 text-white flex flex-col h-screen  fixed left-0 z-50">
    <div className="p-4 font-bold text-xl border-b border-gray-700">Admin Panel</div>
    <nav className="flex-1">
      <ul className="space-y-2 p-4">
          <li>
            <NavLink
              to="/AdminPanel/Users"
              className={({ isActive }) =>
                `block py-2 px-4 rounded-md ${isActive ? 'bg-gray-600' : 'hover:bg-gray-700'}`
              }
            >
              Users
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/AdminPanel/Patron"
              className={({ isActive }) =>
                `block py-2 px-4 rounded-md ${isActive ? 'bg-gray-600' : 'hover:bg-gray-700'}`
              }
            >
              Patron
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/AdminPanel/Leaders"
              className={({ isActive }) =>
                `block py-2 px-4 rounded-md ${isActive ? 'bg-gray-600' : 'hover:bg-gray-700'}`
              }
            >
              Leaders
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/AdminPanel/TeamMember"
              className={({ isActive }) =>
                `block py-2 px-4 rounded-md ${isActive ? 'bg-gray-600' : 'hover:bg-gray-700'}`
              }
            >
              TeamMember
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/AdminPanel/Testimonial"
              className={({ isActive }) =>
                `block py-2 px-4 rounded-md ${isActive ? 'bg-gray-600' : 'hover:bg-gray-700'}`
              }
            >
              Testimonial
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/AdminPanel/FeaturedWorks"
              className={({ isActive }) =>
                `block py-2 px-4 rounded-md ${isActive ? 'bg-gray-600' : 'hover:bg-gray-700'}`
              }
            >
              FeaturedWorks
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/AdminPanel/collaborations"
              className={({ isActive }) =>
                `block py-2 px-4 rounded-md ${isActive ? 'bg-gray-600' : 'hover:bg-gray-700'}`
              }
            >
              collaborations
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/AdminPanel/Blogs"
              className={({ isActive }) =>
                `block py-2 px-4 rounded-md ${isActive ? 'bg-gray-600' : 'hover:bg-gray-700'}`
              }
            >
              Blogs
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/AdminPanel/Events"
              className={({ isActive }) =>
                `block py-2 px-4 rounded-md ${isActive ? 'bg-gray-600' : 'hover:bg-gray-700'}`
              }
            >
              Events
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

const AdminPanel = () => {
  const { user, isLoading } = useAuth();


  if (isLoading) {
    return (
      <div className="w-screen h-screen flex align-middle justify-center items-center bg-white">
        <img src={Loading} alt="Loading" />
      </div>
    );
  }

  if (!user.isAdmin) {
    return <Navigate to="/" />;
  }

  console.log("admin layout", user);

  return (
    <div className="flex flex-col md:flex-row">
      <Sidebar />
      <div className="flex-1 p-6 bg-gray-100 min-h-screen ml-0 md:ml-64 mt-[110px]">
        <Routes>
          <Route path="Users" element={<AdminUsers />} />
          <Route path='users/:id/edit' element={< AdminUpdate />} />
          <Route path='Patron' element={< AdminPatron />} />
          <Route path='Leaders' element={< AdminHead />} />
          <Route path='TeamMember' element={< AdminTeam />} />
          <Route path='Testimonial' element={< AdminTestimonial />} />
          <Route path='FeaturedWorks' element={< AdminFeatured />} />
          <Route path='collaborations' element={< AdminCollab />} />
          <Route path='Blogs' element={< AdminBlog />} />
          <Route path='Events' element={< AdminEvent />} />
        </Routes>
      </div>
    </div>
  );
};


export default AdminPanel;
