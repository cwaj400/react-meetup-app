import './App.css';
import {Routes, Route} from 'react-router-dom';
import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetups from "./pages/NewMeetups";
import Favorites from "./pages/Favorites";
import Layout from './components/layout/Layout'

function App() {
    return (
        <div className="App">
            <Layout>
                <Routes>
                    <Route path='/' exact element={<AllMeetupsPage/>}/>


                    <Route path='/new-meetups' exact element={<NewMeetups/>}/>


                    <Route path='/favorites' element={<Favorites/>}/>

                </Routes>

            </Layout>
        </div>
    );
}

export default App;
