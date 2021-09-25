import { useRef, useState, useEffect } from 'react';
import { addMonths, addYears, addDays, Calendar, defaultCalendarStrings } from '@fluentui/react';
import { useConst } from '@fluentui/react-hooks';
import { InlineWidget } from "react-calendly";
export const Calender = (props ) => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const today = useConst(new Date());
    const minDate = useConst(today, -1);
    const maxDate = useConst(addMonths(today, 2));
    const restrictedDates = useConst([addDays(today, -2), addDays(today, -8), addDays(today, 2), addDays(today, 8)]);
    return <div>
      {/* <Calendar
        showGoToToday
        allFocusable = {false}
        onSelectDate={setSelectedDate}
        value={selectedDate}
        minDate={minDate}
        maxDate={maxDate}
        restrictedDates={restrictedDates}
        // Calendar uses English strings by default. For localized apps, you must override this prop.
        strings={defaultCalendarStrings}
      />
       */}
             <InlineWidget url="https://calendly.com/bit-srivastava/alok1-1" />

      <div>
        Available slots
      </div>
      </div>
  
}