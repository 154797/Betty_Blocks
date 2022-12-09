import React from 'react';
import './index.css';
class Api extends React.Component {
   
 // Constructor 
    constructor(props) {
        super(props);
   
        this.state = {
            items: [],
            DataisLoaded: false
        };
    }
   
    // ComponentDidMount is used to
    // execute the code 
    componentDidMount() {
        fetch(
"https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    DataisLoaded: true
                });
            })
    }
    render() {
        const { DataisLoaded, items } = this.state;
        if (!DataisLoaded) return <div>
            <h1> Pleses wait some time.... </h1> </div> ;
   
        return (
        <div className = 'Api'>
            <h1> Hoi! ik kom uit de api😎 </h1>  {
                items.map((item) => ( 
                <ol key = { item.id } >
                    Voornaam: { item.username }, 
                    Achternaam: { item.name }, 
                    </ol>
                ))
            }
        </div>
    );
}
}

export default Api;