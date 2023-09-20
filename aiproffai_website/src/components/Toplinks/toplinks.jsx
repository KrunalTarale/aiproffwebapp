const TopLinks = () => {
  return (
    <div className="absolute top-2 right-4 space-x-4 text-sm">
      <a href="/signin" className="text-blue-600 hover:underline">
        Sign In
      </a>
      <span className="text-black">|</span>
      <a href="/subscribe" className="text-blue-600 hover:underline">
        Subscribe
      </a>
    </div>
  );
};

export default TopLinks;
