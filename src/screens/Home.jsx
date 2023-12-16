import { Navbar } from "../components/Navbar";
import logo from '../utils/Cartoon_Vecor_Illustration_Disabled_People_Care_Stock_Vector__Royalty_Free__1404298742___Shutterstock-removebg-preview.png'

export const Home = () => {
  return (
    <div className='bg-green-200 min-h-screen'>
      <Navbar />
      <div className='flex flex-row justify-between items-center h-[90vh] home' style={{padding:"0px 100px 0px 100px"}}>
        <div className='flex flex-col justify-between items-center px-5 my-4'>
          <h1 className='mt-10 mb-10 ml-10 mr-15 text-5xl font-bold'>Believe you can and you’re halfway there.</h1>
          <h1 className='mt-6 mr-15 text-gray-700 text-xl font-semibold w-[50vw]'>Your success and happiness lies in you. Resolve to keep happy, and your joy and you shall form an invincible host against difficulties.</h1>
        </div>
        <img className='20w-[30vw] transi' src={logo} alt="logo" />
      </div>
    </div>
  )
}
