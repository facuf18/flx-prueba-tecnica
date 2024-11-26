export const addKey = (data) => {
  const dataWithKey = data?.map((user) => {
    return {
      key: user.id,
      ...user,
    };
  });
  return dataWithKey;
};
