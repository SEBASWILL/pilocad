const mongoose = require("mongoose");

// Conexión a la base de datos MongoDB
mongoose
  .connect(process.env.MONGODB_URI
    ,
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
