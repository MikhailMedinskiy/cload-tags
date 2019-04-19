import axios from 'axios';
import { mainUrl } from './constant'

const getTagsApi = async () => {
    const response = await axios(mainUrl);
    
    if (response.status === 200) {
        return response.data;
      }
      throw new Error(response.status);
};

export default getTagsApi