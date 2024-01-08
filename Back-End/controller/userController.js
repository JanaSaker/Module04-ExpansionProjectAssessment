import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const User = db.Users;
const register = async (req, res) => {
  try {
    const { email, password, userType } = req.body;
    const hashedPassword = await bcrypt.hash(password,7);

    // Create user
    const user = await User.create({
      email,
      password: hashedPassword,
      userType,
    });
    res.status(201).json({ message: 'Registered successfully', user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    // Compare passwords
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid password' });
    }
    // JWT
    const token = jwt.sign({ userId: user.id }, 'your_secret_key', { expiresIn: '1h' });
    res.json({ message: 'Login successful', token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export{
    login,
    register
};