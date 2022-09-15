import React from 'react';

type Props = {
  rating: number;
};

const Stars = ({ rating }: Props) => {
  const progressBar = (rating / 5) * 100 + '%';

  return (
    <div className="relative inline-block before:content-['★★★★★'] before:text-2xl before:text-[#ccc]">
      <div
        className={`absolute top-0 left-0 whitespace-nowrap overflow-hidden w-[${progressBar}] before:text-2xl before:content-['★★★★★'] before:text-[#f8ce0b]`}
      ></div>
    </div>
  );
};

export default Stars;
