import { Route, Routes } from 'react-router-dom'
import Start from './pages/Start'

export default function App () {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Start />} />
      </Routes>
    </div>
  )
}