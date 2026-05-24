import fetch from 'node-fetch';

async function test() {
  const res = await fetch('http://localhost:3000/api/auth/onboarding', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      phone: '+8801711223344',
      name: 'Test Donor',
      bloodGroup: 'O+',
      locationLat: null,
      locationLng: null,
      locationAddress: '',
      lastDonationDate: '',
      isAvailable: true
    })
  });
  console.log(res.status);
  console.log(await res.text());
}

test();
