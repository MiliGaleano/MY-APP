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
      {itineraries.itineraries.map((elem, i)=>{return <button><li key={i}>{elem.hashtags}</li></button>})           }
      </ul>
     </div>
      )
    }
};

const mapStateToProps= state =>{
   console.log(state);
  
  return{
    itineraries: state.itineraries}
};

export default  connect(mapStateToProps,{getItineraries})(Itineraries);