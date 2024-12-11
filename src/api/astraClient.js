import axios from 'axios';

const ASTRA_DB_TOKEN = process.env.REACT_APP_ASTRA_DB_TOKEN;
const ASTRA_DB_KEYSPACE = process.env.REACT_APP_ASTRA_DB_KEYSPACE;

const astraClient = axios.create({
  baseURL: `/api/rest/v2/keyspaces/${ASTRA_DB_KEYSPACE}`,
  headers: {
    'X-Cassandra-Token': ASTRA_DB_TOKEN,
    'Content-Type': 'application/json',
  },
});

console.log('Request URL:', `/api/rest/v2/keyspaces/${ASTRA_DB_KEYSPACE}/recipes`);

export default astraClient;