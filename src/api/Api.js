import axios from "axios";

export async function usersData() {
  const users = await axios.get(
    "https://602e7c2c4410730017c50b9d.mockapi.io/users"
  );
  return users;
}
