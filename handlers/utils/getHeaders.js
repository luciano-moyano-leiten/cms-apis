export const getHeaders = () => ({
    'Authorization': `${process.env.CMS_TOKEN}`,
    'Content-Type': 'application/json'
});