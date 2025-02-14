const Footer = () => {
  const name = "Richmond Addo Afari";
  return (
    <div className="absolute top-[800px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 p-4 rounded-md text-white">
      <p>{`Created with ❤️ by ${name}`}</p>
    </div>
  );
};

export default Footer;
