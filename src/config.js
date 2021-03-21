require("dotenv").config()

let DB_URI = `postgresql://`

if (process.env.NODE_ENV === "test") {
  DB_URI = `${DB_URI}/chatApp`
} else {
  DB_URI = process.env.DATABASE_URL || `${DB_URI}/chatApp`
}

module.exports = DB_URI