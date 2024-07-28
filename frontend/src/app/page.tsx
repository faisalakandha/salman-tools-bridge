import SectionHeader from '@/components/SectionHeader';
import UserDashboard from '@/components/UserDashboard';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="">

      <SectionHeader name={"Dashboard"} />

      <UserDashboard />

      <div className='flex items-center justify-between pr-28'>
        <SectionHeader name={'Ongoing Subscription(s)'} />
        <input style={{paddingLeft: '25px', background: 'url("https://static.thenounproject.com/png/101791-200.png") no-repeat left', backgroundSize: '20px', backgroundColor:'white'}} type='text' className='py-1 px-2' placeholder='Search Filter' />
      </div>

      <div className='grid grid-cols-4 px-8 gap-x-8'>

        <Link href={''} className=''>
          <div className='flex items-center flex-col justify-center bg-white h-[150px]'>
            <img className='w-full h-[100px]' src="/images/tools/free.png" />
          </div>
          <p className='flex items-center justify-center p-1 bg-[#4A5262] text-white'>Access FreePik</p>
        </Link>

        <Link href={''} className=''>
          <div className='flex items-center flex-col justify-center bg-white h-[150px]'>
            <img className='w-full h-[100px]' src="/images/tools/envato.png" />
          </div>
          <p className='flex items-center justify-center p-1 bg-[#4A5262] text-white'>Access Envato</p>
        </Link>

        <Link href={''} className=''>
          <div className='flex items-center flex-col justify-center bg-white h-[150px]'>
            <img className='w-full h-[100px]' src="/images/tools/semrush.png" />
          </div>
          <p className='flex items-center justify-center p-1 bg-[#4A5262] text-white'>Access Semrush</p>
        </Link>

        <Link href={''} className=''>
          <div className='flex items-center flex-col justify-center bg-white h-[150px]'>
            <img className='w-full h-[100px]' src="/images/tools/uk.png" />
          </div>
          <p className='flex items-center justify-center p-1 bg-[#4A5262] text-white'>Free Access ToolsMean</p>
        </Link>

      </div>
    </div>
  );
}
