import React from 'react'
import { RiTimerFill } from 'react-icons/ri';
import { useStopwatch } from 'react-timer-hook'

function StopWatch() {
    const {
        seconds,
        minutes,
        hours,
        isRunning,
        start,
        pause,
        reset,//reset(offsetSeconds = 0, autoStart = false) offsetSeconds - where the stopwatch should reset to.autoStart - whether it should start immediately
    } = useStopwatch({ autoStart: false, interval: 1000 });

    const format = (num) => String(num).padStart(2, '0');//to get time as 00:00:00

    return (
        <div className='w-52 h-16 border rounded-2xl bg-[#0f311c]/50  border-[#13ec6a]/30 flex justify-center gap-5 p-3 items-center'>
            <div className='flex justify-center items-center gap-2'>
                <div className='rounded-full p-2 bg-black/60' onClick={()=>reset(0,false)}><RiTimerFill className='text-[#13ec6a]' /></div>
                <div className='flex flex-col font-semibold'>
                    <div className='text-gray-500 text-xs'>TIMER</div>
                    <div className='text-sm text-white'>{format(hours)}:{format(minutes)}:{format(seconds)}</div>
                </div>
            </div>
            <div className='w-2 h-7 border border-gray-600'></div>
            <div className=''>
                <button className='bg-[#13ec6a] px-3 py-1 rounded-2xl font-medium text-sm cursor-pointer'
                    onClick={isRunning ? pause : start}
                >{isRunning ? 'Pause' : 'Start'}</button>
            </div>
        </div>
    )
}

export default StopWatch