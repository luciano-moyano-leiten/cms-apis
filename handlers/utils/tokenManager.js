let token = process.env.CMS_TOKEN || 'cf217c3a-e2c0-4332-9cd1-4af0967a594f';
console.log(`Token inicial: ${token}`);
export const getToken = () => token;

export const setToken = (newToken) => {
  token = newToken;
};
