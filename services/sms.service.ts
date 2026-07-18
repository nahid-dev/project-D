/**
 * Service for sending SMS via sms.net.bd Gateway.
 */

export async function sendOTP(phone: string, otp: string): Promise<boolean> {
  // const apiKey = process.env.api_key || process.env.API_KEY;
  const apiKey = process.env.api_key;
  const sender_id = process.env.SENDER_ID

  console.log('===> sms.service.ts:11 ~ ', process.env.MODE);
  if (process.env.MODE !== "PRODUCTION") {
    console.log(`[SMS_MOCK_FALLBACK WHILE RUNNING DEVELOPMENT NOT PRODUCTION] Sending OTP [${otp}] to ${phone}`);
    return true;
  }

  // Ensure the phone number format is correct (removing '+' if it exists)
  // The API requires format like 8801800000000
  const formattedPhone = phone.startsWith('+') ? phone.slice(1) : phone;

  const msg = `Your BloodBag OTP is: ${otp}. It will expire in 5 minutes.`;
  const url = `http://bulksmsbd.net/api/smsapi?api_key=${encodeURIComponent(apiKey || '')}&type=text&number=${formattedPhone}&senderid=${sender_id}&message=${encodeURIComponent(msg)}`

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
