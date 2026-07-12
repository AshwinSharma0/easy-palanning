import PocketBase from 'pocketbase';

const pocketbaseUrl = import.meta.env.VITE_POCKETBASE_URL?.trim();
const pocketbaseClient = pocketbaseUrl ? new PocketBase(pocketbaseUrl) : null;

export default pocketbaseClient;
