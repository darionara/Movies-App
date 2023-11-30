export default () => ({
  port: parseInt(process.env.PORT ?? '', 10) || 3001,
  tmdb: {
    baseUrl: process.env.TMDB_BASE_URL,
    apiKey: process.env.TMDB_API_KEY,
    apiToken: process.env.TMDB_API_TOKEN,
  },
});
