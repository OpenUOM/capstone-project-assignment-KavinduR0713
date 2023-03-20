const server  = require ("./server.js");

import server from "./server.js";

server.listen(8080, function () {
  console.log(
    "Capstone Project Backend is running on http://localhost:8080"
  );
});

if(process.env.NODE_ENV === "test"){
  server.listen(3000, () => {
    console.log(
      "Capstone Project Backend is running on http://localhost:3000"
    );
  });
}else{
  server.listen(8080, () => {
    console.log(
      "Capstone Project Backend is running on http://localhost:8080"
    );
  });
}