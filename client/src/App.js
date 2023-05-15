import './App.css';
import FeaturedProperties from './components/featuredProperties/FeaturedProperties';
import Footer from './components/footer/footer';
import Newsletter from './components/newsletter/newsletter';
import PopularProperties from './components/popularProperties/PopularProperties';
import Properties from './components/properties/Properties';
import PropertyDetail from './components/propertyDetail/PropertyDetail';
import Signin from './components/signin/Signin';
import Signup from './components/signup/Signup';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={
          <>
          <Navbar />
          <Hero /> 
          <PopularProperties />
          <FeaturedProperties /> 
          <Newsletter />
          <Footer />
          </>
          
        } />
        
        <Route path='/properties' element={
        <>
        <Navbar />
        <Properties />
        <Footer />
        </>} />
        <Route path='/propertyDetails/:id' element={
          <>
          <Navbar />
          <PropertyDetail />
          <Footer />
          </>
        } />
        <Route path='/signup' element={<Signup />} />
        <Route path='/signin' element={<Signin />} />
      </Routes>
    </div>
  );
}

export default App;
