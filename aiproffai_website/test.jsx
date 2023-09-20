const MyComponent = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  return (
    <div>
      <div className="flex space-x-4">
        <div className="relative"> {/* Add this wrapper for positioning */}
          <div
            className="flex flex-col items-center text-center hover:text-blue-500 cursor-pointer"
            onClick={() => setDropdownVisible(!dropdownVisible)}
          >
            <FontAwesomeIcon
              icon={faShare}
              className="hover:text-blue-500 cursor-pointer"
            />
            <span className="text-sm">Share</span>
          </div>

          {dropdownVisible && (
            <div className="absolute top-full mt-2 w-48 border rounded shadow-lg bg-white z-10"> {/* Adjusted for positioning and z-index */}
              <div className="py-1 hover:bg-blue-100 cursor-pointer">Item 1</div>
              <div className="py-1 hover:bg-blue-100 cursor-pointer">Item 2</div>
              <div className="py-1 hover:bg-blue-100 cursor-pointer">Item 3</div>
              <div className="py-1 hover:bg-blue-100 cursor-pointer">Item 4</div>
            </div>
          )}
        </div>

        <div className="flex flex-col items-center text-center hover:text-blue-500 cursor-pointer">
          <FontAwesomeIcon
            icon={faPrint}
            className="hover:text-blue-500 cursor-pointer"
          />
          <span className="text-sm">Print</span>
        </div>

        <Link
          to="https://ingestionpeekai.s3.amazonaws.com/Synthetic+data+for+enterprises_ebook_2023_August.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex flex-col items-center text-center hover:text-blue-500 cursor-pointer">
            <FontAwesomeIcon
              icon={faDownload}
              className="hover:text-blue-500 cursor-pointer"
            />
            <span className="text-sm">Download</span>
          </div>
        </Link>

        <div className="flex flex-col items-center text-center hover:text-blue-500 cursor-pointer">
          <FontAwesomeIcon
            icon={faSave}
            className="hover:text-blue-500 cursor-pointer"
          />
          <span className="text-sm">Save</span>
        </div>
      </div>
    </div>
  );
}

export default MyComponent;
