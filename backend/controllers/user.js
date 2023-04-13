import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  sendinblueApiKeyHashed: {
    type: String,
    required: true
  },
  sendinblueApiSecretHashed: {
    type: String,
    required: true
  },
  campaigns: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Campaign'
    }
  ],
  weatherConditions: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'WeatherCondition'
    }
  ],
  limit: {
    type: Number,
    default: 10
  },
  usage: {
    type: Number,
    default: 0
  },
  isAdmin: {
    type: Boolean,
    default: false
  }
});

userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

userSchema.pre('save', async function (next) {
  try {
    // Hash the password before saving to the database
    if (this.isModified('password')) {
      const salt = await bcrypt.genSalt(10);
      this.password = await bcrypt.hash(this.password, salt);
    }

    // Hash the Sendinblue API key and secret before saving to the database
    if (this.isModified('sendinblueApiKeyHashed')) {
      const salt = await bcrypt.genSalt(10);
      this.sendinblueApiKeyHashed = await bcrypt.hash(this.sendinblueApiKeyHashed, salt);
    }

    if (this.isModified('sendinblueApiSecretHashed')) {
      const salt = await bcrypt.genSalt(10);
      this.sendinblueApiSecretHashed = await bcrypt.hash(this.sendinblueApiSecretHashed, salt);
    }

    next();
  } catch (error) {
    next(error);
  }
});

const User = mongoose.model('User', userSchema);

export default User;
