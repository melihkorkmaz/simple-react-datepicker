import React, { useState } from 'react';
import MonthView from './MonthView';

import * as dateUtils from './dateUtils';

import './style.scss';

enum View {
  month,
}

const DateTimePicker = () => {
  const [date, setDate] = useState(new Date());
  const [dateSelected, setSelectedDate] = useState(new Date());
  const [currentView, setCurentView] = useState<View>(View.month);

  const handleNext = () => {
    if (currentView === View.month) {
      setDate(dateUtils.addMonth(date));
    }
  };

  const handlePrevious = () => {
    if (currentView === View.month) {
      setDate(dateUtils.subMonth(date));
    }
  };
  
  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
  };

  return (
    <div className="srdp">
      {currentView === View.month && 
        <MonthView
          onDateSelect={handleDateSelect}
          dateSelected={dateSelected}
          date={date}
          onNext={handleNext} 
          onPrevious={handlePrevious}
          />
      }
    </div>
  );
};

export default DateTimePicker;