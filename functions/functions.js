"using strict";

const bookings = [];

const createBookLink = function (flightId, name, age = 24) {
  const booking = {
    flightId,
    name,
    age,
  };

  bookings.push(booking);
};

createBookLink("123", "Tulio");
console.log(bookings);
