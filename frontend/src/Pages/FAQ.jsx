import React,{useState} from 'react';
import arrow from '../Images/icon-arrow-down.svg';
import bgM from '../Images/bg-pattern-mobile.svg';
import bgD from '../Images/bg-pattern-desktop.svg';
import mobile from '../Images/illustration-woman-online-mobile.svg';
import desktop from '../Images/illustration-woman-online-desktop.svg';
import box from '../Images/illustration-box-desktop.svg';

function FAQ() {
  const [expand1, setExpand1] = useState(false);
  const [expand2, setExpand2] = useState(false);
  const [expand3, setExpand3] = useState(false);
  const [expand4, setExpand4] = useState(false);
  const [expand5, setExpand5] = useState(false);


  return (    
    <div className="wrapper w-full h-full">
{/* Card */}
    <div className="card bg-white text-[color:var(--vddBlue)] rounded-3xl
    m-auto mt-[12rem] p-1 w-[375px] h-auto grid grid-cols-1  
    md:grid-cols-2 md:w-[1440px]">

{/* Column 1 */}
    <div className="grid ">
      {/* className="md:test-device-xl" */}
      {/* <img src={mobile} className='scale-75 md:hidden' alt='' /> */}
      <img src={desktop} className='hidden md:block scale-150 translate-y-[15 rem] translate-x-[10rem] object-none object-right h-[35rem] w-[24rem] mt-[-15rem] mb-[-10rem] z-[99]' alt='' />
      {/* <img src={ bgM } className='relative translate-y-[-7rem] translate-x-[4rem] scale-125 md:hidden'  alt="" /> */}
      {/* <img src={ bgD } className='hidden md:grid relative scale-[1.75] mb-[-12rem] translate-y-[-17rem] translate-x-[-25rem] z-[98] ' alt="" /> */}
      {/* <img src={ box } className='hidden md:grid mb-[-15rem] translate-y-[-27rem] translate-x-[-6rem] z-[100] hover:translate-x-[-8rem] transition-all ease-in-out' alt="" /> */}
    </div>

{/* Column 2 */}
      <div className="faq grid self-center justify-center mt-[-5rem] md:mt-0">
        <h1 className="p-4 text-3xl font-bold flex self-center justify-center ">FAQ</h1>

        <div className='p-4'>
          <div className="faq__1 flex justify-between hover:cursor-pointer hover:text-[color:var(--sRed)]" onClick={()=>setExpand1(!expand1)}>
            <p className={(expand1 ? 'font-bold' : '' )}>How many team members can I invite?</p>
            <img className={"self-center" + (expand1 ? ' rotate-180 transition ease-in-out duration-300' : '')} src={ arrow } alt="" />
          </div>
          <div className='pr-3 pt-2'>
            <p className={(expand1 ? 'answer h-full transition-[height] ease-in-out duration-300 ' : ' overflow-hidden h-0 ' )}>
              You can invite up to 2 additional users on the Free plan. 
              There is no limit on team members for the Premium plan.
            </p>
          </div>
        </div>
        <div className='border-b-2 border-[color:var(--lgBlue)] m-4'></div>

        <div className='p-4'>
          <div className="faq__2 flex justify-between hover:cursor-pointer hover:text-[color:var(--sRed)]" onClick={()=>setExpand2(!expand2)}>
            <p className={(expand2 ? 'font-bold' : '' )}>What is the maximum file upload size?</p>
            <img className={"self-center" + (expand2 ? ' rotate-180 transition ease-in-out duration-300' : '')} src={ arrow } alt="" />
          </div>
          <div className='pr-3 pt-2'>
            <p className={(expand2 ? 'answer h-full transition-[height] ease-in-out duration-300 ' : ' overflow-hidden h-0 ' )}>
            No more than 2GB. 
            All files in your account must fit your allotted storage space.
            </p>
          </div>
        </div>
        <div className='border-b-2 border-[color:var(--lgBlue)] m-4'></div>

        <div className='p-4'>
          <div className="faq__3 flex justify-between hover:cursor-pointer hover:text-[color:var(--sRed)]" onClick={()=>setExpand3(!expand3)}>
            <p className={(expand3 ? 'font-bold' : '' )}>How do I reset my password?</p>
            <img className={"self-center" + (expand3 ? ' rotate-180 transition ease-in-out duration-300' : '')} src={ arrow } alt="" />
          </div>
          <div className='pr-3 pt-2'>
            <p className={(expand3 ? 'answer h-full transition-[height] ease-in-out duration-300 ' : ' overflow-hidden h-0 ' )}>
            Click “Forgot password” from the login page or “Change password” from your profile page. 
            A reset link will be emailed to you.
            </p>
          </div>
        </div>
        <div className='border-b-2 border-[color:var(--lgBlue)] m-4'></div>
          

        <div className='p-4'>
          <div className="faq__4 flex justify-between hover:cursor-pointer hover:text-[color:var(--sRed)]" onClick={()=>setExpand4(!expand4)}>
            <p className={(expand4 ? 'font-bold' : '' )}>Can I cancel my subscription?</p>
            <img className={"self-center" + (expand4 ? ' rotate-180 transition ease-in-out duration-300' : '')} src={ arrow } alt="" />
          </div>
          <div className='pr-3 pt-2'>
            <p className={(expand4 ? 'answer h-full transition-[height] ease-in-out duration-300 ' : ' overflow-hidden h-0 ' )}>
            Yes! Send us a message and we’ll process your request no questions asked.
            </p>
          </div>
        </div>
        <div className='border-b-2 border-[color:var(--lgBlue)] m-4'></div>
          

        <div className='p-4'>
          <div className="faq__5 flex justify-between hover:cursor-pointer hover:text-[color:var(--sRed)]" onClick={()=>setExpand5(!expand5)}>
            <p className={(expand5 ? 'font-bold' : '' )}>Do you provide additional support?</p>
            <img className={"self-center" + (expand5 ? ' rotate-180 transition ease-in-out duration-300' : '')} src={ arrow } alt="" />
          </div>
          <div className='pr-3 pt-2'>
            <p className={(expand5 ? 'answer h-full transition-[height] ease-in-out duration-300 ' : ' overflow-hidden h-0 ' )}>
            Chat and email support is available 24/7. 
            Phone lines are open during normal business hours.
            </p>
          </div>
        </div>
        <div className='border-b-2 border-[color:var(--lgBlue)] m-4'></div>
          
      </div>
    </div>
    </div>
  );
}

export default FAQ;
