import axios from "axios";

class User {
  constructor(
    name = "Muhammed Awwal Musa",
    email = "talk2muhammedawwal@gmail.com",
    stack = ["Express/Node.js", "Python", "PostgreSQL"]
  ) {
    this.name = name;
    this.email = email;
    this.stack = stack;
  }

  getDetails() {
    return {
      name: this.name,
      email: this.email,
      stack: this.stack
    };
  }
}

export const fetchUser = async (req, res) => {
  const user = new User();
  const userDetails = user.getDetails();
  const timestamp = new Date().toISOString();

  let fact;

  try {
    const response = await axios.get("https://catfact.ninja/fact", {
      timeout: 5000
    });
    fact = response.data.fact;
  } catch (error) {
    console.error("Error fetching cat fact:", error.message);
    fact = "Could not fetch cat fact at this time.";
  }

  return res.status(200).json({
    status: "success",
    user: userDetails,
    timestamp,
    fact
  });
};
