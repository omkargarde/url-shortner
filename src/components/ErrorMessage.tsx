import ErrorCrossIcon from "../icons/ErrorCrossIcon";

const ErrorMessage = ({ message }: { message: string }) => {
  return (
    // <span role="alert" className="flex align-text-bottom text-red-600">
    //   <ErrorCrossIcon />
    //   <span className="align-text-middle pl-2">{message}</span>
    // </span>
    <div role="alert" className="alert alert-error">
      <ErrorCrossIcon />
      <span>{message}</span>
    </div>
  );
};

export default ErrorMessage;
