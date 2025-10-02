import React, { useState } from 'react';

const Navbar = () => {
  // const [activeTab, setActiveTab] = useState('Home');
  const [showModal, setShowModal] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitting(true);
    // Add your form submission logic here
    console.log('Form submitted!');
    setSubmitting(false);
  };

  return (
    <div className="sticky top-0 z-50">
      <nav className="flex items-center justify-between p-4 bg-white shadow-md ">
        <div className="flex items-center">
          <img src="https://th.bing.com/th/id/R.2bbb2db08ebcb95f01a5d6b491afbf76?rik=dwmWLsbXhGQ53Q&riu=http%3a%2f%2fwww.v3advertising.com%2fV3wp%2fwp-content%2fuploads%2f2016%2f10%2fVector-Smart-Object.png&ehk=nUYmIsUHmxHjNV2CEHpjFL8lpHPbucEcjXvCY7HCW60%3d&risl=&pid=ImgRaw&r=0" alt="Logo" className="h-8 w-10 mr-7" />
          <ul className="flex font-medium text-lg space-x-4 ml-4">
            {/* {['Home', 'Flights', 'Stays', 'Trains', 'Cabs', 'Bus', 'Holidays', 'Attractions'].map((tab) => (
              <li
                key={tab}
                className={`cursor-pointer ${activeTab === tab ? 'text-red-500 font-bold' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </li>
            ))} */}
                <a href="/" className="text-black hover:text-red-500 font-semibold">Home</a>
                <a href="/flight" className="text-black hover:text-red-500">Flights</a>
                <a href="/stay" className="text-black hover:text-red-500">Stays</a>
                <a href="/train" className="text-black hover:text-red-500">Trains</a>
                <a href="/cabs" className="text-black hover:text-red-500">Cabs</a>
                <a href="/bus" className="text-black hover:text-red-500">Bus</a>
                <a href="/holiday" className="text-black hover:text-red-500">Holidays</a>
                <a href="/attraction" className="text-black hover:text-red-500">Attractions</a>
          </ul>
        </div>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-full flex items-center"
          onClick={() => setShowModal(true)}
        >
          <i className="fas fa-user mr-2"></i> LOGIN / SIGNUP
        </button>
      </nav>

      {showModal && (
        <div className="fixed z-50 inset-0  bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-lg w-96">
            <div className="flex justify-between mb-4">
              <h2 className="text-xl font-bold">{isLogin ? 'Login' : 'Signup'}</h2>
              <button onClick={() => setShowModal(false)} className="text-gray-500">&times;</button>
            </div>
            <form onSubmit={handleSubmit} >
              {!isLogin && (
                <div className="mb-4">
                  <label className="block text-gray-700">Name</label>
                  <input
                    type="text" 
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    className="w-full px-3 py-2 border rounded-lg"
                  />
                </div>
              )}
              <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="w-full px-3 py-2 border rounded-lg"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  className="w-full px-3 py-2 border rounded-lg"
                />
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-blue-500 text-white py-2 rounded-lg"
              >
                {isLogin ? 'Login' : 'Signup'}
              </button>
            </form>
            <div className="mt-4 text-center">
              <button
                className="text-blue-500"
                onClick={() => setIsLogin(!isLogin)}
              >
                {isLogin ? 'Create an account' : 'Already have an account? Login'}
              </button>
            </div>
            <div className="mt-4 text-center">
              <button
                disabled={submitting}
                className="w-full bg-red-500 text-white py-2 rounded-lg flex items-center justify-center"
              >
                <i className="fab fa-google mr-2"></i > {isLogin ? 'Login' : 'Signup'} with Google
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;