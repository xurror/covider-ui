export const setToken = (token: any) => {
  return {
    type: 'SET_TOKEN',
    payload: token,
  };
};
