/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
     height: {
      '140': '44rem',
      '135': '42rem',
      '133': '41rem',
      '130': '40rem',
      '127': '39rem',
      '125': '38rem',
      '120': '36rem',
      '115': '34rem',
      '110': '32rem',
      '105': '30rem',
      '102': '29rem',
      '100': '28rem'
     },
     width: {
      '85': '21rem',
      '90': '22rem',
      '93': '23rem',
      '99': '25rem',
      '102': '26rem',
      '105': '27rem',
      '108': '28rem',
      '111': '29rem',
      '114': '30rem',
      '117': '31rem',
      '120': '32rem',
      '123': '33rem',
      '126': '34rem',
      '129': '35rem',
      '132': '36rem',
      '135': '37rem',
      '138': '38rem',
      '141': '39rem',
      '144': '40rem',
      '147': '41rem',
      '150': '42rem',
      '153': '43rem',
      '156': '44rem',
      '159': '45rem',
      '162': '46rem',
      '165': '47rem',
      '168': '48rem',
      '171': '49rem',
      '174': '50rem',
      '177': '51rem',
      '180': '52rem',
      '183': '53rem',
      '186': '54rem'  
    },
     screens: {
      'xx': '359px'      
     },
     borderRadius: {
      '4xl': '2rem',
      '5xl': '2.5rem',
    },
    container: {
      // center: true, // Centers the container horizontally
      // padding: '2rem', // Adds padding on both sides
      screens: {
        'sm': '300px',   // 100% width on small screens
        'md': '510px',  // Custom width on medium screens
        'lg': '620px',  // Custom width on large screens
        'xl': '800px', // Custom width on extra-large screens
        '2xl': '1050px' // Custom width on 2xl screens, quoted because it starts with a number
      },
    },
    },
  },
  plugins: [],
}

