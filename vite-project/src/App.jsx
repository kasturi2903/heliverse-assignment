import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import './App.css'
import Homepage from './pages/homepage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './pages/signup';
import Login from './pages/login';
import AddPatient from './pages/addpatient';
import PatientList from './pages/patientlist';
import AddDietChart from './pages/addDietChart';
import DietChartsList from './pages/dietCharts';
import AssignMealForm from './pages/assignMeal';
import MealTaskList from './pages/mealTaskList';
function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        {/* Define routes for your components */}
        <Route path="/hospital-manager-dashboard" element={<Homepage />} />
        {/* <Route path="/alerts" element={<BasicExample />} /> */}
        <Route path="/register" element={<Signup/>}/>
        <Route path="/addpatient" element={<AddPatient/>}/>
        <Route path="/patients" element={<PatientList/>}/>
        <Route path="/add-diet" element={<AddDietChart/>}/>
        <Route path="/dietcharts" element={<DietChartsList/>}/>
        <Route path="/assignMeal" element={<AssignMealForm/>}/>
        <Route path="/meal" element={<MealTaskList/>}/>
       
          

        <Route path="/" element={<Login/>}/>
      </Routes>
    </Router>
  )
}

export default App
