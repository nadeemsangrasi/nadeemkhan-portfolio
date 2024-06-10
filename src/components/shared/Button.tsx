const Button = ({ title }: { title: string }): React.JSX.Element => {
  return (
    <button className="px-4 py-2 my-7 font-semibold rounded-full  bg-primary-white text-primary-black">
      {title}
    </button>
  );
};

export default Button;
