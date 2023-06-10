import Checkbox from "@mui/material/Checkbox";


interface StarProps {
  id: string;
  checked: boolean;
  onCheckboxChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  "data-testid"?: string;
}

const Star: React.FC<StarProps> = (props: StarProps) => {
  return (
    <Checkbox
      // icon={<UnFilledStar />}
      // checkedIcon={<FilledStar />}
      onChange={props.onCheckboxChange}
      id={props.id}
      checked={props.checked}
      data-testid="star-checkbox"
    />
  );
};

export default Star;
