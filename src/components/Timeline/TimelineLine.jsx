export default function TimelineLine() {
  return (
    <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
      <div className="h-full w-8 flex items-center justify-center">
        <div className="h-full w-3 bg-yellow-500 pointer-events-none" />
      </div>
      <div className="w-8 h-8 absolute top-1/2 -mt-3 rounded-full bg-yellow-500 shadow" />
    </div>
  );
}
