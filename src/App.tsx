import React, { Suspense } from 'react'
import { renderRoutes } from 'react-router-config'
import { routeList } from './constants/routeList'

function App() {
  return <Suspense fallback={'loading...'}>{renderRoutes(routeList)}</Suspense>
}

export default App
