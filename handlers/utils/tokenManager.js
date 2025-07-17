let token = process.env.CMS_TOKEN || '59610368-755d-479a-8280-06f45f719eee';
console.log(`Token inicial: ${token}`);
export const getToken = () => token;

export const setToken = (newToken) => {
  token = newToken;
};
