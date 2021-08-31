export default async () => {
  const request = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/g74bEIa3hLMcwbnspurk/scores/');
  const result = await request.json();
  return result;
};
