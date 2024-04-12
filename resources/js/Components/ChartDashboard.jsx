import React, { useContext, useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import moment from 'moment';
import UsersTable from './UsersTable';
import { useSearchBarContext } from '@/Context/SearchBarContext';
import { DarkModeContext } from '@/Context/DarkModeContext';

// ... (import statements)

// ... (import statements)

const ChartDashboard = ({ posts, users }) => {
    console.log(users);

    const { check, setCheck } = useSearchBarContext();
    const { darkMode } = useContext(DarkModeContext);
    const [postValue, setPostValue] = useState('');

    useEffect(() => {
        if(check === 'eng') {
            setPostValue('Posts')
        }else if(check === 'ar') {
            setPostValue('مقالات')
        }else if(check === 'fr') {
            setPostValue('Articles')
        }
    }, [check]);
    // Filter posts for the last 30 days
    const last30DaysPosts = posts.filter(post => moment(post.created_at).isAfter(moment().subtract(30, 'days')));

    // Group posts by day and count the number of posts on each day
    const groupedData = last30DaysPosts.reduce((acc, post) => {
      const day = moment(post.created_at).format('MMM DD');
      acc[day] = (acc[day] || 0) + 1;
      return acc;
    }, {});



    // Convert grouped data to an array
    const data = Object.keys(groupedData).map(day => ({
      day,
      Posts: groupedData[day] || 0,
    }));

    // Calculate the maximum number of posts in a single day
    const maxNumberOfPosts = Math.max(...Object.values(groupedData), 5); // Ensure a minimum of 5 ticks on the Y-axis

    const CustomTooltip = ({ active, payload, label }) => {
      if (active && payload && payload.length) {
        return (
          <div className={`${darkMode ? "bg-lightBg text-darkText" : "bg-darkText text-lightText"} custom-tooltip p-4  flex flex-col gap-3 rounded-md`}>
            <p className="text-medium text-md text-blue">{label}</p>
            <p className="text-medium text-md">
              <span>{payload[0].value + ' '}{postValue}</span>
            </p>
          </div>
        );
      }
      return null;
    };

    return (
        <div className='w-full border-b-[1px] border-gray-600'>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
            color: "#000000"
          }}
        >
          <CartesianGrid strokeWidth="0.05" horizontalPoints={false}  />
          <XAxis  dataKey="day"  />
          <YAxis domain={[0, 'dataMax']}  allowDecimals={false}  />
          <Tooltip content={<CustomTooltip />} />
          <Legend  />

          <Line type="monotone" dataKey={check === 'eng' ? 'Posts' : check === 'ar' ? 'مقالات' : check === 'fr' ? 'Articles' : null} stroke={darkMode ? '#f1f1f1' : "#0c0c0c"} activeDot={{ r: 8 }} dot={{ stroke: `${darkMode ? "#f1f1f1" : "#0c0c0c"} `, strokeWidth: `${darkMode ? 2 : 4} `, r: 4 }} />
        </LineChart>
      </ResponsiveContainer>
      <UsersTable users={users}/>
      </div>
    );
  };

  export default ChartDashboard;
