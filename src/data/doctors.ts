interface doctorProps {
  id: number
  name: string
  speciality: string
  image: string
  rating: number
  noOfReviews: number
}

export const doctors: doctorProps[] = [
  {
    id: 1,
    name: 'Dr. John Doe',
    speciality: 'Dental Specialist',
    image:
      'https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80',
    rating: 5.0,
    noOfReviews: 200,
  },
  {
    id: 2,
    name: 'Dr. Darlene Robertson',
    speciality: 'Heart Specialist',
    image:
      'https://images.unsplash.com/photo-1641723345378-a701b30b2d36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80',
    rating: 4.5,
    noOfReviews: 40,
  },
  {
    id: 3,
    name: 'Dr. Darekk Steward',
    speciality: 'Neuro Surgeon',
    image:
      'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    rating: 3.8,
    noOfReviews: 60,
  },
  {
    id: 4,
    name: 'Dr. Cameroon Williamson',
    speciality: 'Cardiologist',
    image:
      'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    rating: 4.6,
    noOfReviews: 80,
  },
]
