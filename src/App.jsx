import Navbar from './components/Navbar';
import Card from './components/Card';
import data from './data';
import './App.css'

function App() {
  const dataMap = data.map((place) => {
    return <Card 
      img = {place.imageUrl}
      title = {place.title}
      location = {place.location}
      moreInfo = {place.moreInfo}
      startDate = {place.startDate}
      endDate = {place.endDate}
      desc = {place.description}
    />
  })
  return (
    <div className="App">
      <Navbar />
      {dataMap}
    </div>
  )
}

export default App
