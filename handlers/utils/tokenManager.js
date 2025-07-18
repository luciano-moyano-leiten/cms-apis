let token = process.env.CMS_TOKEN || '03354851-6c75-4ee2-82d0-fb7ee99eeb7a';
console.log(`Token inicial: ${token}`);
export const getToken = () => token;

export const setToken = (newToken) => {
  token = newToken;
};
