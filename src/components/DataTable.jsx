import React from 'react'

const DataTable = ({ data }) => {
    return (
        <div className='p-10 w-screen'>
            <table className='table-fixed border w-full'>
                <thead>
                    <tr className='bg-blue'>
                        {data && Object.keys(data[0]).slice(0, 9).map((item, index) => {
                            return (
                                <th className='p-2 uppercase font-bold border first:w-[40px] ' key={index}>
                                    {item}
                                </th>
                            )

                        })}
                    </tr>
                </thead>

                <tbody>
                    {data && data.map((user) => (

                        <tr className='first:bg-grey'>
                            {Object.values(user).slice(0, 9).map((value, index) => (
                                <td className='p-2 border' key={index}><span className='flex justify-center flex-wrap'>{value}</span></td>
                            ))}
                        </tr>

                    ))}


                </tbody>
            </table>
        </div>
    )
}

export default DataTable