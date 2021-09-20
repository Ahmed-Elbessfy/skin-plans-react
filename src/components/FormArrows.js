import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const FormArrows = ({
  parentProps,
  values,
  condition,
  lastStep,
  firstStep,
  handleSubmit,
}) => {
  return (
    <div className="d-flex justify-content-between container flex-row formArrowsContainer">
      <button
        type="submit"
        className="btn text-white bg-prime border-0 rounded-pill"
        style={{
          width: `${lastStep && "12rem"}`,
        }}
        disabled={condition}
      >
        {/* {console.log("conditions : ", condition)} */}
        {lastStep ? (
          <NavLink
            to="/results"
            className="text-white rounded-pill submitFormBtn"
            data-active={!condition && "active"}
            onClick={() => handleSubmit(values)}
          >
            اعرض النتائج الخاصه بي
          </NavLink>
        ) : (
          <BsArrowRightShort style={{ fontSize: "2rem" }} />
        )}
      </button>
      {!lastStep && !firstStep && (
        <button
          type="button"
          className="btn text-white bg-prime rounded-pill"
          onClick={() => {
            parentProps.prev(values);
          }}
        >
          <BsArrowLeftShort style={{ fontSize: "2rem" }} />
        </button>
      )}
    </div>
  );
};

export default FormArrows;
