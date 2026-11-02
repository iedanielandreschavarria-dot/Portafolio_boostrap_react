import React from 'react';

export const profileData = {
  name: 'Joan Doe',
  email: 'jdoe@jeemail.com',
  phone: '+13456764598',
  bio: 'I am a full stack developer with 2 years of experience in both application and presentation layers. I have worked on applications and microservices deployed on IBM Cloud. I am an avid user of IBM Watson Services and have worked on Watson Assistant, NLU, Sentiment analyzer to name a few.',
};

export const skillsData = [
  {
    id: 1,
    name: 'HTML',
    experience: '2 years experience',
    icon: (
      <svg viewBox="0 0 128 128" width="42" height="42">
        <path fill="#E44D26" d="M19.037 113.876L9.032 1.661h109.936l-10.016 112.198-45.019 12.48z" />
        <path fill="#F16529" d="M64 116.8l36.378-10.086 8.559-95.878H64z" />
        <path fill="#EBEBEB" d="M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.33 3.692 3.382 37.927H64zm0 35.743l-.061.017-15.327-4.14-.979-10.975H33.816l1.928 21.609 28.193 7.826.063-.017z" />
        <path fill="#fff" d="M63.952 52.455v13.763h16.947l-1.597 17.849-15.35 4.143v14.319l28.215-7.82.207-2.325 3.234-36.233.335-3.696h-3.708zm0-27.856v13.762h33.244l.276-3.092.628-6.978.329-3.692z" />
      </svg>
    ),
  },
  {
    id: 2,
    name: 'JavaScript',
    experience: '1.5 years experience',
    icon: (
      <svg viewBox="0 0 128 128" width="42" height="42">
        <rect width="112" height="112" x="8" y="8" fill="#F0DB4F" rx="8" />
        <path
          fill="#323330"
          d="M96.7 96.3c-2.4 3.9-6.6 6.7-12.5 7.9-5.9 1.2-11.9.4-16.7-2.3-3.5-1.9-6.3-4.9-8.1-8.7l9.7-5.8c1.4 2.7 3.4 4.7 6 5.6 3.5 1.2 7.8.7 10-1.9 1.6-1.9 1.9-4.7 1.1-7.2-.9-2.8-3.6-4.4-8.2-6.4-5.7-2.4-10.1-4.8-12.8-8.5-2.6-3.5-3.3-8.1-2-12.7 1.3-4.6 4.7-8.4 9.5-10.2 5.4-2 11.7-1.6 16.5 1.3 3.2 1.9 5.6 4.6 7.1 7.9l-9.4 6c-1.1-2.1-2.6-3.5-4.6-4.2-2.7-.9-5.9-.5-7.7 1.4-1.4 1.5-1.6 3.9-.6 5.8 1 2 3.6 3.5 8.1 5.4 6.2 2.6 10.6 5.1 13.4 8.9 3.1 4.2 3.8 10 1.7 15.7zM52.3 91.5c-.2 5.4-2.2 9.7-6.1 12.6-3.9 2.9-9.1 3.7-14.4 2.5-4.7-1.1-8.4-3.9-10.6-8.1l9.5-5.7c1.2 2.2 2.9 3.6 5.2 4 2.4.4 4.5-.6 5.1-3.1.3-1.2.3-2.9.3-5.1V52.4h11.1v39.1z"
        />
      </svg>
    ),
  },
  {
    id: 3,
    name: 'Java',
    experience: '.5 years experience',
    icon: (
      <svg viewBox="0 0 128 128" width="42" height="42">
        <path
          fill="#0074BD"
          d="M47.6 89.2s-4.8 2.8 3.4 3.7c9.9 1.1 15 1 25.9-1.1 0 0 2.9 1.8 6.9 3.4-24.6 10.5-55.6-.6-36.2-6zm-3-13.7s-5.4 4 2.8 4.8c10.7 1.1 19.1 1.2 33.7-1.6 0 0 2 2 5.2 3.1-29.9 8.7-63.1.7-41.7-6.3z"
        />
        <path
          fill="#EA2D2E"
          d="M69.8 61.2c6.1 7-1.6 13.3-1.6 13.3s15.4-8 8.3-17.9c-6.6-9.2-11.7-13.8 15.8-29.5 0 0-43.2 10.8-22.5 34.1z"
        />
        <path
          fill="#0074BD"
          d="M102.1 99.1s3.6 3-4 5.3c-14.4 4.4-59.9 5.7-72.6.2-4.5-2 4-4.7 6.7-5.3 2.8-.6 4.4-.5 4.4-.5-5.1-3.6-32.9 7.1-14.1 10.1 51.2 8.3 93.4-3.7 79.6-9.8zM50 61.4s-23 5.5-8.1 7.5c6.3.8 18.8.6 30.5-.3 9.5-.8 19.1-2.5 19.1-2.5s-3.4 1.4-5.8 3.1c-23.5 6.2-68.9 3.3-55.8-3 11.1-5.4 20.1-4.8 20.1-4.8zm41.4 23.1c23.8-12.4 12.8-24.3 5.1-22.7-1.9.4-2.7.7-2.7.7s.7-1.1 2-1.6c14.9-5.2 26.4 15.4-4.8 23.6 0 0 .3-.3.4 0z"
        />
        <path
          fill="#EA2D2E"
          d="M76.6 11.5s13.2 13.2-12.5 33.5c-20.6 16.3-4.7 25.6 0 36.2-12-10.8-20.8-20.3-14.9-29.2 8.7-13 32.8-19.3 27.4-40.5z"
        />
        <path
          fill="#0074BD"
          d="M52.3 116.7c22.8 1.5 57.8-.8 58.6-11.7 0 0-1.6 4.1-18.8 7.3-19.4 3.7-43.3 3.2-57.5.9 0 0 2.9 2.4 17.7 3.5z"
        />
      </svg>
    ),
  },
  {
    id: 4,
    name: 'React',
    experience: '1 year experience',
    icon: (
      <svg viewBox="0 0 128 128" width="42" height="42">
        <g fill="none" stroke="#61DAFB" strokeWidth="6">
          <ellipse cx="64" cy="64" rx="50" ry="20" />
          <ellipse cx="64" cy="64" rx="50" ry="20" transform="rotate(60 64 64)" />
          <ellipse cx="64" cy="64" rx="50" ry="20" transform="rotate(120 64 64)" />
        </g>
        <circle cx="64" cy="64" r="9" fill="#61DAFB" />
      </svg>
    ),
  },
  {
    id: 5,
    name: 'Node.js',
    experience: '1 years experience',
    icon: (
      <svg viewBox="0 0 128 128" width="48" height="42">
        <text
          x="50%"
          y="62%"
          textAnchor="middle"
          fill="#333333"
          fontFamily="Arial, sans-serif"
          fontWeight="bold"
          fontSize="36"
        >
          n<tspan fill="#68A063">o</tspan>de
        </text>
      </svg>
    ),
  },
  {
    id: 6,
    name: 'CSS',
    experience: '2 years experience',
    icon: (
      <svg viewBox="0 0 128 128" width="42" height="42">
        <path fill="#1572B6" d="M18.814 114.123L8.76 1.352h110.48l-10.064 112.754-45.243 12.543-45.119-12.526z" />
        <path fill="#33A9DC" d="M64.001 117.062l36.559-10.136 8.601-96.354h-45.16v106.49z" />
        <path fill="#fff" d="M64.001 51.429h18.302l1.264-14.163H64.001V23.435h34.682l-.332 3.711-3.4 38.114h-30.95V51.429z" />
        <path fill="#EBEBEB" d="M64.083 87.349l-.061.018-15.403-4.159-.985-11.031H33.752l1.937 21.717 28.331 7.863.063-.018v-14.39z" />
        <path fill="#fff" d="M81.127 64.675l-1.666 18.522-15.426 4.164v14.39l28.354-7.858.208-2.337 2.406-26.881H81.127z" />
        <path fill="#EBEBEB" d="M64.048 23.435v13.831H30.64l-.277-3.108-.63-7.012-.331-3.711h34.646zm-.047 27.996v13.831H48.792l-.277-3.108-.631-7.012-.33-3.711h16.447z" />
      </svg>
    ),
  },
];

