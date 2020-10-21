import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component{
    constructor(){
        super();
        this.goToStore = this.goToStore.bind(this);
        this.myInput = React.createRef()
    }
    

    goToStore(event){
        event.preventDefault();
        const storeName = this.myInput.current.value;
        console.log(storeName);
        this.props.history.push(`/store/${storeName}`);
    }

    goToStore2(event){
        event.preventDefault();
        const storeName = this.myInput;
        console.log(storeName);
    }

    goToStore3 = (event) => {
        event.preventDefault();
        const storeName = this.myInput;
        console.log(storeName);
    }

    render(){
        return (
        <form className="store-selector" onSubmit={this.goToStore}>
            <h2>Please Enter a Store</h2>
            <input 
            ref={this.myInput}
            type="text" required 
            placeholder="Store name" 
                defaultValue={getFunName()}
            />
            <button type="submit">Visit store </button>
        </form>
        )
    }
}

export default StorePicker