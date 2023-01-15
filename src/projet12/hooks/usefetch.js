import axios from "axios";


//Appel actuelle à l'api
const api = axios.create({
  baseURL: `http://localhost:3000`
});

/** function de récupération des données de l'api
 * @param {string} id 
 * @param {string} type 
 * @returns {promise} res.data
 */
export const getData = async (id, type) => {
  try {
    let res = {}
  switch (type) {
    case "activity":
       res = await api.get(`http://localhost:3000/user/${id}/activity`);
      break;
    case "performance":
     res = await api.get(`http://localhost:3000/user/${id}/performance`);
      break;
    case "averageSessions":
      res = await api.get(`http://localhost:3000/user/${id}/average-sessions`);
      break;
    case "mainInfos":
      res = await api.get(`http://localhost:3000/user/${id}`);
      break;
      default: 
      res = null;
  }
  return res.data;
  } catch (e) {
    console.log(e);
  }
}