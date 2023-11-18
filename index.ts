var cowsay = require("cowsay");
import cowsay1 from "cowsay";

console.log(
  cowsay1.say({
    text: "I'm a moooodule",
    e: "oO",
    T: "U ",
  })
);

Bun.serve({
  port: 3000,
  async fetch(request, server) {
    return new Response("Hello World");
  },
});
