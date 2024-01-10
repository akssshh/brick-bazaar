

const Forminput = ({label, type, name}) => {
  return (
    <label className="form-control">
      <div className="label">
        <span className="label-text">{label}</span>
      </div>
      <input
        type={type}
        name={name}
        className="input input-bordered"
      />
    </label>
  );
};

export default Forminput;
