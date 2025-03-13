interface IChecboxProps {
  id: string;
  name: string;
  label: string;
}

export function Checkbox({ id, name, label }: IChecboxProps) {
  return (
    <div>
      <input type="checkbox" id={id} name={name} />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}
