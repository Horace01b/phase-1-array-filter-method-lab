// Code your solution here
function findMatching(drivers, query) {
  return drivers.filter(driver =>
    driver.toLowerCase() === query.toLowerCase()
  );
}

function fuzzyMatch(drivers, query) {
  return drivers.filter(driver =>
    driver.toLowerCase().startsWith(query.toLowerCase())
  );
}

function matchName(drivers, query) {
  return drivers.filter(driver =>
    driver.name === query
  );
}

const drivers = [
  { name: "Bobby", hometown: "New York" },
  { name: "Sammy", hometown: "Los Angeles" },
  { name: "Sally", hometown: "Cleveland" },
  { name: "Annette", hometown: "New York" },
  { name: "Bobby", hometown: "Tampa Bay" }
];

findMatching(["Bobby", "Sammy", "Sally"], "Bobby"); 
fuzzyMatch(["Bobby", "Sammy", "Sally"], "Sa");       
matchName(drivers, "Bobby");                         
