import axios from "axios";
import { addSong } from "../../ducks/songSlice";

export async function requestGetUser() {

 interface song {
    song: {}
    statistics: {}
 }


 type User = {
    _id: number;
    Artistl: string;
    Album: string;
    Genre: string;
  };
  
  type GetUsersResponse = {
    data: User[];
  };

  const {data: song} = await axios.get<GetUsersResponse>(
    'https://astp-backend.onrender.com/song',
    {
      headers: {
        Accept: 'application/json',
      },
    },
  );
  const {data: stat} = await axios.get<GetUsersResponse>(
    'https://astp-backend.onrender.com/statistics',
    {
      headers: {
        Accept: 'application/json',
      },
    },
  );
  const Song: song = {
    song: song,
    statistics: stat
  };
  

  return Song
}

export function requestdeleteSong(id: string) {
   return axios.request({
      method: "delete",
      params: {id: id},
      url: "https://astp-backend.onrender.com/song"})    
  }

interface addSong {
  Title: string, Album: string, Genre: string, Artist: String
}
interface updateSong {
  Title: string, Album: string, Genre: string, Artist: String, id: string
}
export async function requestAddSong(data: addSong) {
  try {
    console.log(data); 
    return await axios.post('https://astp-backend.onrender.com/song', {...data}, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
  }) 
  } catch (error) {
    console.log(error); 
  }
}
export async function requestUpdateSong(data: updateSong) {
  try {
    console.log(data); 
    let res = await axios.put(`https://astp-backend.onrender.com/song?id=${data.id}`, data);

    return res
    } catch (error) {
      console.log(error); 
    }
}

