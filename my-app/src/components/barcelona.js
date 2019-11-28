import React,{Component} from 'react';
import {getItinerariesBarcelona} from './components/action/actionitinerary';
import {connect} from 'react-redux';
// import PropTypes from 'prop-types';


class Itineraries extends Component {
 

  constructor(props){
    super(props)
    this.state= {
   
    }
  }
  
     async componentDidMount(){
      await this.props.getItineraries();
    }


    render() {
      const itineraries = this.props.itineraries;
      if (!itineraries) return (<p>Loading...</p>); 
      
      console.log(itineraries.itineraries);
      
      return(
      <div>
      <ul>
      {itineraries.map((elem, i)=>{return <div><h1>{elem.title}</h1><h2>{elem.rating}</h2><h3>{elem.duration}</h3><p>{elem.price}</p></div>})           }
      </ul>
     </div>
      )
    }
};

const mapStateToProps= state =>{
   console.log(state);
  
  return{
    itineraries: state.itinerary.itineraries}
};

export default  connect(mapStateToProps,{getItinerariesBarcelona})(Itineraries);