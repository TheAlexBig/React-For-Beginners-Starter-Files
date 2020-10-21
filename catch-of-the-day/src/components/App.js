import React from 'react'
import Header from './Header'
import Inventory from './Inventory'
import Order from './Order'

class App extends React.Component{
    constructor(){
        super();
        this.state = {
            fishes: {},
            orders: {}
        };
    }
    
    addFish = (fish) =>{
        const fishes = {...this.state.fishes};
        fishes[`fish${Object.keys(fishes).length+1}`] = fish;
        this.setState({
            fishes
        });
    }

    render(){
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh Seafood Market" age={50}/>
                </div>
                <Order/>
                <Inventory addFish={this.addFish}/>
            </div>
        )
    }
}

export default App;