interface ChildProps {
  color: String;
  onClick: () => void;
}

// export const Child = (props: ChildProps) => {
//   return <div>Hi There</div>;
// };

export const Child = ({ color, onClick }: ChildProps) => {
  return (
    <div>
      {color}
      <button onClick={onClick}>Click me</button>
    </div>
  );
};

// to get additional React properties like displayName use this approach
export const ChildAsFC: React.FC<ChildProps> = ({ color, onClick }) => {
  return (
    <div>
      {color}
      <button onClick={onClick}>Click me</button>
    </div>
  );
};
