// searchHandler.js
import { getData } from '../api/api';

export const handleSearch = async (searchQuery) => {
  try {
    const response = await getData(searchQuery);
    const items = response.items;

    const newDataCard = items.map(item => ({
      projectName: item.full_name,
      url: item.html_url,
      des: item.description,
      clone_url: item.clone_url,
      forks: item.forks
    }));

    return newDataCard;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
