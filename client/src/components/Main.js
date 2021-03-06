import { Component } from 'react';
import AddItem from './AddItem';
import Home from './Home';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Cart from './Cart';
import Orders from './Order';
import Header from '../js/Header';
import Products from '../js/Products';
import Client from '../js/Client'
import contactUs from '../js/contactus';


class Main extends Component {
    render(){
        return (
            
            <div>
                
                <Switch>
                    <Route path='/cc'>
                        <Home/>
                    </Route>
                    <Route path="/home">
                        <Products />
                     </Route>
                    <Route path='/addItem'>
                        <AddItem/>
                    </Route>
                    <Route path='/cart'>
                        <Cart/>
                    </Route>
                    <Route path='/orders'>
                        <Orders/>
                    </Route>
                    <Route path='/client'>
                        <Client/>
                        </Route>
                    <Route path='/contactUs'>
                        <contactUs/>
                        </Route>
                
                    <Redirect to='/home'/>
                </Switch>
            </div>
        )
    }
}

export default withRouter(connect()(Main));