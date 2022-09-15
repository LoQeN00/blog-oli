import React from 'react';

type Props = {
  rating: number;
};

const Stars = ({ rating }: Props) => {
  const progressBar = (rating / 5) * 100 + '%';
  console.log(progressBar);

  return (
    <div className="relative inline-block before:content-['★★★★★'] before:text-3xl before:text-[#ccc]">
      <div
        className={`absolute top-0 left-0 whitespace-nowrap overflow-hidden before:text-3xl before:content-['★★★★★'] before:text-[#f8ce0b]`}
        style={{
          width: progressBar,
        }}
      ></div>
    </div>
  );
};

export default Stars;
