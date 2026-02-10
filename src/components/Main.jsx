import React, { useReducer } from "react";
import BookingForm from "./BookingForm";

// Initial state for times
export const initializeTimes = () => [
  "17:00",
  "18:00",
  "19:00",
  "20:00",
  "21:00",
  "22:00",
];

// Reducer function for state management
export const updateTimes = (state, action) => {
  switch (action.type) {
    case "UPDATE_TIMES":
      return ["17:30", "18:30", "19:30", "20:30", "21:30"];
    default:
      return state;
  }
};

export default function Main() {
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes,
  );

  const submitForm = (formData) => {
    console.log("Reservation Data:", formData);
    alert("Table Reserved Successfully!");
  };

  return (
    <main className="flex-grow">
      {/* Hero Section */}
      <section className="bg-[#495E57] text-white py-16 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="space-y-6">
            <h1 className="text-7xl text-[#F4CE14]">Little Lemon</h1>
            <h2 className="text-4xl -mt-4">Chicago</h2>
            <p className="max-w-md text-xl leading-relaxed">
              Family owned Mediterranean restaurant, focused on traditional
              recipes with a modern twist.
            </p>
            <button className="bg-[#F4CE14] text-[#495E57] px-8 py-3 rounded-2xl font-bold text-xl shadow-lg">
              Reserve a Table
            </button>
          </div>
          <img
            src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=400"
            alt="Food"
            className="rounded-3xl shadow-2xl h-96 w-80 object-cover border-4 border-[#F4CE14]"
          />
        </div>
      </section>

      {/* Booking Section */}
      <section id="reservations" className="py-20 bg-gray-50">
        <BookingForm
          availableTimes={availableTimes}
          dispatch={dispatch}
          submitForm={submitForm}
        />
      </section>
    </main>
  );
}
