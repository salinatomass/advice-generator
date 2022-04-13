const API_URL = 'https://api.adviceslip.com/advice';

const getData = async () => {
  try {
    const res = await fetch(API_URL);
    const data = await res.json();
    return data;
  } catch (err) {
    return err.message;
  }
};

export default getData;
