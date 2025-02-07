
import { FaHome } from 'react-icons/fa';
import { FaInfoCircle } from 'react-icons/fa';
import { MdContactMail } from 'react-icons/md';

export default function Home() {
  return (
    <div>
      <h1 className='text-3xl'>TheDevila</h1>
      <div>
        <div className='flex flex-row gap-1 items-center'>
          <FaHome />
          <li>Home</li>
        </div>
        <div className='flex flex-row gap-1 items-center'>
          <FaInfoCircle />
          <li>About</li>
        </div>
        <div className='flex flex-row gap-1 items-center'>
          <MdContactMail />
          <li>Contact</li>
        </div>
        <div className='flex flex-row gap-1 items-center'>
          <FaHome />
          <li>Home</li>
        </div>
      </div>
      <div></div>
    </div>
  );
}
