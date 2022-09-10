import React from "react";

function TestS(props: any) {
  const users = [
    {
      id: 1,
      name: "John",
      image: "/profilePics/01.jpg"
    },
    {
      id: 2,
      name: "Marie",
      image: "/profilePics/02.jpg"
    },
    {
      id: 3,
      name: "David",
      image: "/profilePics/03.jpg"
    },
    {
      id: 4,
      name: "Sarah",
      image: "/profilePics/04.jpg"
    },
    {
      id: 5,
      name: "Mario",
      image: "/profilePics/05.jpg"
    },
    {
      id: 6,
      name: "John",
      image: "/profilePics/06.jpg"
    },
    {
      id: 7,
      name: "Marie",
      image: "/profilePics/07.jpg"
    },
    {
      id: 8,
      name: "David",
      image: "/profilePics/08.jpg"
    },
    {
      id: 9,
      name: "Sarah",
      image: "/profilePics/09.jpg"
    },
    {
      id: 10,
      name: "Mario",
      image: "/profilePics/10.jpg"
    },
    {
      id: 11,
      name: "Sarah",
      image: "/profilePics/11.jpg"
    },
    {
      id: 12,
      name: "Mario",
      image: "/profilePics/12.jpg"
    }
  ];

  return (
    <div className={`container mx-auto ${props.className}`}>
      <div className="grid grid-rows-3 grid-cols-4 gap-4">
        {users.map((user) => {
            return (
              <img src={user.image} className="w-64 h-64 rounded-lg mx-auto" alt={user.name}/>
            );
          }
        )}
      </div>
    </div>
  );
}

export default TestS;
