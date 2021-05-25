// Import component
import NavigationBar from './component/layout/Navbar';
import Home from './component/home/Home';
import Favorite from './component/layout/Favorite';
import NoteDetail from './component/layout/NoteDetail';
import EditForm from './component/layout/EditForm';
import './styles/app.scss';

// import react lib
import {BrowserRouter, Route, Switch} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/favorite" component={Favorite} />
        <Route path="/note/:id" component={NoteDetail} />
        <Route path="/editform/:id" component={EditForm} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
