import Image from 'next/image';
import spinnerPng from '@/public/spinner.png'

export function Spinner(){
  return(
    <div className='flex flex-col items-center justify-center bg-white/80 z-10'>
      <div>
        <Image src={spinnerPng} alt='loading' className='w-10 h-10 animate-spin'/>
        <span>Loading...</span>
      </div>
    </div>
  );
}