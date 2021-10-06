import TimelineLine from "./TimelineLine";

export default function TimelineRight(props) {
  return (
    <div className="flex md:contents">
      <TimelineLine />
      <div className="bg-yellow-300 text-yellow-500 font-sans bg-opacity-10 col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md">
        <div>
          <p className={`font-semibold text-xl mb-2`}>{props.date}</p>
          <p
            className={`leading-tight text-justify font-bold text-lg md:text-xl mb-1`}
          >
            {props.title}
          </p>
        </div>
      </div>
    </div>
  );
}
