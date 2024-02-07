import axios from "axios";

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
