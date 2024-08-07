import response from '@/utils/response';

async function handler() {
  return response(200);
}

export {
  handler as POST,
  handler as GET,
  handler as PUT,
  handler as DELETE,
  handler as PATCH,
};
