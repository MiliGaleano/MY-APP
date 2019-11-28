


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
      
      return(
      <div>
      <ul>
      {/*} {cities.map((elem, i)=>{return <Link to="/Itinerary/" className="link"><button><li key={i}>{elem.city}</li></button></Link>})           }*/}
      {cities.map((elem)=>{return <Link to={`/Itinerary/${elem._id}`} className="link">  <button onClick><li key={elem._id}>{elem.city}</li></button></Link>})           }
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