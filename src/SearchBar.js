import React from 'react';
import './SearchBar.scss';
import icSearch from './ic_Search2x.png';
import logo from './Logo_ML.png';
import { createBrowserHistory } from 'history';


class SearchBar extends React.Component {

    state = { term: ''};

    onFormSubmit = event => {
        createBrowserHistory().push('/search/'+this.state.term);
    }

    render() {
        return (
            <div>
                <form className="bg-search" onSubmit={this.onFormSubmit}>
                    <div className="search-container">
                        <a href='/'><div className="logo"><img src={logo} alt="logo"/></div></a>
                        <div className="container-search-box">
                            <input 
                                className="search-box"
                                type="text" 
                                value={this.state.term} 
                                onChange={e => this.setState({term: e.target.value})} 
                                placeholder="Nunca dejes de buscar">
                            </input>
                            <div className="lupa-container"><img src={icSearch} alt="lupa"/></div>   
                        </div>
                    </div>
                </form>
            </div>
        );
    }    
};

export default SearchBar;