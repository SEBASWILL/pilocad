const mongoose = require("mongoose");

// Conexión a la base de datos MongoDB
mongoose
  .connect(
    "mongodb+srv://wilchessebastian2000:Zzuf0gWg9SHgK4ds@pilocadapp.lwkly4m.mongodb.net/?retryWrites=true&w=majority&appName=PILOCADAPP",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Conexión a MongoDB exitosa"))
  .catch((err) => console.error("Error al conectar a MongoDB:", err));

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

module.exports = User;
