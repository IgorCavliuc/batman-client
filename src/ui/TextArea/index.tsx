const TextArea = ({ field, form, valuesName }: any) => {
  const handleChange = (value: any) => {
    form.setFieldValue(field.name, value?.target?.value);
  };
  return (
    <div>
      <textarea onChange={handleChange} id=""></textarea>
    </div>
  );
};

export default TextArea;
