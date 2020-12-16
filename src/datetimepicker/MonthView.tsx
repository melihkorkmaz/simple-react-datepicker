import React from 'react';
import ArrowButton from './ArrowButton';

import * as dateUtils from './dateUtils';

const DaysOfWeek = () => {
  return (
    <div className="srdp__month-view-titles">
      {dateUtils.daysOfWeek.map(day => (
        <div key={day.id}>{day.name}</div>
      ))}
    </div>
  );
};


interface IDaysOfMonthProps {
  date: Date;
  dateSelected: Date;
  onDateSelect: (date: Date) => void;
}

const DaysOfMonth = ({ date, dateSelected, onDateSelect }: IDaysOfMonthProps) => {
  return (
    <div className="srdp__month-view-content">
      {dateUtils.getDaysOfMonth(date).map((day, index) => {
        let className = ''

        if (!day) {
          className = 'srdp__month-view-content--empty';
        } else if (day && dateUtils.isEqual(dateSelected, day)) {
          className = 'srdp__month-view-content--selected';
        }

        return (
          <div onClick={() => day && onDateSelect(day)} className={className}>
            {day && day.getDate()}
          </div>
        );
      })}
    </div>
  );
};


interface IMonthViewProps {
  date: Date;
  dateSelected: Date;
  onNext: () => void,
  onPrevious: () => void,
  onDateSelect: (date: Date) => void,
}

const MonthView = ({ date, dateSelected, onNext, onPrevious, onDateSelect }: IMonthViewProps) => {
  const month = dateUtils.monthsInYear.find(m => m.id == date.getMonth()) || { name: '' };
  return (
    <div className="srdp__calendar">
      <div className="srdp__header">
        <ArrowButton direction="left" onClick={onPrevious} />
        {month.name} {date.getFullYear()}
        <ArrowButton direction="right" onClick={onNext} />
      </div>
      <div className="srdp__body">
        <DaysOfWeek />
        <DaysOfMonth date={date} dateSelected={dateSelected} onDateSelect={onDateSelect}/>
      </div>
    </div>
  )
};

export default MonthView;