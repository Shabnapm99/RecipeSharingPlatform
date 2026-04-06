import React from 'react'

function AnalyticsCard({ title, value }) {
    return (
        <div className="bg-[#0a2a18] p-5 rounded-2xl">
            <p className="text-gray-400 text-sm">{title}</p>
            <h3 className="text-2xl font-bold mt-2">{value}</h3>
        </div>
    )
}

export default AnalyticsCard