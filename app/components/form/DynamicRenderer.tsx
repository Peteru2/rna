
import TextField from "./fields/TextFields";
import PhoneField from "./fields/PhoneField";
// import SelectField from "./fields/SelectField";
import TextAreaField from "./fields/TextArea";
// import TextAreaField from "./fields/TextAreaField";
// import CheckboxField from "./fields/CheckboxField";

interface DynamicFieldRendererProps {
  field: any;
  register: any;
  error?: any;
}

export default function DynamicFieldRenderer({
  field,
  register,
  error,
}: DynamicFieldRendererProps) {

  switch (field.type) {

    case "text":
      return (
        <TextField
          label={field.label}
          name={field.name}
          placeholder={field.placeholder}
          register={register}
          error={error}
        />
      );

    case "phone":
      return (
        <PhoneField
          label={field.label}
          name={field.name}
          placeholder={field.placeholder}
          register={register}
          error={error}
        />
      );

    case "textarea":
      return (
        <TextAreaField
          label={field.label}
          name={field.name}
          placeholder={field.placeholder}
          register={register}
          error={error}
        />
      );

    // case "select":
    //   return (
    //     <SelectField
    //       label={field.label}
    //       name={field.name}
    //       options={field.options}
    //       placeholder={field.placeholder}
    //       register={register}
    //       error={error}
    //     />
    //   );

    // case "checkbox":
    //   return (
    //     <CheckboxField
    //       label={field.label}
    //       name={field.name}
    //       register={register}
    //       error={error}
    //     />
    //   );

    default:
      return null;
  }
}