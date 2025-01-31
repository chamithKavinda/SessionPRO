import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import Session from '../models/session';

const SessionsPage = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [sessions, setSessions] = useState<Session[]>([]);
  const [sessionCount, setSessionCount] = useState(1); 

  const [sessionData, setSessionData] = useState({
    name: '',
    description: '',
    date: '',
    time: '',
    location: '',
    duration: '',
    speakerName: ''
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setSessionData({ ...sessionData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const sessionId = sessionCount.toString().padStart(2, '0'); 
    setSessionCount(sessionCount + 1); 

    const newSession = new Session(
      sessionId,
      sessionData.name,
      sessionData.description,
      sessionData.date,
      sessionData.time,
      sessionData.location,
      sessionData.duration,
      sessionData.speakerName
    );
    setSessions([...sessions, newSession]);
    setShowPopup(false);
  };

  return (
    <div>
      <NavBar />
      <button
        className="relative rounded-full bg-black ml-8 mt-8 px-4 py-2 font-mono font-bold text-white transition-colors duration-700 ease-linear before:absolute before:right-1/2 before:top-1/2 before:-z-[1] before:h-3/4 before:w-2/3 before:origin-bottom-left before:-translate-y-1/2 before:translate-x-1/2 before:animate-ping before:rounded-full before:bg-black hover:bg-black hover:before:bg-black"
        onClick={() => setShowPopup(true)}
      >
        Add Session
      </button>

      {showPopup && (
  <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
    <div className="bg-white p-8 rounded-lg shadow-lg relative">
      <button
        type="button"
        className="absolute top-3 right-4 text-gray-700 hover:text-red-600 focus:outline-none"
        onClick={() => setShowPopup(false)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <form onSubmit={handleSubmit}>
        <h2 className="text-2xl mb-6 text-center font-bold">Add New Session</h2>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Session Name */}
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Session Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={sessionData.name}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>

          {/* Speaker Name */}
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="speakerName">
              Speaker Name
            </label>
            <input
              type="text"
              id="speakerName"
              name="speakerName"
              value={sessionData.speakerName}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>

          {/* Date */}
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">
              Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={sessionData.date}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>

          {/* Time */}
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="time">
              Time
            </label>
            <input
              type="time"
              id="time"
              name="time"
              value={sessionData.time}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>

          {/* Location */}
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="location">
              Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={sessionData.location}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>

          {/* Duration */}
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="duration">
              Duration
            </label>
            <input
              type="text"
              id="duration"
              name="duration"
              value={sessionData.duration}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>

          {/* Description */}
          <div className="md:col-span-2">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={sessionData.description}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            ></textarea>
          </div>
        </div>

        {/* Save Button */}
        <div className="flex justify-center mt-6">
          <button
            type="submit"
            className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  </div>
)}



      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-y-5 gap-x-2 px-4 mt-8">
        {sessions.map((session) => (
          <article
            key={session.id} 
            className="w-[250px] h-[250px] mx-auto hover:animate-background rounded-xl shadow-2xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]">
            <div className="rounded-[10px] bg-white p-4 h-full !pt-20 sm:p-6">
              <time className="block text-xs -mt-12 text-gray-500">{session.date}</time>
              <h3 className="mt-0.5 text-lg font-medium text-gray-900">{session.name}</h3>
              <p className="mt-1 text-sm ">{session.description}</p>
              <p className="text-sm text-gray-700">Location: {session.location}</p>
              <p className="text-sm text-gray-700">Speaker: {session.speakerName}</p>
              <p className="text-sm text-gray-700">Session ID: {session.id}</p> 

              <button
                className="mt-4 w-full bg-gray-800 text-white h-9 rounded-xl hover:bg-gray-800 transition"
                // onClick={() => handleRegister(session.id)}
              >
                Register
              </button>
            </div>
          </article>
        ))}
      </div>


    </div>
  );
};

export default SessionsPage;
