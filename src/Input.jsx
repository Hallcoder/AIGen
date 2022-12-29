
function Input({ label, name, value, onChange, placeholder,className }) {
   const required = <strong className="text-red-400 m-2">*</strong>;
  return (
    <div className="flex flex-col w-full items-center p-1 m-4 justify-around">
      <span className="w-full flex items-center justify-around">
        <h1 className="w-3/12 text-sm md:text-base">
          {required}
          {label}:
        </h1>
        <input
          type="text"
          name={name}
          onChange={onChange}
          placeholder={placeholder}
          className={className ? className:"w-7/12 h-8 border text-sm outline-blue-600 rounded-md hover:outline-blue-400 border-gray-200 indent-2"}
          required={true}
        />
      </span>
      
    </div>
  );
}

export default Input;
