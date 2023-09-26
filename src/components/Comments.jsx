import React from "react";
import face from "./../assets/face.svg";

const Comments = (props) => {
  const renderComments = (comments) => {
    return comments.map((comment) => {
      if (comment?.replies?.length == 0) {
        return <Comment comment={comment.comment} author={comment.author} />;
      } else {
        return (
          <>
            <Comment comment={comment.comment} author={comment.author} />
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
    author: "RKD",
    comment: "Awesome project, bro!",
    replies: [
      {
        author: "RKD",
        comment: "Awesome project, bro!",
        replies: [],
      },
      {
        author: "RKD",
        comment: "Awesome project, bro!",
        replies: [
          {
            author: "RKD",
            comment: "Awesome project, bro!",
            replies: [],
          },
          {
            author: "RKD",
            comment: "Awesome project, bro!",
            replies: [],
          },
          {
            author: "RKD",
            comment: "Awesome project, bro!",
            replies: [],
          },
        ],
      },
      {
        author: "RKD",
        comment: "Awesome project, bro!",
        replies: [],
      },
    ],
  },
  {
    author: "RKD",
    comment: "Awesome project, bro!",
    replies: [],
  },
  {
    author: "RKD",
    comment: "Awesome project, bro!",
    replies: [
      {
        author: "RKD",
        comment: "Awesome project, bro!",
        replies: [],
      },
      {
        author: "RKD",
        comment: "Awesome project, bro!",
        replies: [],
      },
      {
        author: "RKD",
        comment: "Awesome project, bro!",
        replies: [],
      },
    ],
  },
];
