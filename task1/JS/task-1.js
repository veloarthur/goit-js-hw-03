const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};
user['mood'] = 'happy';
user.hobby = 'skydiving';
user.premium = false;
// console.log(`${key}: ${user[key]}`);

const userKeys = Object.keys(user);
for (const key of userKeys)
console.log(`${key}: ${user[key]}`)

