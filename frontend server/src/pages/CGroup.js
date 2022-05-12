import "./CGroup.css";
import Lottie from "react-lottie-player";
import animA from "./lf20_4w7rke9s.json";
import animB from "./lf20_aqepwxhc.json";

const CGroup = () => {
  return (
    <main className="main-content">
      <div className="form-group">
        <form action="" method="post">
          <div className="form-part">
            <label aria-required="true">Group Name</label>
            <div className="inp-part">
              <input
                className="form-input"
                name="Gname"
                id="Gname"
                type="text"
                placeholder="Please Fill Me"
                style={{ color: "black" }}
                autofocus
                required
              />
            </div>
          </div>
          <div className="form-part">
            <label>Group Description</label>
            <div className="inp-part">
              <textarea
                className="form-input"
                name="desc"
                id="desc"
                rows="4"
                cols="70"
                placeholder="Type Something About Your Group"
                style={{ color: "black" }}
              ></textarea>
            </div>
          </div>
          <div className="form-part">
            <label aria-required="true">Group Tag</label>
            <div className="inp-part">
              <input
                className="form-input"
                name="Gtag"
                id="business"
                value="Business"
                type="radio"
              />{" "}
              <label for="business" style={{ color: "white" }}>
                Business
              </label>
              <br />
              <input
                className="form-input"
                name="Gtag"
                id="nonComm"
                value="NonComm"
                type="radio"
              />{" "}
              <label for="nonComm" style={{ color: "white" }}>
                Non Commercial
              </label>
              <br />
              <input
                className="form-input"
                name="Gtag"
                id="personal"
                value="Personal"
                type="radio"
              />{" "}
              <label for="personal" style={{ color: "white" }}>
                Personal
              </label>
              <br />
              <input
                className="form-input"
                name="Gtag"
                id="ent"
                value="Entertain"
                type="radio"
              />{" "}
              <label for="ent" style={{ color: "white" }}>
                Entertain
              </label>
              <br />
              <input
                className="form-input"
                name="Gtag"
                id="edu"
                value="Education"
                type="radio"
              />{" "}
              <label for="edu" style={{ color: "white" }}>
                Education
              </label>
              <br />
            </div>
          </div>
          <div className="form-part">
            <label aria-required="true">Max Member</label>
            <div className="inp-part">
              <input
                className="form-input"
                name="member"
                id="member"
                type="number"
                min="1"
                placeholder="Max 1000"
                style={{ width: "5.5rem" }}
              />
            </div>
          </div>
          <div className="form-part">
            <input
              className="btn btn-success"
              type="submit"
              value="Submit"
              id="buttonSubmit"
            />
            <input className="btn btn-danger" type="reset" value="Cancel" />
          </div>
        </form>
      </div>
      <Lottie
        loop
        animationData={animA}
        play
        style={{
          width: "300px",
          height: "300px",
          marginLeft: "56rem",
          marginTop: "8rem",
        }}
      />
      <Lottie
        loop
        animationData={animB}
        play
        style={{
          width: "300px",
          height: "300px",
          marginLeft: "23rem",
          marginTop: "-32rem",
        }}
      />
    </main>
  );
};

export default CGroup;
