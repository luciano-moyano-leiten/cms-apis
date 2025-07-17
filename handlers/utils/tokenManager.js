let token = process.env.CMS_TOKEN || 'e9ea4bd2-cddd-45b3-a82d-1b20a8a95770';
console.log(`Token inicial: ${token}`);
export const getToken = () => token;

export const setToken = (newToken) => {
  token = newToken;
};
