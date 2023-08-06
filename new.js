const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/details',{ useNewUrlParser: true, useUnifiedTopology: true });
  console.log("connected")
}
const UserSchema = new mongoose.Schema({
  username: String,
  password:String
});
const User = mongoose.model('User', UserSchema);

const newUser = new User({
  username: 'John Doe',
  password: 'johndoe@example.com'
});
const newUser2 = new User({
  username: 'shivam',
  password: 'johndoe@example.com'
});
newUser.save();




