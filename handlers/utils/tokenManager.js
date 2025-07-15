let token = process.env.CMS_TOKEN || '339b8931-7e05-4f4e-9f43-64d5285664bd';

export const getToken = () => token;

export const setToken = (newToken) => {
  token = newToken;
};
