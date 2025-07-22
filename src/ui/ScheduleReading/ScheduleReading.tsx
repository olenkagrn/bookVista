import React, { useState, useMemo } from "react";
import {
  format,
  addDays, // Додано для перемикання тижнів
  subDays, // Додано для перемикання тижнів
  startOfWeek, // Додано для визначення початку тижня
  isSameDay,

  // Locale type should be imported from 'date-fns/locale'
} from "date-fns";

// Припустимо, у вас є інтерфейс для книги або просто URL обкладинки
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
  // Зберігаємо початкову дату видимого тижня
  // Почнемо з початку поточного тижня (понеділок або неділя, залежить від locale/startOfWeek options)
  const [weekStart, setWeekStart] = useState<Date>(
    startOfWeek(new Date(), { weekStartsOn: 1 }),
  ); // weekStartsOn: 1 для понеділка, 0 для неділі
  const today = useMemo(() => new Date(), []); // Поточна дата, щоб позначити "сьогодні"

  // Генеруємо дні для поточного видимого тижня
  const weekDays = useMemo(() => {
    const daysArray: Date[] = [];
    // Генеруємо 7 днів, починаючи з weekStart
    for (let i = 0; i < 7; i++) {
      daysArray.push(addDays(weekStart, i));
    }
    return daysArray;
  }, [weekStart]);

  const displayDays = useMemo(() => {
    return weekDays.map((dayDate) => {
      // Перевіряємо, чи є книга, запланована на цю дату
      const bookForDay = scheduledBooks.find((book) =>
        isSameDay(book.date, dayDate),
      );
      return {
        dayOfWeek: format(dayDate, "EEE"), // 'Mon', 'Tue'
        date: format(dayDate, "d"), // '12', '13'
        fullDate: dayDate,
        isSelected: isSameDay(dayDate, today), // Виділяємо сьогоднішній день
        book: bookForDay ? bookForDay.cover : null,
      };
    });
  }, [weekDays, today, scheduledBooks]);

  const handlePrevWeek = () => {
    setWeekStart((prevWeekStart) => subDays(prevWeekStart, 7)); // Переміщуємо на 7 днів назад
  };

  const handleNextWeek = () => {
    setWeekStart((prevWeekStart) => addDays(prevWeekStart, 7)); // Переміщуємо на 7 днів вперед
  };

  return (
    <div className=" p-6 rounded-lg ">
      {/* Заголовок та навігація */}
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-semibold text-gray-800 mr-4">
          Schedule Reading
        </h3>
        <div className="flex items-center space-x-2  text-2xl">
          {/* Кнопки навігації по тижнях */}
          <button
            onClick={handlePrevWeek}
            className="hover:text-gray-700 focus:outline-none"
            aria-label="Previous Week"
          >
            &lt;
          </button>
          {/* Відображення поточної дати, яку ми переглядаємо.
              Можна відображати "Тиждень з [поч. дата] по [кінц. дата]" або "Липень 2025"
          */}
          <span className="text-lg text-center font-medium">
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
