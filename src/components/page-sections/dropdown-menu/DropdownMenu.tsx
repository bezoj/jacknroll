import { FlexColumn } from "../../containers";

export function DropdownMenu() {
  return (
    <FlexColumn className="hidden sm:flex justify-evenly gap-12">
      <DropdownMenu />
    </FlexColumn>
  );
}
