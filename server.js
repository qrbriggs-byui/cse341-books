import app from "./app.js";

const PORT = process.env.PORT;

if (!PORT) {
  throw new Error("PORT environment variable is missing");
}

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
