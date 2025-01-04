import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from './store/auth';

const AdminEvent = () => {
  const { AuthorizationToken } = useAuth();

  // fetch data
  const [EventData, setEventData] = useState([]);

  // Fetch data from API
  const fetchEventData = async () => {
    try {
      const response = await fetch('/api/admin/getEvent', {
        method: "GET",
        headers: {
          Authorization: AuthorizationToken,
        },
      });
      if (response.ok) {
        const data = await response.json();
        setEventData(data.photos);
      } else {
        console.error("Error fetching team data");
      }
    } catch (error) {
      console.error('Error fetching team data:', error);
    }
  };

  const deleteUser = async (id) => {
    try {
      const response = await fetch(`/api/admin/EventUploads/delete/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: AuthorizationToken,
        },
      });

      const data = await response.json();
      console.log("user after delete ", data);

      if (response.ok) {
        fetchEventData();
      }
    } catch (error) {
      console.log(error);
    }

  }

  useEffect(() => {
    fetchEventData();
  }, [AuthorizationToken]); // Add AuthorizationToken as a dependency to re-run when it changes

  // upload data
  const [formData, setFormData] = useState({
    file: null,
    title: '',
    date: '',
    description: '',
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));
  };

  const handleUpload = async (e) => {
    e.preventDefault();

    const { file, title,date, description } = formData;

    if (!file || !title) {
      setMessage('Please fill in all required fields.');
      return;
    }

    const uploadData = new FormData();
    uploadData.append('file', file);
    uploadData.append('title', title);
    uploadData.append('date', date);
    uploadData.append('description', description);

    try {
      const response = await axios.post(
        '/api/admin/EventUploads',
        uploadData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: AuthorizationToken, // Include Authorization header here
          },
        }
      );
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response?.data?.error || 'File upload failed.');
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Upload Patron Team Data </h1>

        <form onSubmit={handleUpload} className="bg-white p-6 rounded shadow-md w-full max-w-md">
          {['title', 'date', 'description'].map((field) => (
            <input
              key={field}
              type="text"
              name={field}
              value={formData[field] || ''}
              onChange={handleChange}
              placeholder={`Enter ${field}`}
              className="block w-full text-sm text-gray-600 border border-gray-300 rounded-lg mb-4 p-2 focus:outline-none"
            />
          ))}
          <input
            type="file"
            name="file"
            onChange={handleChange}
            className="block w-full text-sm text-gray-600 border border-gray-300 rounded-lg cursor-pointer focus:outline-none mb-4"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none"
          >
            Upload
          </button>
        </form>

        {message && (
          <div className="mt-4 text-center text-sm text-gray-700 bg-gray-200 p-2 rounded">
            {message}
          </div>
        )}
      </div>

      <div className="flex justify-center items-center min-h-screen w-[100%] bg-gray-100">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mx-auto p-4">
          {EventData.length > 0 ? (
            EventData.map((data, index) => (
              <div
                key={data.id || index}
                className="flex flex-row font-poppins gap-8 bg-white p-4 shadow-md rounded-lg"
              >
                <img
                  className="rounded-xl w-[200px] h-[250px]"
                  src={data.url}
                  alt=""
                />
                <div className="flex flex-col justify-center">
                  <div className="font-medium text-2xl">{data.title}</div>
                  <div className="text-[#183059] font-medium text-base">{data.date}</div>
                  <div className="text-[#909090] bg-[#909090] w-full h-[2px] my-4"></div>
                  <div className="text-[#ABABAB] font-medium text-base">{data.description}</div>
                  {/* <Link to={`/admin/users/${curUser._id}/edit`}>
                  <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Edit</button>
                </Link> */}
                  <button type="button" onClick={() => deleteUser(data._id)} className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Delete</button>
                </div>

              </div>

            ))
          ) : (
            <div className="text-center col-span-1 lg:col-span-2">
              Loading team data or no data available.
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AdminEvent;
