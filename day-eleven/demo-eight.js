const baseUser = {
    username: 'testuser',
    password: '123'
}

const adminUser = {
  ...baseUser,
  role: 'admin'
};

const viewerUser = {
  ...baseUser,
  role: 'viewer'
};