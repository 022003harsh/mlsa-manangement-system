import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

interface LeadProps {
    member: any; // Replace 'any' with the actual type of your member data
  }
  
  const Lead: React.FC<LeadProps> = ({ member }) => {
    
    return (
      <div className='shadow-custom p-[1rem] flex justify-between items-center rounded-[0.5rem]'>
        <div className='flex space-x-[0.8rem] items-center'>
            <div className='relative w-[3.2rem] h-[3.2rem] rounded-full bg-white shadow-custom'>
                <Image 
                 src={member.iconURL ?? ''}
                 alt="Lead Image"
                 width="28"  
                 height="28" 
                 className={`w-[2.8rem] h-[2.8rem] absolute left-[0.2rem] top-[0.2rem]`}/>
            </div>
            
             <div className='flex flex-col leading-[1.4rem]'>
                <p className='text-[1rem] font-medium'>{member.name}</p>
                <p className='text-[1rem] font-semibold text-[#94A3B8]'>{member.position}</p>
             </div>
        </div>
        <Link href={member.path}>
            <Image 
            src="/icon/right.svg"
            alt="icon Image"
            width="6"  
            height="15" 
            className={`w-[0.6rem] h-[1.5rem]`}/>
        </Link>
        
        
      </div>
    );
  };

export default Lead
