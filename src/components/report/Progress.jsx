"use client"
import React, { useState } from 'react';

const Progress = () => {
    const [progress, setProgress] = useState()
    fetch('/data/Progress.json')
        .then(res => res.json())
        .then(data => setProgress(data))
    return (
        <div>
            <h1 className='text-center font-semibold uppercase mt-2'>Top Items</h1>
            <div className='mt-8 flex flex-col gap-y-1'>
                {
                    progress?.map(x => <div key={x.id} className='flex justify-between items-center w-[95%] p-1 rounded mx-auto bg-gray-300'>
                        <h1>{x.item}</h1>
                        <div className="radial-progress text-xs w-12 h-12 font-light text-gray-500" style={{ "--value": x.percent }}>{x.percent}%</div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Progress;