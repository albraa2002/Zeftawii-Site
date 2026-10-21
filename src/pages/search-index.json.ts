import { searchIndex } from '../lib/searchIndex';
export const GET = () => new Response(JSON.stringify(searchIndex('ar')), { headers: { 'Content-Type': 'application/json; charset=utf-8' } });
