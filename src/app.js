const express = ("express");
const dotenv = ("dotenv");
const reportRoute = ("./routes/reportRoute.js");

dotenv.config();
const app = express();
app.use(express.json());

app.use("/api/report", reportRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
