import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import SearchResults from './SearchResults';
import SearchBar from './SearchBar';
import Description from './Description';



class App extends React.Component {
   render () {
    return (
    <div>
      <SearchBar></SearchBar>
      <BrowserRouter>
          <Route path="/search/:search" exact component={SearchResults}/>
          <Route path="/items/:id" exact component={Description}/>
      </BrowserRouter>
    </div>
    );
  }
}

export default App;
