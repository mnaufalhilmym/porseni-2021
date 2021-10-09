import TimelineLine from "./TimelineLine";

export default function TimelineLeft(props) {
  return (
    <div className="flex flex-row-reverse md:contents">
      <div className="bg-yellow-300 text-yellow-500 font-sansPro bg-opacity-10 backdrop-filter backdrop-blur col-start-1 col-end-5 p-4 rounded-xl my-4 md:ml-auto md:mr-0 mr-auto shadow-md">
        <div>
          <p className="font-semibold text-xl mb-2 md:text-right">
            {props.date}
          </p>
          <p className="leading-tight text-justify font-bold text-lg md:text-xl mb-1 md:text-right ">
            {props.title}
          </p>
        </div>
      </div>
      <TimelineLine />
    </div>
  );
}
