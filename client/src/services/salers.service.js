import axios from 'axios';

const BASE_URL = "http://localhost:8741/api";

class SalersService {
   
    getSalers()
    {
        return axios.get(BASE_URL + "/salers" , {
            headers: {
                'accept': 'application/json'
            }
        });
    }

    getSaler(id)
    {
        return axios.get(BASE_URL + "/salers/" + id , {
            headers: {
                'accept': 'application/json'
            }
        });
    }

    createMeeting(data)
    {
        return axios.post(BASE_URL + "/meetings" , data )
    }
}

export default new SalersService();