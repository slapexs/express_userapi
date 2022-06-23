const sampleUsers = [
  {
    id: 1,
    username: 'katriyalnwza',
    password: 123456,
    email: 'Katriya.Wongwarang@examplemail.com',
    firstname: 'Katriya',
    lastname: 'Wongwarang',
  },
  {
    id: 2,
    username: 'jomkwanza123',
    password: 123456,
    email: 'Jomkwan.Watcharasopon@examplemail.com',
    firstname: 'Jomkwan',
    lastname: 'Watcharasopon',
  },
  {
    id: 3,
    username: 'niranaza',
    password: 123456,
    email: 'Nirana.Jantaraporn@examplemail.com',
    firstname: 'Nirana',
    lastname: 'Jantaraporn',
  },
];
document.getElementById('sampleAlluser').innerHTML = JSON.stringify(
  sampleUsers,
  null,
  4
);

// Sample auth
const bodyAuth = {
  username: 'admin',
  password: 123456,
};

document.querySelector('#bodyAuth').innerHTML = JSON.stringify(
  bodyAuth,
  null,
  4
);

// Response auth
const res_auth = [
  {
    status: 'ok',
    message: 'Logged in',
    token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIwOTg3NjU0MzIxIiwibmFtZSI6InByYXlvdWkiLCJpYXQiOjE1MTYyMzkwMj...',
    data: {
      id: 101,
      firstname: 'Admin',
      lastname: 'Sulusumbalu',
      nickname: 'Tangmo',
      username: 'admin',
      email: 'Admin.work@examplemail.com',
    },
  },
];

document.querySelector('#displayAuth').innerHTML = JSON.stringify(
  res_auth,
  null,
  4
);
