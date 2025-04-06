import axios from "axios"

type ItemsResponse  = {
  type: string;
  name: string;
  img_src: string;
  weight: number;
}[]

export const fetchItems  = async () => {
  const url = "https://ompngqzaodtybiwhfzmv.supabase.co/functions/v1/character-assets";
  return await axios.get<ItemsResponse>(url);
}

export const fetchItemBase64 = async (url: string) => {
  const response = await axios.get(url, { responseType: 'arraybuffer' }); // Ensures you get a binary response
  const base64String = Buffer.from(response.data).toString('base64');
  return base64String;
}