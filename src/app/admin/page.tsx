import SecondChart from "@/components/report/SecondChart";
import Table from "@/components/report/Table";
import Tax from "@/components/report/Tax";
import MainChart from "@/components/report/mainChart";
import Order from "@/components/report/order";
import Review from "@/components/report/Review";
import Sale from "@/components/report/sale";
import Progress from '@/components/report/Progress'

const page = () => {
    return (
        <div className='w-full my-2'>
            <div className='grid lg:grid-cols-4 grid-cols-1 lg:pl-0 pl-5 gap-x-4 gap-y-2'>
                <div className='bg-gray-200 h-36 rounded-md hover:bg-slate-300 duration-300'>
                    <Sale></Sale>
                </div>
                <div className='bg-gray-200 h-36  rounded-md hover:bg-slate-300 duration-300'>
                    <Order></Order>
                </div>
                <div className='bg-gray-200 h-36  rounded-md hover:bg-slate-300 duration-300'>
                    <Review></Review>
                </div>
                <div className='bg-gray-200 h-36  rounded-md hover:bg-slate-300 duration-300'>
                    <Tax></Tax>
                </div>
            </div>
            <div className='flex lg:flex-row flex-col lg:pl-0 pl-5 gap-x-4 mt-4 gap-y-2'>
                <div className='h-80 bg-gray-200 rounded-lg w-full'>
                    <MainChart></MainChart>
                </div>
                <div className='h-80 bg-gray-200 rounded-lg lg:w-2/5 w-full'>
                    {/* <SecondChart></SecondChart> */}
                </div>
            </div>
            <div className='flex lg:flex-row flex-col lg:pl-0 pl-5 gap-y-2 mt-4 gap-x-4'>
                <div className=' bg-gray-200 rounded-lg w-full'>
                    <Table></Table>
                </div>
                <div className='h-96 bg-gray-200 rounded-lg lg:w-2/5 w-full'>
                    <Progress></Progress>
                </div>
            </div>
        </div>
    );
};

export default page;