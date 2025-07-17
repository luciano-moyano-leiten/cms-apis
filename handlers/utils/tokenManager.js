let token = process.env.CMS_TOKEN || '13589872-0a57-4130-a501-e6c756ba7d25';
console.log(`Token inicial: ${token}`);
export const getToken = () => token;

export const setToken = (newToken) => {
  token = newToken;
};
