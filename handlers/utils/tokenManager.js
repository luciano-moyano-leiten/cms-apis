let token = process.env.CMS_TOKEN || 'c5d4e348-5365-4b24-bc07-a7d55cc2f5f6';
console.log(`Token inicial: ${token}`);
export const getToken = () => token;

export const setToken = (newToken) => {
  token = newToken;
};
