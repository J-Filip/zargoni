import Content from '@/layout/Content';

const App = () => {
  return (
    <div className="  flex bg-card">
      {/* Left-Side Navigation */}
      <nav className="bg-gray-900 text-white p-4  sticky top-0 h-screen sm:block hidden  ">
        <ul>
          <li className="p-2">Item</li>
          <li className="p-2">Item</li>
          <li className="p-2">Item</li>
          <li className="p-2">Item</li>
        </ul>
      </nav>
      {/* Bottom Navigation */}
      <nav className="bg-gray-900 text-white p-4 fixed  bottom-0 left-0 right-0 sm:hidden ">
        <ul className="flex flex-row justify-around ">
          <li className="p-2">Item </li>
          <li className="p-2">Item </li>
          <li className="p-2">Item </li>
          <li className="p-2">Item </li>
        </ul>
      </nav>
      {/* Content */}
      <div className=" flex-grow max-w-screen-xl mx-auto h-screen px-8 py-4 ">
        <Content />
      </div>
    </div>
  );
};

export default App;
