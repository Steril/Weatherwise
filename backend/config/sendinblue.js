const axios = require('axios');

async function triggerCampaign(apiKey, campaignId) {
  try {
    const response = await axios.post(`https://api.sendinblue.com/v3/emailCampaigns/${campaignId}/sendNow`, null, {
      headers: {
        'Content-Type': 'application/json',
        'api-key': apiKey
      }
    });
    return response.data;
  } catch (error) {
    throw new Error(`Error triggering Sendinblue campaign: ${error.message}`);
  }
}

module.exports = { triggerCampaign };
