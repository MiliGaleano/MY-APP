/*import React from 'react'
import ReactDOM from 'react-dom';
const axios = require('axios')

class Users extends React.Component {
 
 componentDidMount(){
  axios.get('http://localhost:5000/api/city', {
    responseType: 'json'
  })
  .then(function(res) {
      if(res.status==200) {
        console.log(res.data);

        function MostrarCiudades(res) {
          const cities = res.data;
          const listItems = cities.map((city) =>
            <li key={city.toString()}>
              {city}
            </li>
          );
          return (
            <ul>{listItems}</ul>
          );
        }
        
        ReactDOM.render(
          <MostrarCiudades res={res} />,
          document.getElementById('root')
        );
      
      }
      console.log(res);
    })
    .catch(function(err) {
      console.log(err);
    });
  }
  

  render() {
    return <h1>City</h1>
  }
}
export default Users


import React from 'react';
import {connect} from 'react-redux';
import {getItems} from './components/action/actionCity'
import PropTypes from 'prop-types';
import {getCities} from './components/action/actionCity';


//const CITYHOST = 'http://localhost:5000/api/city'



class City2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFetching: false,
      cities: []
    };
  }

  componentDidMount() {
    this.props.getCities();
  }

  render() {

    //const {items}= this.props.cityReducer;
    const listItems = this.state.cities.map((city) => <li key={city._id}>{city.city}</li>);

      return (
      <div>
        <p>{this.state.isFetching ? 'Fetching cities...' : ''}</p>
        <ul>
          {listItems}
        </ul>
        </div>
    );
  }

  async componentDidMount() {
    this.fetchCities()
  }

  fetchCities() {

    this.setState({
      isFetching: true,
      cities: []
    });

    fetch(CITYHOST)
      .then(response => response.json())
      .then(result => this.setState({
        isFetching: false,
        cities: result.cities
      }))
      .catch(e => console.log(e));
  }
}


City2.propTypes = {
  getCities: PropTypes.func.isRequired,
  cityReducer: PropTypes.object.isRequired
  }
  
  const mapStateToProps = (state) => ({
    cityReducer: state.cityReducer
  });



export default //connect(mapStateToProps, {getCities}) ();
City2;
 */

//EXPLICACION THUNK
//componentDidMount() {
//  this.props.getCities();
//}


import React,{Component} from 'react';
import {getCities} from './components/action/actionCity';
import {connect} from 'react-redux';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


class Cities extends Component {
 

  constructor(props){
    super(props)
    this.state= {
   
    }
  }

//   static propTypes = {
//     getCities: PropTypes.func.isRequired,
//     city: PropTypes.object.isRequired, 
  
// };
  
  
     componentDidMount(){
      this.props.getCities();
    }


    render() {
      const cities = this.props.cities;
      console.log("this.props.cities")
      console.log(this.props.cities)
      console.log(this.props.city)
      if (!cities) return (<p>Loading...</p>); 
      
      console.log(cities.cities);
      
      //const listCities = cities.map<li></li>    <ul>{listCities}</ul>
      return(
      <div>
      <ul>
      {cities.map((elem, i)=>{return <Link to="/Itinerary" className="link"><button><li key={i}>{elem.city}</li></button></Link>})           }
      </ul>
     </div>
      )
    }
};

const mapStateToProps= state =>{
  console.log('state');
   console.log(state.city);
  
  return{
  cities: state.city.cities.cities}
};

export default  connect(mapStateToProps,{getCities})(Cities);