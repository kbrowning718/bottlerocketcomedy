import "./ScrollableSection.css";

export const ScrollableSection = ({ children, id }) => {
  return (
    <div className="scroll-container" id={id}>
      {children}
    </div>
  );
};
