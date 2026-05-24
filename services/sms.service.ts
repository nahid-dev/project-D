/**
 * Service for sending SMS via sms.net.bd Gateway.
 */

export async function sendOTP(phone: string, otp: string): Promise<boolean> {
  const apiKey = process.env.api_key || process.env.API_KEY;
  
  if (!apiKey) {
    console.error('[SMS_ERROR] Missing API key for SMS gateway. Please check your .env file.');
    // In development, you might still want to proceed or just return false
    // Returning true here if we want to allow dev testing without real SMS
    if (process.env.NODE_ENV !== 'production') {
      console.log(`[SMS_MOCK_FALLBACK] Sending OTP [${otp}] to ${phone}`);
      return true;
    }
    return false;
  }

  // Ensure the phone number format is correct (removing '+' if it exists)
  // The API requires format like 8801800000000
  const formattedPhone = phone.startsWith('+') ? phone.slice(1) : phone;
  
  const msg = `Your GiveBlood registration OTP is: ${otp}. It will expire in 5 minutes.`;
  const url = `https://api.sms.net.bd/sendsms?api_key=${encodeURIComponent(apiKey)}&msg=${encodeURIComponent(msg)}&to=${formattedPhone}`;

  try {
    const response = await fetch(url);
    // Note: sms.net.bd returns JSON format: {"error": 0, "msg": "Request successfully submitted", "data": {...}}
    const data = await response.json();

    if (process.env.NODE_ENV !== 'production') {
      console.log(`[SMS_DEBUG] API Response for ${phone}:`, data);
    }

    if (response.ok && data.error === 0) {
      return true;
    } else {
      console.error(`[SMS_ERROR] Failed to send OTP to ${phone}:`, data);
      return false;
    }
  } catch (error) {
    console.error(`[SMS_ERROR] Exception while sending OTP to ${phone}:`, error);
    return false;
  }
}
