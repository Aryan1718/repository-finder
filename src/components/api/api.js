// api.js
export const getData = async (repoName) => {
    try {
      const responseData = await fetch(`https://api.github.com/search/repositories?q=topic:${repoName}`);
      const data = await responseData.json();
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  