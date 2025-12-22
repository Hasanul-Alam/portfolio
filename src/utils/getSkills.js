import axios from "axios";

export default async function getSkills(apiSkills) {
  try {
    const response = await axios.get(
      "https://portfolio-server-uuad.onrender.com/api/skills"
    );
    if (response.data.statusCode === 200) {
      return response.data.data;
    }
  } catch {}
}
