import React,{Component} from 'react';
import {getItineraries} from './components/action/actionitinerary';
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
      {itineraries.map((elem, i)=>{return <p>{elem.title}</p>})           }
      </ul>
     </div>
      )
    }
};

const mapStateToProps= state =>{
   console.log(state);
  
  return{
    itineraries: state.itinerary.itineraries.itineraries}
};

export default  connect(mapStateToProps,{getItineraries})(Itineraries);