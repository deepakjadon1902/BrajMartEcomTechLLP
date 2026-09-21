export const companyInfo = {
  legalName: 'BrajMart EcomTech LLP',
  shortName: 'BrajMart',
  email: 'business@brajmart.com',
  phone: '+91 9634359003',
  whatsappNumber: '919634359003',
  address: 'Keshav Kunj, Parikrama Marg, Vrindavan, Mathura, Uttar Pradesh 281121',
  logo: '/logos/brajmart-logo.webp',
  whatsappMessage: 'Hello BrajMart EcomTech LLP, I want to discuss an enquiry.',
}

export const companyLinks = {
  email: `mailto:${companyInfo.email}`,
  phone: `tel:${companyInfo.phone.replace(/\s/g, '')}`,
  whatsapp: `https://wa.me/${companyInfo.whatsappNumber}?text=${encodeURIComponent(companyInfo.whatsappMessage)}`,
}
