import React from "react";

import FormSelect from "./FormSelect";
import { MdDeleteOutline } from "react-icons/md";
import FormInput from "./FromInput";

const QuestionItem = ({
  questionData,
  index,
  onChange,
  onRemove,
  canRemove,
}) => {
  const handleChange = (field, value) => {
    onChange(index, field, value);
  };

  return (
    <div className="p-4 mb-4 rounded space-y-3 bg-gray-50">
      <FormInput
        label={`Question ${index + 1}`}
        type="text"
        value={questionData.question}
        onChange={(e) => handleChange("question", e.target.value)}
      />
      <FormInput
        label="Option 1"
        value={questionData.option1}
        onChange={(e) => handleChange("option1", e.target.value)}
      />
      <FormInput
        label="Option 2"
        value={questionData.option2}
        onChange={(e) => handleChange("option2", e.target.value)}
      />
      <FormInput
        label="Option 3"
        value={questionData.option3}
        onChange={(e) => handleChange("option3", e.target.value)}
      />
      <FormInput
        label="Option 4"
        value={questionData.option4}
        onChange={(e) => handleChange("option4", e.target.value)}
      />
      <FormSelect
        title="Answer"
        value={questionData.answer}
        onChange={(e) => handleChange("answer", e.target.value)}
        list={[
          { _id: "option1", optionName: "Option 1" },
          { _id: "option2", optionName: "Option 2" },
          { _id: "option3", optionName: "Option 3" },
          { _id: "option4", optionName: "Option 4" },
        ]}
        displayField="optionName"
      />

      {canRemove && (
        <button
          type="button"
          onClick={() => onRemove(index)}
          className="flex text-red-600 hover:underline"
        >
          <MdDeleteOutline className="text-red-600 text-2xl" /> Remove
        </button>
      )}
    </div>
  );
};

export default QuestionItem;
