import React from 'react';
import AddFishForm from './AddFishForm';

class Inventory extends React.Component{
    render() {
        return (
            <div className="inventory">
                <h2>Iventory</h2>
                <AddFishForm addFish={this.props.addFish}></AddFishForm>
            </div>
        )
    }
}

export default Inventory;