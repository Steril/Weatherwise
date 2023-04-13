import mongoose from 'mongoose';

const campaignSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  subject: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  trigger: {
    type: String,
    enum: ['rainy', 'sunny', 'cloudy'],
    required: true
  },
  location: {
    type: String,
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
});

const Campaign = mongoose.model('Campaign', campaignSchema);

export default Campaign;
