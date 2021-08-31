export default async () => {
  const request = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/lRWV4oLNs6pIEv70BwVZ/scores/');
  const result = await request.json();
  return result;
};
