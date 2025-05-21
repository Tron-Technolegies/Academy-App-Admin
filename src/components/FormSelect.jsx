export default function FormSelect({
  title,
  value,
  onChange,
  list,
  multi,
  displayField,
  error,
}) {
  return (
    <div className="form-row pt-2 pb-4 flex flex-col">
      {" "}
      {/* make flex-col for vertical stacking */}
      <label
        htmlFor={title}
        className="form-label text-[#8A8A8A] font-semibold mb-2" // margin bottom for spacing
      >
        {title}
      </label>
      <select
        id={title}
        value={value}
        multiple={multi ? true : false}
        onChange={onChange}
        className={`rounded-sm bg-[#F5F5F5] border border-gray-300 text-[#030229] text-md py-1 px-2 focus:outline-none w-full ${
          multi ? "h-40" : "h-11"
        } ${error ? "border-red-500 bg-red-50" : ""}`}
      >
        <option value="" disabled>
          Select {title}
        </option>
        {list?.map((item) => {
          let displayText = item;
          if (typeof item === "object") {
            displayText = item[displayField] || Object.values(item).join(", ");
          }
          return (
            <option key={item._id || item} value={item._id || item}>
              {displayText}
            </option>
          );
        })}
      </select>
    </div>
  );
}
