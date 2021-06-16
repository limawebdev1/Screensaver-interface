import { Layout } from '../../components'
import ExploreView from '../ExploreView'
import React, { useEffect, useState } from 'react'
import { auth, db } from '../../config/firebase'


function Admin() {
  const [isSignedIn, setIsSignedIn] = useState(false) // Local signed-in state.
  const [password, setPassword] = useState('') // Local signed-in state.
  const [email, setEmail] = useState('') // Local signed-in state.

  function login() {
    console.log(email, password)

  auth().signInWithEmailAndPassword(email, password).then((userCredential) => {
      // Signed in
      var user = userCredential.user
      console.log("USER", user)
        setIsSignedIn(!!user)

    }).catch((error) => {
      var errorCode = error.code
      var errorMessage = error.message
      console.log("ERROR", errorCode, errorMessage)
    })
}

  useEffect(() => {
    const unregisterAuthObserver = auth().onAuthStateChanged((user) => {
      setIsSignedIn(!!user)
      console.log('SIGN UP', user)
    })
    return () => unregisterAuthObserver()
  }, [])

  if (!isSignedIn) {
    return (
      <div className="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none block w-full text-gray-700 px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mt-4 "
                >
                  Password
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="appearance-none block w-full px-3 py-2 border text-gray-700  border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <button
                    onClick={login}
                  className="w-full mt-6 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Login
                </button>
              </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <Layout>
      <div className={'md:mt-12 pb-8 w-11/12 mx-auto'}>
        <ExploreView admin={true} />
      </div>
    </Layout>
  )
}

export default Admin
