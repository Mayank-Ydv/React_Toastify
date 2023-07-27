import React from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";
const Card = (props) => {
  let course = props.course;
  let likedCourses = props.likedCourses;
  let setLikedCourses = props.setLikedCourses;

  function clickHandler() {
    //logic
    if (likedCourses.includes(course.id)) {
      //pehle se like hua pada tha
      setLikedCourses((prev) => prev.filter((cid) => cid !== course.id));
      toast.warning("like removed");
    } else {
      //pehle se like nahi hai ye course
      //insert karna h ye course liked courses me
      if (likedCourses.length === 0) {
        setLikedCourses([course.id]);
      } else {
        //non-empty pehle se
        setLikedCourses((prev) => [...prev, course.id]);
      }
      toast.success("Liked Successfully");
    }
  }
  return (
    <div className="w-[300px] bg-bgDark rounded-sm  overflow-hidden ">
      <div className="relative">
        <img src={course.image.url} width="300px"/>
        <div className="absolute bg-white rounded-full  w-[40px] h-[40px] right-2 bottom-[-12px] item-center flex justify-center ">
          <button
            className="justify-center flex items-center"
            onClick={clickHandler}
          >
            {likedCourses.includes(course.id) ? (
              <FcLike fontSize="1.75rem" />
            ) : (
              <FcLikePlaceholder fontSize="1.75rem" />
            )}
          </button>
        </div>
      </div>

      <div className="w-[300px] text-white mt-4 p-3">
        <p className="font-bold">{course.title}</p>
        <p className="mt-3">{course.description.length>100? (course.description.substr(0,100)+"..."):(course.description)
        }</p>
      </div>
    </div>
  );
};

export default Card;
