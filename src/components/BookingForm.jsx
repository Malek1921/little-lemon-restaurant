import React, { useState } from 'react';

export default function BookingForm({ availableTimes, dispatch, submitForm }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("17:00");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");

  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm({ date, time, guests, occasion });
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-10 rounded-3xl shadow-xl border border-gray-100">
      <h2 className="text-4xl font-serif text-[#495E57] mb-8 text-center">Find a Table</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col gap-2">
          <label htmlFor="res-date" className="font-bold text-[#495E57]">Date</label>
          <input type="date" id="res-date" required value={date} onChange={(e) => { setDate(e.target.value); dispatch({ type: 'UPDATE_TIMES' }); }} className="p-3 bg-gray-50 border rounded-xl" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="res-time" className="font-bold text-[#495E57]">Time</label>
          <select id="res-time" required value={time} onChange={(e) => setTime(e.target.value)} className="p-3 bg-gray-50 border rounded-xl">
            {availableTimes.map(t => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="guests" className="font-bold text-[#495E57]">Guests</label>
          <input type="number" id="guests" min="1" max="10" required value={guests} onChange={(e) => setGuests(e.target.value)} className="p-3 bg-gray-50 border rounded-xl" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="occasion" className="font-bold text-[#495E57]">Occasion</label>
          <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)} className="p-3 bg-gray-50 border rounded-xl">
            <option>Birthday</option><option>Anniversary</option>
          </select>
        </div>
        <button type="submit" className="md:col-span-2 bg-[#F4CE14] text-[#495E57] font-black py-4 rounded-xl text-xl shadow-md transition-transform active:scale-95">Confirm Reservation</button>
      </form>
    </div>
  );
}