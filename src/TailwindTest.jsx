// client/test/TailwindTest.js

const TailwindTest = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center text-center p-4">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Tailwind CSS Test</h1>
      <p className="text-lg text-gray-700">
        If you can see this styled message, Tailwind CSS is working correctly!
      </p>
      <button className="mt-6 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition">
        Click Me
      </button>
    </div>
  );
};

export default TailwindTest;
