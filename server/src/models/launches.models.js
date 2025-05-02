const launches = new Map();

const launch = {
  flightNumber:100,
  mission: 'Kepler Exploration X',
  rocket: 'Explorer IS1',
  launchDate: new Date('December 27, 2030'),
  destination: 'Kepler-442 b',
  //We need a way of differentiating between upcoming and historical launches`  
  //successfull missions
  success: true,
  upcoming: true,
  customer: ['ZTM', 'NASA'],
};

launches.set(launch.flightNumber, launch);

module.exports = {
    launches
};