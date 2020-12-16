
export const daysOfMonthBlockArray = new Array(35).fill(null);

export const monthsInYear = [
  { id: 0, name: 'January' },
  { id: 1, name: 'February' },
  { id: 2, name: 'March' },
  { id: 3, name: 'April' },
  { id: 4, name: 'May' },
  { id: 5, name: 'June' },
  { id: 6, name: 'July' },
  { id: 7, name: 'August' },
  { id: 8, name: 'September' },
  { id: 9, name: 'October' },
  { id: 10, name: 'November' },
  { id: 11, name: 'December' },
];

export const daysOfWeek = [
  { id: 1, name: 'Mon'},
  { id: 2, name: 'Tue'},
  { id: 3, name: 'Wed'},
  { id: 4, name: 'Thu'},
  { id: 5, name: 'Fri'},
  { id: 6, name: 'Sat'},
  { id: 0, name: 'Sun'}
];

export const getFirstDayOfMonth = (date: Date): Date => (
  new Date(date.getFullYear(), date.getMonth(), 1)
);

export const getLastDayOfMonth = (date: Date): Date => (
  new Date(date.getFullYear(), date.getMonth() + 1, 0)
);

export const getDaysOfMonth = (date: Date): (Date | null)[] => {
  const firstDay = getFirstDayOfMonth(date);
  const lastDay = getLastDayOfMonth(date);

  // const previousMonthLastDay = getLastDayOfMonth(subMonth(date));
  
  let counter = 0;
  return daysOfMonthBlockArray.map((block, index) => {
    let firstDayIndex = firstDay.getDay() - 1;
    
    if (firstDayIndex < 0) {
      firstDayIndex = 6;
    }

    if (index < firstDayIndex) {
      return null;
      // return previousMonthLastDay.getDate() - (firstDayIndex - index - 1);
    }

    counter += 1;
    if (counter > lastDay.getDate()) {
      return null;
    }
    return new Date(date.getFullYear(), date.getMonth(), counter);
  });
};

export const addMonth = (date: Date, value: number = 1): Date => (
  new Date(date.getFullYear(), date.getMonth() + value, date.getDate())
);

export const subMonth = (date: Date, value: number = 1): Date => (
  new Date(date.getFullYear(), date.getMonth() - value, date.getDate())
);

export const isEqual = (sourceDate: Date, targetDate: Date): boolean =>(
  sourceDate.toDateString() === targetDate.toDateString()
);