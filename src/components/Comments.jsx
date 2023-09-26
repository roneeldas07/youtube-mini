import React from "react";
import face from "./../assets/face.svg";

const Comments = (props) => {
  const renderComments = (comments) => {
    return comments.map((comment) => {
      if (comment?.replies?.length == 0) {
        return (
          <Comment
            key={comment.id}
            comment={comment.comment}
            author={comment.author}
          />
        );
      } else {
        return (
          <>
            <Comment
              key={comment.id}
              comment={comment.comment}
              author={comment.author}
            />
            <div className="pl-5 border-l-2 border-solid border-gray-700">
              {renderComments(comment.replies)}
            </div>
          </>
        );
      }
    });
  };
  return (
    <div>
      <div className="font-bold text-lg">Comments</div>
      <div>{renderComments(static_comment_data)}</div>
    </div>
  );
};

const Comment = ({ comment, author }) => {
  return (
    <div className="flex gap-3 bg-slate-200 rounded-xl p-2 my-1 mr-1">
      <img src={face} className="w-6" />
      <div className="flex flex-col">
        <span className="font-bold">{author}</span>
        <span>{comment}</span>
      </div>
    </div>
  );
};

export default Comments;

var static_comment_data = [
  {
    id: "1",
    author: "Cristiano Ronaldo",
    comment: "Awesome project, bro!",
    replies: [
      {
        id: "1a",
        author: "Rajneesh",
        comment: "Thank You, my friend",
        replies: [],
      },
      {
        id: "1b",
        author: "Wayne Rooney",
        comment: "Cristiano, you can say more and better things than that",
        replies: [
          {
            id: "1b1",
            author: "Marcus Rashford",
            comment: "Lol Wazza, I'm coming for your United Goalscoring record",
            replies: [],
          },
          {
            id: "1b2",
            author: "Rajneesh",
            comment: "Haha, loving this banter",
            replies: [],
          },
          {
            id: "1b3",
            author: "Cristiano Ronaldo",
            comment:
              "Shut up! I'm still a player and you are already a manager.",
            replies: [],
          },
        ],
      },
      {
        id: "1c",
        author: "Sadio Mane",
        comment: "Bro!! Come for practice and teach me your new celebration",
        replies: [],
      },
    ],
  },
  {
    id: "2",
    author: "Nezuko Kamado",
    comment: "すごいね",
    replies: [],
  },
  {
    id: "3",
    author: "Monkey D. Luffy",
    comment: "hahaha!! What is this?!?! Hahahahaha",
    replies: [
      {
        id: "3a",
        author: "Nami",
        comment:
          "Oi Luffy!! Get back to the ship, we need to leave for the Grand Line!!",
        replies: [
          {
            id: "3a1",
            author: "Sanji",
            comment:
              "Nami chan!! I have prepared dessert for you. Will bring it up to you in a minute",
            replies: [],
          },
        ],
      },
      {
        id: "3b",
        author: "Zoro",
        comment: "This Idiot!! Why did I have to join THIS GUY'S crew?!?!",
        replies: [],
      },
      {
        id: "3c",
        author: "Usopp",
        comment: "This is my project!! hahahaha!!",
        replies: [],
      },
    ],
  },
];
