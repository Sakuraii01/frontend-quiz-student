import { API_URL } from "./api";
import axios from "axios"; // Import Axios library

export default async function getDonationData() {
  try {
    const response = await axios.get(API_URL + "donation"); // Use axios directly

    if (response.status === 200) {
      const data = response.data; // Get the data from the response
      return data;
    } else {
      throw new Error(
        `API returned an error with status code ${response.status}`
      );
    }
  } catch (error) {
    console.error("An error occurred:", error);
    throw error; // Re-throw the error for further handling
  }
}
