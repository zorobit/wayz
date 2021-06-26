import React, { useState,Component } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker";

class  Calendare extends Component{
    //const [selectedDay, setSelectedDay] = useState(defaultValue);
constructor(){
    super();
    this.state={
        
    }
}
    render(){
    const defaultValue = {
    year: 2019,
    month: 3,
    day: 12,
  };

  const disabledDays = [
    {
      year: 2019,
      month: 3,
      day: 20,
    },
    {
      year: 2019,
      month: 3,
      day: 21,
    },
    {
      year: 2019,
      month: 3,
      day: 7,
    }
  ];


  const handleDisabledSelect = disabledDay => {
    console.log('Tried selecting a disabled day', disabledDay);
  };

  return (
    <Calendar
    
      
     
      disabledDays={disabledDays} // here we pass them
      onDisabledDayError={handleDisabledSelect} // handle error
      shouldHighlightWeekends
    />
  );
}};

export default Calendare;