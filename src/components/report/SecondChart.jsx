import React from 'react';
import { FiSettings } from 'react-icons/fi';
import { FaDotCircle } from 'react-icons/fa'
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';

const SecondChart = () => {
    const data = [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 },

    ];

    const COLORS = ['#E5B300', '#0094FF', '#8EE500'];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    return (
        <div style={{ width: '100%', height: 260 }} className='relative'>
            <div className='p-5 flex justify-between'>
                <h1 className='uppercase font-semibold text-gray-500'>Top Catagories</h1>
                <FiSettings className='w-6 h-6 text-gray-600'></FiSettings>
            </div>
            <ResponsiveContainer width="70%" height="70%" className='mx-auto'>
                <PieChart width={400} height={400}>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
            <div className='flex justify-between items-center absolute top-72 w-3/4 right-10'>
                <div className='flex gap-1 items-center'>
                    <FaDotCircle className='text-amber-500 w-5 h-5 '></FaDotCircle>
                    <p className='uppercase text-md font-semibold'>Item 1</p>
                </div>
                <div className='flex gap-1 items-center'>
                    <FaDotCircle className='text-lime-600 w-5 h-5 pr-1'></FaDotCircle>
                    <p className='uppercase text-md font-semibold'>Item 2</p>
                </div>
                <div className='flex gap-1 items-center'>
                    <FaDotCircle className='text-blue-700 w-5 h-5'></FaDotCircle>
                    <p className='uppercase text-md font-semibold'>Item 3</p>
                </div>
            </div>
        </div>
    );
};

export default SecondChart;