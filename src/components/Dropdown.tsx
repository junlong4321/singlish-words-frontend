import { FormControl, InputLabel, NativeSelect } from "@mui/material";

type DropdownProps = {
  required: boolean;
  inputLabel: string;
  value: string | string[];
  name: string;
  listData: string[] | number[];
  handleChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

export const Dropdown = ({
  required,
  inputLabel,
  value,
  name,
  listData,
  handleChange,
}: DropdownProps) => {
  return (
    <FormControl required={required}>
      <InputLabel variant="standard" htmlFor="uncontrolled-native">
        {inputLabel}
      </InputLabel>
      <NativeSelect value={value} name={name} onChange={handleChange}>
        <option value="" />
        {listData.map((item) => (
          <option key={item} value={item}>
            {/* If user is of age less than 18 or greater than 81, classify them under Less Than 18/More Than 80*/}
            {name === "age" && item < 18
              ? "Less Than 18"
              : name === "age" && item > 80
              ? "More Than 80"
              : item}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};
