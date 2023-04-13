import express from 'express';
const router = express.Router();
import { authenticateUser } from '../middlewares/auth';
import { triggerCampaign } from '../services/sendinblue';
import Campaign from '../models/campaign';

// POST /campaigns/:id/trigger
// Trigger a campaign
router.post('/:id/trigger', authenticateUser, async (req, res, next) => {
  try {
    const campaign = await Campaign.findById(req.params.id).populate('user');

    if (!campaign) {
      // Campaign not found
      return res.status(404).json({ message: 'Campaign not found' });
    }

    if (!campaign.user.equals(req.user._id)) {
      // User is not authorized to trigger this campaign
      return res.status(403).json({ message: 'You are not authorized to trigger this campaign' });
    }

    const { sendinblueApiKey } = campaign.user;
    const { id } = campaign;

    await triggerCampaign(sendinblueApiKey, id);

    // Campaign triggered successfully
    return res.json({ message: 'Campaign triggered successfully' });
  } catch (error) {
    next(error);
  }
});

export default router;
