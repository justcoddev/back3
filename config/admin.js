module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '34605e99d9d8b143b57a093100b04f91'),
  },
});
