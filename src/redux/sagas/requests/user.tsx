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
    'http://localhost:3001/song',
    {
      headers: {
        Accept: 'application/json',
      },
    },
  );
  const {data: stat} = await axios.get<GetUsersResponse>(
    'http://localhost:3001/statistics',
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
      url: "http://localhost:3001/song"})    
  }

interface addSong {
  Title: string, Album: string, Genre: string, Artist: String, id: string
}
export async function requestAddSong(data: addSong) {
  try {
    console.log(data); 
    return await axios.post('http://localhost:3001/song', {...data}, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
  }) 
  } catch (error) {
    console.log(error); 
  }
}
export async function requestUpdateSong(data: addSong) {
  try {
    console.log(data); 
    let res = await fetch(`http://localhost:3001/song?id=${data.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    res = await res.json()
    return res
    } catch (error) {
      console.log(error); 
    }
}