export const projectsData = [
  {
    id: 1,
    title: 'Chatbot',
    description:
      'Developed a secure website integrated with chatbot for an automobile client using HTML, CSS, JavaScript and IBM Watson Assistant',
  },
  {
    id: 2,
    title: 'Sentiment Analyzer',
    description:
      'Developed and deployed a sentiment analyzer for the box reviews section of an eCommerce platform using IBM NLU',
  },
  {
    id: 3,
    title: 'Fashion Website',
    description:
      'Created a styled multi-page website for a new player in the fashion industry and integrated it with a shopping cart, using stripe for payment gateway',
  },
];

export const initialRecommendationsData = [
  {
    id: 1,
    text: 'Jane is a very quick learner and quickly grasps key concepts of Web development. She got a great attitude & she is an excellent team player. She has a curious mind and asks the right question. She takes initiative within a team and has potentials to lead the team.',
  },
  {
    id: 2,
    text: 'Working with Jane has been an awesome experience. She is highly knowledgable and always goes the extra step to make sure everything is right. For any future projects that need her expertise I would definitely want to work with her again.',
  },
  {
    id: 3,
    text: 'I had worked along with Jane during the initial phase of our venture which needed Web development. She is a committed resource who has in depth knowledge about the domain. She will be an asset for any organisation!',
  },
];

