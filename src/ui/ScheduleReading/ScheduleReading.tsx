import React, { useState, useMemo } from "react";
import { format, addDays, subDays, startOfWeek, isSameDay } from "date-fns";

interface BookCover {
  src: string;
  alt: string;
}

// Припустимо, у вас є дані про заплановані книги
// У реальному додатку це може бути отримано з API або Redux Store
interface ScheduledBook {
  date: Date; // Дата, на яку запланована книга
  cover: BookCover;
}

interface ScheduleReadingProps {
  scheduledBooks?: ScheduledBook[]; // Пропс для запланованих книг
}

const ScheduleReading: React.FC<ScheduleReadingProps> = ({
  scheduledBooks = [],
}) => {
  const [weekStart, setWeekStart] = useState<Date>(
    startOfWeek(new Date(), { weekStartsOn: 1 }),
  );
  const today = useMemo(() => new Date(), []);

  const weekDays = useMemo(() => {
    const daysArray: Date[] = [];
    for (let i = 0; i < 7; i++) {
      daysArray.push(addDays(weekStart, i));
    }
    return daysArray;
  }, [weekStart]);

  const displayDays = useMemo(() => {
    return weekDays.map((dayDate) => {
      const bookForDay = scheduledBooks.find((book) =>
        isSameDay(book.date, dayDate),
      );
      return {
        dayOfWeek: format(dayDate, "EEE"),
        date: format(dayDate, "d"),
        fullDate: dayDate,
        isSelected: isSameDay(dayDate, today),
        book: bookForDay ? bookForDay.cover : null,
      };
    });
  }, [weekDays, today, scheduledBooks]);

  const handlePrevWeek = () => {
    setWeekStart((prevWeekStart) => subDays(prevWeekStart, 7));
  };

  const handleNextWeek = () => {
    setWeekStart((prevWeekStart) => addDays(prevWeekStart, 7));
  };

  return (
    <div className=" p-6 rounded-lg md:col-start-4 md:col-end-5 md:row-start-3 md:row-end-4  ">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-[24px] font-bold text-dark-default mr-4">
          Schedule Reading
        </h3>
        <div className="flex items-center   text-2xl text-dark-default">
          <button
            onClick={handlePrevWeek}
            className="hover:text-gray-700 focus:outline-none"
            aria-label="Previous Week"
          >
            &lt;
          </button>

          <span className="text-[14px]  text-center font-medium">
            {format(weekStart, "MMM d")} -{" "}
            {format(addDays(weekStart, 6), "MMM d, yyyy")}
          </span>
          <button
            onClick={handleNextWeek}
            className="hover:text-gray-700 focus:outline-none"
            aria-label="Next Week"
          >
            &gt;
          </button>
        </div>
      </div>

      {/* Дні тижня та дати */}
      <div className="grid grid-cols-7 text-center gap-2">
        {displayDays.map((day, index) => (
          <div
            key={index}
            className={`
                flex flex-col items-center justify-center p-2 rounded-lg cursor-pointer
                ${day.isSelected ? "bg-orange-100 text-orange-800 font-bold" : "text-gray-600 hover:bg-gray-50"}
                ${isSameDay(day.fullDate, today) ? "ring-2 ring-orange-500 ring-offset-2" : ""}
            `}
            // Можна додати onClick для вибору дати
            // onClick={() => console.log('Selected date:', day.fullDate)}
          >
            <span className="text-sm font-medium">{day.dayOfWeek}</span>
            <span className="text-lg mt-1">{day.date}</span>
            {day.book && (
              <img
                src={day.book.src}
                alt={day.book.alt}
                className="w-8 h-12 object-cover rounded-sm mt-1 shadow-sm"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScheduleReading;
