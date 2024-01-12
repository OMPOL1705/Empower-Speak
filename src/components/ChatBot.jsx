import { ThemeProvider } from 'styled-components';
import ChatBot from 'react-simple-chatbot';
import disabled from '../utils/disabled.png';
import { useNavigate } from 'react-router-dom';

const theme = {
  background: '#f5f8fb',
  headerBgColor: '#28FF64',
  headerFontColor: '#0F092D',
  headerFontSize: '15px',
  botBubbleColor: '#28FF64',
  botFontColor: '#0F092D',
  userBubbleColor: '#28FF64',
  userFontColor: '#0F092D',
};

function SimpleForm() {

  const navigate = useNavigate();

  return (
    <ThemeProvider theme={theme}>
      <ChatBot floating={true} enableSmoothScroll={true} speechSynthesis={{ enable: true, lang: 'en' }}
      floatingStyle={{bottom:"7vh", right:"7vh"}} userAvatar={disabled} recognitionEnable={true}
        steps={[
          {
            id: '1',
            message: 'Hello, I am a Chat Bot. What is your name?',
            trigger: '2',
          },
          {
            id: '2',
            user: true,
            trigger: '3',
          },
          {
            id: '3',
            message: 'Hi {previousValue}, nice to meet you!',
            trigger: '4',
          },
          {
            id: '4',
            message: 'What kind of disability do you have?',
            trigger: '5',
          },
          {
            id: '5',
            options: [
              { value: 1, label: 'Visually Impaired', trigger: '6' },
              { value: 2, label: 'Deaf and Dumb', trigger: '11' },
              { value: 3, label: 'Dyslexia', trigger: '15' },
              { value: 4, label: 'Exit', trigger: '10'},
            ],
          },
          {
            id: '6',
            message: 'Which feature do you want to learn about?',
            trigger: '7',
          },
          {
            id: '7',
            options: [
              { value: 1, label: 'Object Detection', trigger: '8' },
              { value: 2, label: 'Text to Speech', trigger: '9' },
              { value: 3, label: 'Exit', trigger: '10'},
            ],
          },
          {
            id: '8',
            message: `Now, there's a nifty feature that not only tells you about pictures but also says the names of things right in front of you. So, when there's a photo, it'll not just describe it, but also mention the names of the cool stuff in the picture. It's like having your own personal guide to the online world, making sure you know exactly what's going on. Explore our website, and let this awesome tool bring a whole new level of inclusivity and fun to your online journey!`,
            trigger: '21',
          },
          {
            id: '21',
            message: `Do you want to try this feature?`,
            trigger: '19',
          },
          {
            id: '19',
            user: true,
            validator: (value) => {
              if (value.toLowerCase() === 'yes') {
                navigate('/object_detection');
              } 
              return true;
            },
            trigger: '24',
          },
          {
            id: '9',
            message: `Now, your computer can transform written words into spoken ones, making it super easy for you to understand content without having to read. It's like having a virtual storyteller right there with you, narrating articles or pages. Just imagine, any text on our site can be spoken out loud, providing a more accessible and enjoyable experience for everyone. Explore our website and let this handy tool open up a new world of effortless listening!`,
            trigger: '22',
          },
          {
            id: '22',
            message: `Do you want to try this feature?`,
            trigger: '23',
          },
          {
            id: '23',
            user: true,
            validator: (value) => {
              if (value.toLowerCase() === 'yes') {
                navigate('/text_to_speech');
              } 
              return true;
            },
            trigger: '24',
          },
          {
            id: '24',
            message: `I will redirect you to that feature.`,
            trigger: '6',
          },
          {
            id: '10',
            message: 'Thank you, I hope i was helpful to you.',
            end : true
          },
          {
            id: '11',
            message: 'Which feature do you want to learn about?',
            trigger: '12',
          },
          {
            id: '12',
            options: [
              { value: 1, label: 'Speech to Text', trigger: '13' },
              { value: 2, label: 'Text to Speech', trigger: '14' },
              { value: 3, label: 'Exit', trigger: '10'},
            ],
          },
          {
            id: '13',
            message: `Now, you can simply talk, and your words magically turn into written text. It's like having a personal scribe, capturing your spoken thoughts and turning them into written messages. So, if typing isn't your thing, no worries! Explore our site, speak your mind, and let this cool tool make communication a breeze. It's all about making things easier and more inclusive for everyone. Try it out and enjoy a whole new way of interacting with our content!`,
            trigger: '11',
          },
          {
            id: '14',
            message: `Now, your computer can transform written words into spoken ones, making it super easy for you to understand content without having to read. It's like having a virtual storyteller right there with you, narrating articles or pages. Just imagine, any text on our site can be spoken out loud, providing a more accessible and enjoyable experience for everyone. Explore our website and let this handy tool open up a new world of effortless listening!`,
            trigger: '11',
          },
          {
            id: '15',
            message: 'Which feature do you want to learn about?',
            trigger: '16',
          },
          {
            id: '16',
            options: [
              { value: 1, label: 'Dyslexia Reader', trigger: '17' },
              { value: 2, label: 'Sign Detection', trigger: '18' },
              { value: 3, label: 'Exit', trigger: '10'},
            ],
          },
          {
            id: '17',
            message: `Dyslexia Reader feature, specially designed to make reading a breeze. With this tool, the text transforms into a dyslexia-friendly format, featuring fonts and spacing that are easier to read. It's like having a customized reading experience tailored just for you. Whether it's articles, stories, or information on our site, the Dyslexia Reader ensures a more comfortable and enjoyable reading journey.`,
            trigger: '15',
          },
          {
            id: '18',
            message: `This amazing tool recognizes sign language gestures through your device's camera, instantly translating them into written or spoken words. It's like having a virtual interpreter, making our content more inclusive for the Deaf and Hard of Hearing community. So, whether it's a video or any visual content, our Sign Language Detection ensures everyone can engage effortlessly.`,
            trigger: '15',
          },
        ]}
      />
    </ThemeProvider>
  );
}

export default SimpleForm;