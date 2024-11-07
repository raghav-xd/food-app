import React from 'react'

const MainTweet = () => {
  return (
    <div>
       <p className="font-bold pl-2 my-2">Username</p>
       <form className="border-b-2 pb-2">
           <textarea type="text" placeholder="What's happening" maxLength={280}
           className="bg-slate-200 rounded-lg w-full p-3"></textarea>

           <button className="bg-blue-400 text-white py-1 px-4 rounded-lg ml-auto my-2">Tweet</button>
       </form>

    </div>
  );
};

export default MainTweet
