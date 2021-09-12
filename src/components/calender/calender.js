import { Calendar, defaultCalendarStrings } from '@fluentui/react';
import { useRef, useState, useEffect } from 'react';

export const Calender = (props ) => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    return <div>
        My calender 
        <div>Selected date: {selectedDate?.toLocaleString() || 'Not set'}</div>
      <Calendar
        showGoToToday
        allFocusable = {false}
        onSelectDate={setSelectedDate}
        value={selectedDate}
        // Calendar uses English strings by default. For localized apps, you must override this prop.
        strings={defaultCalendarStrings}
      />
    </div>
}